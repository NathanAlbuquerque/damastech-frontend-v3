import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const logoSrc =
    variant === "light"
      ? "/images/logo/damastech-logo-white.png"
      : "/images/logo/damastech-logo-color.png";

  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src={logoSrc}
        alt="Damas Tech Logo"
        width={100}
        height={20}
        priority
        className={cn(className)}
      />
    </Link>
  );
}