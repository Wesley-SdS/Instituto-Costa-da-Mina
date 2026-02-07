const FOOTER_LINKS = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Projeto", href: "#instituto" },
  { label: "Metas", href: "#metas" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="relative bg-card text-card-foreground">
      {/* Decorative top line */}
      <div className="decorative-line w-full" />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          {/* Logo + Slogan */}
          <div className="max-w-sm">
            <div className="mb-3">
              <span className="block text-[0.6rem] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Instituto
              </span>
              <span className="block text-lg font-serif font-bold tracking-wide text-foreground">
                COSTA DA MINA
              </span>
            </div>
            <p className="text-sm font-serif italic text-muted-foreground leading-relaxed">
              {
                "Raizes que educam, cultura que transforma, futuro que floresce."
              }
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Links do rodape" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CNPJ */}
          <div className="text-sm text-muted-foreground">
            <p>CNPJ: 62.212.632/0001-76</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {"© 2025 Instituto Costa da Mina. Todos os direitos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}
