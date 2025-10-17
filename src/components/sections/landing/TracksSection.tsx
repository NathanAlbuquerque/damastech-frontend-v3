import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BookMarked, CheckCircle, LucideIcon } from "lucide-react";

const tracksData = [
  {
    imageSrc: "/assets/landing/track-image.jpg",
    icon: BookMarked,
    title: "Desenvolvimento Full-Stack",
    features: [
      "Lógica de Programação",
      "Front-end com React",
      "Back-end com Node.js",
      "Bancos de Dados e muito mais!",
    ],
    link: "/trilhas/full-stack",
  },
  {
    imageSrc: "/assets/landing/track-image.jpg",
    icon: BookMarked,
    title: "Desenvolvimento Front-End",
    features: [
      "HTML, CSS & JavaScript",
      "React e Next.js",
      "Tailwind CSS",
      "Design Systems e muito mais!",
    ],
    link: "/trilhas/front-end",
  },
  {
    imageSrc: "/assets/landing/track-image.jpg",
    icon: BookMarked,
    title: "Engenharia de Dados",
    features: [
      "Python para Dados",
      "SQL e NoSQL",
      "Ferramentas de ETL",
      "Cloud (AWS/GCP) e muito mais!",
    ],
    link: "/trilhas/data-engineering",
  },
];

interface TrackCardProps {
  imageSrc: string;
  icon: LucideIcon;
  title: string;
  features: string[];
  link: string;
}

function TrackCard({ imageSrc, icon: Icon, title, features, link }: TrackCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <Image
        src={imageSrc}
        alt={`Imagem da trilha de ${title}`}
        width={400}
        height={200}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
            <Icon className="h-5 w-5 text-[#7D068A]" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ul className="mt-4 ml-4 flex flex-col gap-2 text-muted-foreground">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#C2149F]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <Button asChild size="lg" className="w-full bg-[#C2149F] text-white hover:bg-[#C2149F]/90">
            <Link href={link}>Seguir trilha</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function TracksSection() {
  return (
    <section className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            NOSSAS PRINCIPAIS{" "}
            <span className="text-[#AD1AC9]">TRILHAS!</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-semibold md:text-xl">
            Escolha o caminho que mais combina com seus objetivos e comece a
            construir seu futuro hoje.
          </p>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tracksData.map((track) => (
            <TrackCard
              key={track.title}
              imageSrc={track.imageSrc}
              icon={track.icon}
              title={track.title}
              features={track.features}
              link={track.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}