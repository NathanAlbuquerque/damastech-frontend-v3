import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#8D0899] text-white py-4 px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/assets/landing/hero-background-pattern.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative z-10 grid grid-cols-1 items-center gap-12 py-6 md:grid-cols-2 lg:py-12">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">
            CONSTRUA SEU FUTURO NA TECNOLOGIA
          </h1>
          <p className="mt-4 max-w-md text-lg text-purple-200">
            Sua jornada para uma carreira em tecnologia começa aqui. Conectamos
            você a empresas inovadoras.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-[#C2149F] hover:bg-white/90 hover:text-[#8D0899]">
              <Link href="/jornada">Começar Minha Jornada</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white bg-[#8D0899] text-white hover:bg-white hover:text-[#8D0899]">
              <Link href="/saiba-mais">Saiba Mais</Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <Image
            src="/assets/landing/hero-person.png"
            alt="Mulher sorrindo e usando fones de ouvido, cercada por ícones de tecnologia"
            width={500}
            height={500}
            quality={95}
            priority
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}