import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  showDot?: boolean;
}

export function Eyebrow({ children, className, showDot = true }: EyebrowProps) {
  return (
    <span className={cn("eyebrow", className)}>
      {showDot && <span className="size-1 rounded-full bg-brand" aria-hidden />}
      {children}
    </span>
  );
}
