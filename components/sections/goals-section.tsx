"use client";

import { Music, Palette, Scissors } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";
import type { ReactNode } from "react";

interface GoalCardProps {
  numeral: string;
  icon: ReactNode;
  title: string;
  description: string;
}

function GoalCard({ numeral, icon, title, description }: GoalCardProps) {
  return (
    <div className="group relative rounded-lg border-2 border-primary/20 bg-card p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_8px_32px_hsl(var(--secondary)/0.2)]">
      {/* Numeral */}
      <span className="absolute -top-4 left-6 inline-flex items-center justify-center rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
        {numeral}
      </span>

      {/* Icon */}
      <div className="mb-5 mt-2 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mb-3 font-serif text-xl font-bold text-card-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

const GOALS = [
  {
    numeral: "I",
    icon: <Music className="h-6 w-6" />,
    title: "Eventos Culturais",
    description:
      "Promover eventos culturais e artisticos e projetos de oficinas de arte. Gerar impacto cultural regional.",
  },
  {
    numeral: "II",
    icon: <Palette className="h-6 w-6" />,
    title: "Oficinas de Arte",
    description:
      "Planejar e executar oficinas de musica, danca, teatro, artes visuais, poesia e linguagens artisticas diversas.",
  },
  {
    numeral: "III",
    icon: <Scissors className="h-6 w-6" />,
    title: "Formacao de Trancistas",
    description:
      "Capacitar a comunidade a se tornarem profissionais trancistas, abrindo portas para uma nova fonte de renda, com flexibilidade.",
  },
];

export function GoalsSection() {
  return (
    <SectionWrapper id="metas" alternate>
      <SectionTitle
        title="Metas do Projeto"
        subtitle="Promover o desenvolvimento social, cultural, educacional e profissionalizante de pessoas em situacao de vulnerabilidade."
        align="center"
      />

      <div className="grid gap-8 md:grid-cols-3">
        {GOALS.map((goal) => (
          <GoalCard key={goal.numeral} {...goal} />
        ))}
      </div>
    </SectionWrapper>
  );
}
