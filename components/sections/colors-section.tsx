"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";

const COLOR_SWATCHES = [
  { hex: "#6A0D74", name: "Roxo", textClass: "text-[#FFFFFF]" },
  { hex: "#FED501", name: "Amarelo", textClass: "text-[#4A0952]" },
  { hex: "#000000", name: "Preto", textClass: "text-[#FFFFFF]" },
];

export function ColorsSection() {
  return (
    <SectionWrapper id="cores">
      <SectionTitle
        title="A Forca das Cores"
        subtitle="Roxo e Amarelo"
        align="center"
      />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Purple description */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-2 md:min-h-[140px] h-2 md:h-auto rounded-full shrink-0" style={{ backgroundColor: "#6A0D74" }} />
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              Roxo
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {
                "O roxo acompanha a trajetoria da fundadora desde o inicio, presente nas paredes do salao de trancas, nas primeiras identidades visuais e nos sonhos que se expandiram ate este novo ciclo. Representa sabedoria, espiritualidade e transformacao — a cor do tempo e da memoria."
              }
            </p>
          </div>
        </div>

        {/* Yellow description */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-2 md:min-h-[140px] h-2 md:h-auto rounded-full shrink-0" style={{ backgroundColor: "#FED501" }} />
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              Amarelo
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {
                "O amarelo surge como a luz que revela, a cor da vida, da alegria e da expansao. E o tom que desperta movimento, esperanca e energia criativa."
              }
            </p>
          </div>
        </div>

        {/* Orixas highlight */}
        <div className="highlight-box text-center rounded-lg">
          <p className="text-sm md:text-base font-serif italic leading-relaxed">
            {
              "Essa uniao evoca a forca das orixas femininas: Nana, senhora da sabedoria, ligada ao roxo; e Oxum, orixa das aguas doces, associada ao amarelo e ao dourado."
            }
          </p>
        </div>

        {/* Color swatches */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          {COLOR_SWATCHES.map((swatch) => (
            <div key={swatch.hex} className="flex flex-col items-center gap-2">
              <div
                className={`w-24 h-24 md:w-28 md:h-28 rounded-lg shadow-lg flex items-center justify-center ${swatch.textClass} text-xs font-mono font-semibold border border-border`}
                style={{ backgroundColor: swatch.hex }}
              >
                {swatch.hex}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {swatch.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
