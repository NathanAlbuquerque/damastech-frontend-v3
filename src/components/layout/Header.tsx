import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="fixed top-6 z-50 w-full px-4">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-2xl bg-white px-8 shadow-lg">
        {/* Lado Esquerdo: Logo */}
        <div className="flex items-center">
          <Icon variant="dark" className="w-6" /> 
        </div>

        {/* Centro: Navegação */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/conheca-nos" 
            className="text-base font-bold text-[#9F0564] transition-opacity hover:opacity-80"
          >
            Conheça-nos
          </Link>
          <Link 
            href="/servicos" 
            className="text-base font-bold text-[#9F0564] transition-opacity hover:opacity-80"
          >
            Serviços
          </Link>
          <Link 
            href="/depoimentos" 
            className="text-base font-bold text-[#9F0564] transition-opacity hover:opacity-80"
          >
            Depoimentos
          </Link>
        </nav>

        {/* Lado Direito: Login e Avatar */}
        <div className="flex items-center space-x-4">
          <Button 
            asChild 
            variant="outline" 
            className="border-[#9F0564] text-[#9F0564] hover:bg-[#9F0564] hover:text-white font-semibold px-8 rounded-lg"
          >
            <Link href="/login">Login</Link>
          </Button>
          
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarImage src="" alt="Damas Tech" /> {/* src vazio para forçar o Fallback */}
            <AvatarFallback className="bg-[#D68CB8] text-[#9F0564] font-bold">
              DT
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}