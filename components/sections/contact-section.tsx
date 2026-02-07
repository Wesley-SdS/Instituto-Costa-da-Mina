"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";

const CONTACT_INFO = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Celular",
    value: "(11) 95858-1395",
    href: "tel:+5511958581395",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "E-mail",
    value: "contato.costadamina@gmail.com",
    href: "mailto:contato.costadamina@gmail.com",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    label: "CNPJ",
    value: "62.212.632/0001-76",
    href: undefined,
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Localizacao",
    value: "Cidade Ademar, Zona Sul de Sao Paulo - SP",
    href: undefined,
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API
    setSubmitted(true);
    setFormState({ nome: "", email: "", mensagem: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <SectionWrapper id="contato">
      <SectionTitle title="Informacoes e Contato" align="center" />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {
              "Entre em contato conosco para saber mais sobre o Instituto Costa da Mina, nossos projetos e como voce pode participar ou contribuir."
            }
          </p>

          <div className="space-y-4 pt-2">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-lg border border-border bg-card p-6 md:p-8"
          >
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                required
                value={formState.nome}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, nome: e.target.value }))
                }
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                required
                rows={5}
                value={formState.mensagem}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    mensagem: e.target.value,
                  }))
                }
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                placeholder="Sua mensagem..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Enviar
            </button>

            {submitted && (
              <p className="text-center text-sm font-medium text-primary animate-fade-in">
                {"Mensagem enviada com sucesso! Entraremos em contato em breve."}
              </p>
            )}
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
