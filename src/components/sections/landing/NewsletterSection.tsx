"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
});

export function NewsletterSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("E-mail para newsletter:", values);
    // await api.post('/api/subscribe', values);
    form.reset();
  }

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="container mx-auto max-w-2xl">

        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            RECEBA NOSSAS OFERTAS
          </h2>
          <p className="text-lg text-muted-foreground">
            Basta cadastrar o seu email logo abaixo
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>

                    <div className="flex w-full items-center space-x-3 border-b border-gray-300 py-2">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Endereço de Email"
                        {...field}
                        className="flex-1 border-0 bg-transparent p-0 text-lg shadow-none ring-offset-0 placeholder:text-gray-400 focus-visible:ring-0"
                      />
                      <Button
                        type="submit"
                        variant="ghost"
                        className="shrink-0 text-base font-semibold text-gray-700 hover:bg-gray-100"
                      >
                        Cadastrar
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </section>
  );
}