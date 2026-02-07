"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";

export function InstituteSection() {
  return (
    <SectionWrapper id="instituto">
      <SectionTitle title="Onde Nasce o Futuro" align="center" />

      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {
            "Costa da Mina e mais que um nome: e um elo entre continentes, historias e resistencias. E a lembranca viva de um territorio africano de onde partiram povos que transformaram o Brasil com sua sabedoria, espiritualidade, arte e capacidade de reconstrucao."
          }
        </p>

        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {
            "O Instituto Costa da Mina nasce no Brasil, Cidade Ademar, na Zona Sul de Sao Paulo, como um territorio de reexistencia e futuro, onde o conhecimento, a cultura e a educacao se tornam ferramentas de libertacao e pertencimento."
          }
        </p>

        {/* Highlight Quote */}
        <div className="my-10">
          <div className="highlight-box text-center text-lg md:text-xl font-serif italic rounded-lg">
            {'"Desenvolver e reparar, incluir e reconhecer."'}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {
            "Acreditamos que desenvolver e reparar, incluir e reconhecer, e que cada pessoa carrega dentro de si o valor de um continente inteiro."
          }
        </p>

        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {
            "Nossa missao e ampliar oportunidades e garantir direitos fundamentais, fortalecendo vinculos, promovendo a formacao cidada e criando pontes entre saberes tradicionais e contemporaneos."
          }
        </p>
      </div>
    </SectionWrapper>
  );
}
