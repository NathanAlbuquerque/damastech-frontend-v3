"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Importando todos os componentes de UI necessários
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// 1. DEFINIÇÃO DO ESQUEMA DE VALIDAÇÃO (Nível Doutor)
// Usamos o Zod para definir a "forma" dos nossos dados e suas regras.
const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "O nome deve ter pelo menos 2 caracteres.",
    }),
    email: z.string().email({
      message: "Por favor, insira um e-mail válido.",
    }),
    password: z.string().min(8, {
      message: "A senha deve ter pelo menos 8 caracteres.",
    }),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os termos e condições.",
    }),
    newsletter: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    // Validação de "refinamento" para checar se as senhas coincidem
    message: "As senhas não coincidem.",
    path: ["confirmPassword"], // Onde o erro deve aparecer
  });

// COMPONENTE PRINCIPAL
export function CtaSection() {
  // 2. INICIALIZAÇÃO DO FORMULÁRIO
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      newsletter: false,
    },
  });

  // 3. FUNÇÃO DE SUBMISSÃO
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Aqui você enviará os dados para a sua API de backend
    console.log("Dados do formulário válidos:", values);
    // Ex: await api.post('/register', values);
  }

  return (
    <section className="w-full bg-[#7A1F7F] py-12 md:py-24 lg:py-32 px-8">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Coluna da Esquerda: Textos */}
        <div className="flex flex-col items-center lg:items-baseline gap-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Dê o primeiro passo para <span className="text-[#FEB2E1]">sua nova carreira!</span>
          </h2>
          <p className="max-w-md text-lg text-purple-200 lg:text-xl">
            Aqui, você encontra oportunidades reais, apoio para sua jornada e
            conexões que impulsionam sua carreira.
          </p>
        </div>

        {/* Coluna da Direita: Formulário */}
        <div className="w-full max-w-md justify-self-center rounded-2xl bg-gradient-to-b from-[#740676] to-[#93399B] p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white">Comece agora</h3>
          <p className="mt-2 text-sm text-purple-200">
            Aprenda, conecte-se e trabalhe com empresas que acreditam no seu
            potencial.
          </p>

          {/* 4. RENDERIZAÇÃO DO FORMULÁRIO */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
              {/* Campo Nome */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nome" {...field} className="bg-[#ffffff3b] border-0 text-white placeholder:text-purple-200" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Campo Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} className="bg-[#ffffff3b] border-0 text-white placeholder:text-purple-200" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Campo Senha */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" placeholder="*Senha" {...field} className="bg-[#ffffff3b] border-0 text-white placeholder:text-purple-200" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Campo Confirmar Senha */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" placeholder="*Confirmar Senha" {...field} className="bg-[#ffffff3b] border-0 text-white placeholder:text-purple-200" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Checkboxes */}
              <div className="text-xs text-purple-200">
                Seus dados nos ajudam a criar uma comunidade segura e a
                conectar você com oportunidades reais.{" "}
                <Link href="/privacidade" className="font-bold underline hover:text-white">
                  Saiba como cuidamos de seus dados.
                </Link>
              </div>

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} className="border-white" />
                    </FormControl>
                    <div className="space-y-1">
                      <FormLabel className="text-xs text-purple-200">
                        <span>
                          Li e concordo com os{" "}
                          <Link href="/termos-de-uso" className="font-bold underline hover:text-white">
                            Termos de Uso
                          </Link>{" "}
                          e a{" "}
                          <Link href="/privacidade" className="font-bold underline hover:text-white">
                            Política de Privacidade
                          </Link>
                          .
                        </span>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} className="border-white" />
                    </FormControl>
                    <FormLabel className="text-xs text-white">
                      Quero receber newsletters, dicas de carreira e
                      oportunidades exclusivas por e-mail.
                    </FormLabel>
                  </FormItem>
                )}
              />
              
              {/* Botão de Submissão */}
              <Button type="submit" size="lg" className="w-full bg-[#c026d3] text-white hover:bg-[#c026d3]/90">
                Quero fazer parte!
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}