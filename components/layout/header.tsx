"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Projeto", href: "#instituto" },
  { label: "Metas", href: "#metas" },
  { label: "Beco da Mina", href: "#beco-da-mina" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8"
        aria-label="Navegacao principal"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col leading-none group"
          aria-label="Instituto Costa da Mina - Inicio"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-muted-foreground group-hover:text-primary transition-colors">
            Instituto
          </span>
          <span className="text-lg font-serif font-bold tracking-wide text-foreground group-hover:text-primary transition-colors">
            COSTA DA MINA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </button>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label={
                resolvedTheme === "dark"
                  ? "Mudar para tema claro"
                  : "Mudar para tema escuro"
              }
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label={
                resolvedTheme === "dark"
                  ? "Mudar para tema claro"
                  : "Mudar para tema escuro"
              }
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-md text-foreground"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md",
          isOpen ? "max-h-96 border-b border-border" : "max-h-0"
        )}
      >
        <div className="flex flex-col px-4 py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-3 px-4 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
