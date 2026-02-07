"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blob */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl animate-float" />
        {/* Smaller blob */}
        <div className="absolute bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
        {/* Geometric pattern - subtle */}
        <div className="absolute top-1/2 right-0 w-px h-40 bg-primary/20" />
        <div className="absolute top-1/3 right-10 w-px h-24 bg-secondary/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-32 lg:py-40 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Content */}
          <div className="max-w-2xl">
            <div
              className={`transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-8">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-medium text-primary tracking-wide uppercase">
                  Cidade Ademar, Zona Sul de SP
                </span>
              </div>

              <h1 className="font-serif font-bold text-foreground text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                {"Raizes que educam, cultura que transforma, futuro que floresce."}
              </h1>

              <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
                {
                  "O Instituto Costa da Mina e um territorio de reexistencia e futuro na Zona Sul de Sao Paulo, onde conhecimento, cultura e educacao se tornam ferramentas de libertacao e pertencimento."
                }
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollTo("#instituto")}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  {"Conheca o Projeto"}
                </button>
                <button
                  onClick={() => scrollTo("#contato")}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Entre em Contato
                </button>
              </div>
            </div>
          </div>

          {/* Decorative visual element */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-1000 delay-300 ${
              mounted
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full border-2 border-primary/20 flex items-center justify-center">
                {/* Inner circle */}
                <div className="w-56 h-56 xl:w-64 xl:h-64 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                  {/* Chair with roots icon placeholder */}
                  <svg
                    viewBox="0 0 120 120"
                    className="w-32 h-32 xl:w-36 xl:h-36"
                    fill="none"
                    aria-hidden="true"
                  >
                    {/* Chair seat */}
                    <rect
                      x="30"
                      y="35"
                      width="60"
                      height="8"
                      rx="4"
                      className="fill-primary"
                    />
                    {/* Chair back */}
                    <rect
                      x="70"
                      y="10"
                      width="8"
                      height="30"
                      rx="4"
                      className="fill-primary"
                    />
                    <rect
                      x="82"
                      y="15"
                      width="6"
                      height="25"
                      rx="3"
                      className="fill-primary/60"
                    />
                    {/* Chair leg left */}
                    <rect
                      x="35"
                      y="43"
                      width="6"
                      height="20"
                      rx="3"
                      className="fill-primary"
                    />
                    {/* Chair leg right */}
                    <rect
                      x="79"
                      y="43"
                      width="6"
                      height="20"
                      rx="3"
                      className="fill-primary"
                    />
                    {/* Roots growing from base */}
                    <path
                      d="M38 63 C35 75 25 80 20 90 M38 63 C33 72 30 82 32 95 M41 63 C40 78 38 88 42 100"
                      className="stroke-secondary"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M82 63 C85 75 95 80 100 90 M82 63 C87 72 90 82 88 95 M79 63 C80 78 82 88 78 100"
                      className="stroke-secondary"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Small leaves on roots */}
                    <circle cx="20" cy="90" r="3" className="fill-secondary/60" />
                    <circle cx="32" cy="95" r="2.5" className="fill-secondary/60" />
                    <circle cx="42" cy="100" r="3" className="fill-secondary/60" />
                    <circle cx="100" cy="90" r="3" className="fill-secondary/60" />
                    <circle cx="88" cy="95" r="2.5" className="fill-secondary/60" />
                    <circle cx="78" cy="100" r="3" className="fill-secondary/60" />
                  </svg>
                </div>
              </div>
              {/* Floating dots */}
              <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-secondary animate-float" />
              <div
                className="absolute bottom-8 right-0 w-2 h-2 rounded-full bg-primary"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 decorative-line" />
    </section>
  );
}
