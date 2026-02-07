"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";

const PARAGRAPHS = [
  "A Costa da Mina e uma regiao da Africa Ocidental que abrange os atuais territorios de Gana, Togo, Benim e Nigeria, ao longo do Golfo da Guine. Essa faixa litoranea foi, por seculos, o ponto de origem de diversos povos africanos com rica diversidade cultural, linguistica e espiritual.",
  "Entre eles estavam os Akan, Ewe, Fon, Yoruba, Fante e Adja, entre outros grupos que desenvolveram reinos e civilizacoes organizadas, como os reinos de Daome, Oyo e Ashanti. Essas sociedades possuiam sistemas politicos estruturados, producao artesanal refinada, praticas agricolas avancadas e tradicoes religiosas profundas.",
  "No Brasil, a presenca mina e percebida na formacao das religioes afro-brasileiras, como o candomble jeje-nago e a Casa das Minas no Maranhao; na musica e na oralidade, com ritmos, cantos e expressoes de origem africana; e nas relacoes de pertencimento e identidade negra que atravessam seculos.",
  "A Costa da Mina nao representa apenas um ponto geografico de origem, mas um nucleo civilizatorio africano cuja heranca moldou de forma decisiva o que hoje se reconhece como a base cultural afro-brasileira.",
];

export function AboutSection() {
  return (
    <SectionWrapper id="quem-somos" alternate>
      <SectionTitle
        title="Costa da Mina"
        subtitle="Onde Nasce o Futuro com a Forca das Origens"
        align="center"
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          {PARAGRAPHS.map((p, i) => (
            <p
              key={i}
              className="text-muted-foreground leading-relaxed text-base"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Image */}
        <div className="flex-1 lg:max-w-md w-full">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-2 border-primary/20">
            <Image
              src="/images/costa-da-mina-heritage.jpg"
              alt="Ilustracao artistica representando a heranca cultural da Costa da Mina na Africa Ocidental"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          {/* Caption */}
          <p className="mt-3 text-xs text-muted-foreground text-center italic">
            {"A heranca cultural da Costa da Mina na Africa Ocidental"}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
