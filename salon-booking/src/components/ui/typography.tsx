import { JSX } from "react";
import { cn } from "@/lib/utils"; // optional helper to merge classNames

type TypographyProps = {
  as?: "p" | "h1" | "h2" | "h3" | "span" | "small";
  children: React.ReactNode;
  className?: string;
};

const Typography = ({ as = "p", children, className }: TypographyProps) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  // Define default styles for each type
  const styles: Record<string, string> = {
    h1: "text-4xl font-bold leading-tight",
    h2: "text-3xl font-semibold leading-snug",
    h3: "text-2xl font-semibold leading-snug",
    p: "text-base leading-7",
    span: "text-base",
    small: "text-sm leading-5",
  };

  return <Tag className={cn(styles[as], className)}>{children}</Tag>;
};

export default Typography;
