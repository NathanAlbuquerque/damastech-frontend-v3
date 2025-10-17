import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    quote:
      "Este é um texto genérico para a aba de depoimentos, criado para representar o conteúdo que será exibido nesta seção. A plataforma mudou minha carreira.",
    name: "Nina Soares",
    role: "Desenvolvedora Full-Stack",
    avatarSrc: "/assets/landing/avatars/nina-soares.jpg",
  },
  {
    quote:
      "A comunidade é incrível! Consegui meu primeiro emprego através das conexões que fiz aqui. Recomendo de olhos fechados.",
    name: "Carla Mendes",
    role: "Engenheira de Software",
    avatarSrc: "/assets/landing/avatars/carla-mendes.jpg",
  },
  {
    quote:
      "O conteúdo dos cursos é super atualizado e focado no que o mercado realmente precisa. A Damas Tech foi um divisor de águas na minha jornada.",
    name: "Ana Oliveira",
    role: "Desenvolvedora Front-End",
    avatarSrc: "/assets/landing/avatars/ana-oliveira.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="w-full bg-white py-12 md:py-24 lg:py-32 px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/assets/landing/testimonials-background-pattern.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O QUE NOSSAS <span className="text-[#AD1AC9]">DAMAS!</span> TÊM A DIZER?
            </h2>
            <div className="mt-8 w-full max-w-md">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="relative"
              >
                <CarouselContent>
                  {testimonialsData.map((testimonial) => (
                    <CarouselItem key={testimonial.name}>
                      <div className="rounded-xl border bg-card p-6 text-card-foreground shadow">
                        <div className="flex items-start gap-4">
                          <Image
                            src={testimonial.avatarSrc}
                            alt={`Avatar de ${testimonial.name}`}
                            width={56}
                            height={56}
                            className="h-14 w-14 rounded-full"
                          />
                          <div className="flex flex-col text-left">
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <blockquote className="mt-4 border-l-2 pl-4 italic text-muted-foreground">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 transform">
                  <CarouselPrevious className="static" />
                  <CarouselNext className="static ml-2" />
                </div>
              </Carousel>
            </div>
          </div>

          {/* Coluna da Direita: Imagem Principal */}
          <div className="hidden lg:flex justify-center">
            <Image
              src="/assets/landing/testimonials-main-image.png"
              alt="Mulher feliz falando ao telefone e vestindo uma camisa da Damas Tech"
              width={500}
              height={500}
              quality={95}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}