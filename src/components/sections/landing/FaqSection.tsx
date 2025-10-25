import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Headset, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    id: "item-1",
    question: "Preciso pagar alguma coisa para participar?",
    answer:
      "Nossos cursos e projetos de capacitação são subsidiados por empresas parceiras, eliminando a barreira financeira inicial para você. O modelo de pagamento acontece apenas após você ser contratada.",
  },
  {
    id: "item-2",
    question: "Preciso ter algum conhecimento prévio em tecnologia?",
    answer:
      "Não! Nossas trilhas são desenhadas para levar você do zero ao nível profissional, com todo o suporte necessário para sua jornada.",
  },
  {
    id: "item-3",
    question: "Quanto tempo preciso dedicar à formação?",
    answer:
      "A dedicação varia por trilha, mas recomendamos em média de 10 a 15 horas semanais para um progresso sólido e eficaz.",
  },
  {
    id: "item-4",
    question: "A contratação ao final do curso é garantida?",
    answer:
      "Não podemos garantir a contratação, pois depende do seu desempenho e do processo seletivo das empresas. No entanto, fazemos a conexão direta com empresas que estão ativamente contratando e damos todo o suporte para sua preparação.",
  },
];

export function FaqSection() {
  return (
    <section className="w-full bg-white py-12 md:py-24 lg:py-32 px-8">
      <div className="container grid grid-cols-1 items-start gap-12 md:gap-16 lg:grid-cols-2">

        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            Perguntas
            <br />
            <span className="text-[#BC15D0]">Frequentes</span>
          </h2>
          <p className="max-w-md text-lg text-muted-foreground">
            Tire suas dúvidas por aqui! Se ainda estiver, entre em contato
            com nosso suporte.
          </p>
          <Button
            asChild
            variant="ghost"
            className="w-fit justify-start p-0 text-base font-semibold text-[#7D068A] hover:bg-transparent hover:text-[#7D068A]/90 hover:underline"
          >
            <Link href="/suporte" className="flex items-center gap-2">
              Contatar Suporte
              <Headset className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left font-semibold">
                  <div className="flex items-center gap-3 cursor-pointer">
                    <HelpCircle className="h-6 w-6 text-muted-foreground" />
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}