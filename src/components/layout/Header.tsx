import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent border-b">
      <div className="container flex h-16 items-center justify-between mx-auto my-4">

        <div className="flex items-center space-x-8">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" asChild className="text-base">
              <Link href="/conheca-nos">Conheça-nos</Link>
            </Button>
            <Button variant="ghost" asChild className="text-base">
              <Link href="/servicos">Serviços</Link>
            </Button>
            <Button variant="ghost" asChild className="text-base">
              <Link href="/depoimentos">Depoimentos</Link>
            </Button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild className="text-base">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="text-base">
            <Link
              href="/registrar"
              className="bg-[#7D068A] hover:bg-[#7D068A]/90 text-white px-6 py-2 rounded-lg"
            >
              Registrar
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}