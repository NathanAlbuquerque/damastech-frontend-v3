import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const journeySteps = [
  {
    step: "1ª Etapa",
    description: "Abra sua conta!",
  },
  {
    step: "2ª Etapa",
    description: "Personalize sua Trilha",
  },
  {
    step: "3ª Etapa",
    description: "Eleve suas oportunidades",
  },
];

export function JourneySection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFA9E3] to-[#F7EAF2] py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          <div className="flex justify-center">
            <Image
              src="/assets/landing/journey-illustration.png"
              alt="Ilustração de uma mulher sentada com um laptop, cercada por ícones de linguagens de programação"
              width={500}
              height={500}
              quality={95}
            />
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="text-3xl text-center font-bold tracking-tighter text-[#710B84] sm:text-4xl md:text-5xl">
              PARTICIPE DESSA JORNADA!
            </h2>

            <div className="mt-8 flex w-full flex-col justify-between gap-8 sm:flex-row">
              {journeySteps.map((item) => (
                <div key={item.step} className="flex flex-col text-center items-center sm:items-start">
                  <p className="font-semibold text-[#9F0564] w-full">{item.step}</p>
                  {/* <div className="relative mb-2">
                    <div className="absolute -top-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#C14692]" />
                  </div> */}
                  <p className="text-lg font-medium text-slate-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Button size="lg" asChild className="mt-10 bg-[#BF3C8D] text-white hover:bg-[#BF3C8D]/90 w-full">
              <Link href="/jornada">Começar Minha Jornada</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}