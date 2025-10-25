import Image from "next/image";
import Link from "next/link";

const supportersData = [
  {
    name: "StartupNE",
    logoSrc: "/assets/landing/supporters/startupne-logo.png",
    url: "#",
  },
  {
    name: "Sebrae",
    logoSrc: "/assets/landing/supporters/sebrae-logo.png",
    url: "#",
  },
  {
    name: "Mermãs Digitais",
    logoSrc: "/assets/landing/supporters/mermas-logo.png",
    url: "#",
  },
  {
    name: "Instituto Federal Maranhão",
    logoSrc: "/assets/landing/supporters/ifma-logo.png",
    url: "#",
  },
  {
    name: "Unknown Supporter",
    logoSrc: "/assets/landing/supporters/unknown-supporter-logo.png",
    url: "#",
  },
];

export function SupportersSection() {
  return (
    <section className="w-full bg-[#7D068A] text-white px-8">
      <div className="container grid grid-cols-1 items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            QUEM NOS APOIA?
          </h2>
          <p className="mt-2 text-lg text-purple-200">
            Temos a gratidão por todos que acreditam nessa transformação
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-y-6 lg:justify-end">
          {supportersData.map((supporter) => (
            <Link
              key={supporter.name}
              href={supporter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src={supporter.logoSrc}
                alt={`Logo ${supporter.name}`}
                width={120}
                height={40}
                className="h-10 object-contain" // Garante que os logos mantenham a proporção
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}