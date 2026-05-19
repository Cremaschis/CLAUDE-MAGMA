const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!domain || !token) {
  console.warn(
    "Shopify credentials no configuradas. Definí NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN y NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN en .env.local"
  );
}

interface ShopifyCartLine {
  merchandiseId: string;
  quantity: number;
}

interface CartCreateResponse {
  cartCreate: {
    cart: {
      id: string;
      checkoutUrl: string;
    } | null;
    userErrors: Array<{ field: string[]; message: string }>;
  };
}

const CART_CREATE_MUTATION = `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

async function storefrontRequest<T>(query: string, variables: Record<string, unknown>) {
  if (!domain || !token) {
    throw new Error("Faltan credenciales de Shopify");
  }

  const res = await fetch(`https://${domain}/api/2024-10/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Shopify request failed (${res.status})`);
  }

  const json = await res.json();
  return json as { data?: T; errors?: Array<{ message?: string }> };
}

export async function createShopifyCheckout(lines: ShopifyCartLine[]): Promise<string> {
  if (lines.length === 0) throw new Error("El carrito está vacío");
  const validLines = lines.filter((l) => l.merchandiseId && l.merchandiseId.startsWith("gid://"));
  if (validLines.length === 0) throw new Error("Los productos no tienen Shopify Variant ID configurado. Verificá lib/content.ts");

  const { data, errors } = await storefrontRequest<CartCreateResponse>(CART_CREATE_MUTATION, {
    input: { lines: validLines },
  });

  if (errors?.length) throw new Error(`Shopify API error: ${errors[0]?.message || "Unknown error"}`);
  if (!data?.cartCreate.cart) {
    const userErrorMsg = data?.cartCreate.userErrors.map((e) => e.message).join(", ");
    throw new Error(userErrorMsg || "No se pudo crear el carrito en Shopify");
  }
  return data.cartCreate.cart.checkoutUrl;
}
