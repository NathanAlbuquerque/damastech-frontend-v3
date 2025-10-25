import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const footerLinkColumns = [
  {
    title: "Coluna Um",
    links: [
      { name: "Link Um", href: "#" },
      { name: "Link Dois", href: "#" },
      { name: "Link Três", href: "#" },
    ],
  },
  {
    title: "Coluna Dois",
    links: [
      { name: "Link Quatro", href: "#" },
      { name: "Link Cinco", href: "#" },
      { name: "Link Seis", href: "#" },
    ],
  },
  {
    title: "Coluna Três",
    links: [
      { name: "Link Sete", href: "#" },
      { name: "Link Oito", href: "#" },
    ],
  },
];

// DADOS PARA OS ÍCONES SOCIAIS
const socialLinks = [
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      
      <div className="w-full bg-purple-50 py-12 md:py-16">
        <div className="container">
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {footerLinkColumns.map((column) => (
              <div key={column.title} className="flex flex-col items-center gap-4">
                <h4 className="font-bold">{column.title}</h4>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PARTE INFERIOR (Social e Legal) */}
      <div className="w-full bg-[#7D068A] py-8 text-white">
        <div className="container flex flex-col items-center gap-6">
          {/* Ícones Sociais */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          
          <p className="text-sm text-purple-200">
            © {currentYear} Damas Tech. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-sm text-purple-200 underline-offset-4 hover:text-white hover:underline"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-e-condicoes"
              className="text-sm text-purple-200 underline-offset-4 hover:text-white hover:underline"
            >
              Termos e Condições
            </Link>
            <Link
              href="/politica-de-cookies"
              className="text-sm text-purple-200 underline-offset-4 hover:text-white hover:underline"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}