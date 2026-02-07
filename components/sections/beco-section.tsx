"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";

const MURALS = [
  {
    title: "Mural 1 — 3 Geracoes de Trancistas",
    description:
      "Localizado em frente ao no 109, homenageia as mulheres negras que perpetuam, atraves das trancas, uma tradicao ancestral de identidade e resistencia.",
    image: "/images/mural-trancistas.jpg",
    alt: "Mural de tres geracoes de trancistas na Rua Osorio de Castro",
  },
  {
    title: "Mural 2 — Painel de Entrada 'Beco da Mina'",
    description:
      "Na esquina da mesma rua, da as boas-vindas a quem chega, transformando o espaco em ponto de encontro e reconhecimento cultural.",
    image: "/images/mural-beco-entrada.jpg",
    alt: "Painel de entrada do Beco da Mina com arte urbana afro-brasileira",
  },
];

export function BecoSection() {
  return (
    <SectionWrapper id="beco-da-mina" alternate>
      <div className="text-center mb-4">
        <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1 text-xs font-bold text-secondary-foreground tracking-wide uppercase">
          Primeira Acao
        </span>
      </div>

      <SectionTitle title="Projeto Beco da Mina" align="center" />

      <div className="max-w-3xl mx-auto space-y-6 mb-14">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-center">
          {
            "O Instituto Costa da Mina inicia suas atividades com uma acao simbolica e transformadora: a pintura dos murais da Rua Osorio de Castro, na Vila Inglesa, dando vida ao projeto 'Beco da Mina'."
          }
        </p>
        <p className="text-muted-foreground leading-relaxed text-base text-center">
          {
            "Realizado pela Associacao Costa da Mina, com execucao artistica de Waldir Age e equipe (Age Acao Visual)."
          }
        </p>
      </div>

      {/* Murals Grid */}
      <div className="grid gap-8 md:grid-cols-2 mb-12">
        {MURALS.map((mural) => (
          <div
            key={mural.title}
            className="group overflow-hidden rounded-lg border border-primary/20 bg-card transition-all duration-300 hover:shadow-[0_8px_32px_hsl(var(--secondary)/0.2)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={mural.image || "/placeholder.svg"}
                alt={mural.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-serif text-lg font-bold text-card-foreground">
                {mural.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {mural.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Highlight */}
      <div className="highlight-box text-center rounded-lg max-w-3xl mx-auto">
        <p className="text-sm md:text-base font-serif italic leading-relaxed">
          {
            "Mais do que uma pintura, o 'Beco da Mina' e um gesto de renascimento coletivo, onde a cor e a historia se unem para reconstruir o presente e inspirar o futuro."
          }
        </p>
      </div>
    </SectionWrapper>
  );
}
