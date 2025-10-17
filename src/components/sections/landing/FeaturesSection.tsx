import Image from "next/image";
import { Eye, Award, Users, HeartHandshake, LucideIcon } from "lucide-react";

const featuresData = [
  {
    icon: Eye,
    title: "VISIBILIDADE NO MERCADO",
    description: "Seus projetos o colocam em evidência para as empresas que buscam ativamente por talentos como você.",
  },
  {
    icon: Award,
    title: "CURSOS SUBSIDIADOS",
    description: "Realize sua transição de carreira com o ensino custeado por uma empresa. Aqui, o investimento é em você.",
  },
  {
    icon: Users,
    title: "NETWORKING",
    description: "Conecte-se com profissionais experientes, mentoras e recrutadores em nossos eventos e fóruns exclusivos.",
  },
  {
    icon: HeartHandshake,
    title: "COMUNIDADE",
    description: "Troque experiências, tire dúvidas e cresça junto com outras mulheres na mesma jornada.",
  },
];

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border p-6 text-left">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-100">
          <Icon className="h-6 w-6 text-[#8D0899]" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-lg text-muted-foreground font-semibold">
            Mais do que um curso — uma rede de apoio e oportunidades reais.
          </p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            VEJA O QUE LHE <span className="text-[#8D0899]">ESPERA!</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            <Image
              src="/assets/landing/features-main-image.png"
              alt="Mulher refletindo sobre carreira em tecnologia, com ícones de HTML, CSS e JS ao redor"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}