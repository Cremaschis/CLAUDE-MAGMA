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

export async function createShopifyCheckout(lines: ShopifyCartLine[]): Promise<string> {
  if (lines.length === 0) throw new Error("El carrito está vacío");

  const validLines = lines.filter((l) => l.merchandiseId && l.merchandiseId.startsWith("gid://"));
  if (validLines.length === 0) {
    throw new Error("Los productos no tienen Shopify Variant ID configurado. Verificá lib/content.ts");
  }

  if (!domain || !token) {
    throw new Error("Faltan credenciales Shopify. Configurá .env.local");
  }

  const endpoint = `https://${domain}/api/2024-10/graphql.json`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({
      query: CART_CREATE_MUTATION,
      variables: { input: { lines: validLines } },
    }),
  });

  if (!response.ok) {
    throw new Error(`Shopify API error: HTTP ${response.status}`);
  }

  const payload = (await response.json()) as {
    data?: CartCreateResponse;
    errors?: Array<{ message?: string }>;
  };

  if (payload.errors?.length) {
    throw new Error(`Shopify API error: ${payload.errors[0]?.message || "Unknown error"}`);
  }

  if (!payload.data?.cartCreate.cart) {
    const userErrorMsg = payload.data?.cartCreate.userErrors.map((e) => e.message).join(", ");
    throw new Error(userErrorMsg || "No se pudo crear el carrito en Shopify");
  }

  return payload.data.cartCreate.cart.checkoutUrl;
}
