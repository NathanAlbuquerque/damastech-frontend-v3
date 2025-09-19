import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/logo/damas-tech-logo.png"
        alt="Damas Tech Logo"
        width={150}
        height={30}
        priority // Garante que o logo seja carregado prioritariamente
        className={className}
      />
      {/* <span className="sr-only">Damas Tech</span> */}
      {/* Opcional: para leitores de tela se o logo for apenas imagem */}
    </Link>
  );
}