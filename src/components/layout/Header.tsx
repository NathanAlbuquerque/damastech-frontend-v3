import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { UserRound } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#7D068A] border-b border-[#7D068A] py-4 px-8">
      <div className="container flex h-16 items-center justify-between">
          <Logo variant="light" />

          <nav className="hidden md:flex items-center space-x-10">
            <Button
              variant="ghost"
              asChild
              className="text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/conheca-nos">Conheça-nos</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/servicos">Serviços</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/depoimentos">Depoimentos</Link>
            </Button>
          </nav>

          <Button variant="ghost" asChild className="text-base text-white hover:bg-white/10 hover:text-white">
            <Link href="/registrar" className="flex items-center gap-4">
              <span>Criar Conta</span>
              <div className="bg-white rounded-full p-1">
                <UserRound className="h-4 w-4 text-[#7D068A]" />
              </div>
            </Link>
          </Button>
      </div>
    </header>
  );
}