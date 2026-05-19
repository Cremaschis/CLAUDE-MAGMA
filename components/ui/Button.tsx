import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary: "bg-brand text-primary hover:bg-brand-glow hover:text-primary shadow-premium-card hover:shadow-brand-glow",
  secondary: "bg-white/[0.03] text-primary border border-white/20 hover:bg-brand/15 hover:border-brand/70",
  ghost: "bg-transparent text-secondary hover:text-primary hover:bg-white/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-8 text-base",
};

const baseStyles = [
  "group inline-flex items-center justify-center gap-2",
  "rounded-btn font-semibold tracking-tight",
  "transition-all duration-300 ease-out-expo",
  "active:translate-y-0 hover:-translate-y-0.5",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-base",
  "disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0",
  "whitespace-nowrap",
].join(" ");

interface CommonProps {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };
type ButtonAsLink = CommonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };
type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = "primary", size = "md", showArrow = false, className, children, ...props }, ref) {
    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    const content = (
      <>
        {children}
        {showArrow && (
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden
          />
        )}
      </>
    );

    if ("href" in props && props.href) {
      const { href, ...rest } = props as ButtonAsLink;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonAsButton)}
      >
        {content}
      </button>
    );
  }
);
