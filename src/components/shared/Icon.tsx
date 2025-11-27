import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IconProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Icon({ variant = "dark", className }: IconProps) {
  const iconSrc =
    variant === "light"
      ? "/assets/logo/damastech-icon-color.svg"
      : "/assets/logo/damastech-icon-color.svg";

  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src={iconSrc}
        alt="Damastech Icon"
        width={10}
        height={10}
        priority
        className={cn(className)}
      />
    </Link>
  );
}