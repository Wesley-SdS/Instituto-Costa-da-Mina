<div align="center">
  
# 🌟 Instituto Costa da Mina

### Território de Reexistência e Futuro

*Onde conhecimento, cultura e educação se tornam ferramentas de libertação e pertencimento*

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-000000?style=for-the-badge&logo=shadcnui)](https://ui.shadcn.com/)

[Demo ao Vivo](#)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Features](#-features)
- [Stack Tecnológica](#-stack-tecnológica)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Desenvolvimento](#-desenvolvimento)
- [Build e Deploy](#-build-e-deploy)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Componentes](#-componentes)
- [Customização](#-customização)
- [Performance](#-performance)
- [Acessibilidade](#-acessibilidade)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

Landing page institucional do **Instituto Costa da Mina**, uma organização dedicada à promoção da cultura afro-brasileira, educação e reexistência na Zona Sul de São Paulo, especificamente na Cidade Ademar.

Este projeto foi desenvolvido com foco em:

- ✨ **Design moderno e elegante** com animações suaves
- 🚀 **Performance otimizada** usando Next.js 16
- ♿ **Acessibilidade** seguindo padrões WCAG
- 📱 **Responsividade** total em todos os dispositivos
- 🌓 **Dark mode** nativo
- 🎨 **Sistema de design consistente** com Tailwind CSS
- 🧩 **Componentes reutilizáveis** com shadcn/ui

---

## ✨ Features

### 🏠 Seções da Landing Page

- **Hero Section** - Apresentação impactante do instituto
- **About Section** - História e missão da organização
- **Institute Section** - Detalhes sobre o instituto
- **Goals Section** - Objetivos e metas
- **Colors Section** - Identidade visual e significados
- **Beco Section** - Projetos e iniciativas
- **Contact Section** - Formulário de contato e informações

### 🛠️ Recursos Técnicos

- ⚡ **Server Components** por padrão (Next.js 16)
- 🎨 **50+ Componentes UI** do shadcn/ui
- 🌈 **Tema customizável** com CSS Variables
- 📊 **Animações otimizadas** com Tailwind Animate
- 🔍 **SEO otimizado** com metadata do Next.js
- 🎭 **Fontes otimizadas** (Inter + Playfair Display)
- 🎯 **TypeScript** para type safety

---

## 🔧 Stack Tecnológica

### Core

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Next.js](https://nextjs.org/) | 16.1.6 | Framework React com SSR e RSC |
| [React](https://react.dev/) | 19 | Biblioteca UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.3 | Superset JavaScript tipado |

### Estilização

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.17 | Framework CSS utility-first |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | Componentes UI acessíveis |
| [Radix UI](https://www.radix-ui.com/) | Latest | Primitivos UI headless |
| [Lucide Icons](https://lucide.dev/) | 0.544.0 | Biblioteca de ícones |

### Utilities

| Tecnologia | Descrição |
|------------|-----------|
| [next-themes](https://github.com/pacocoursey/next-themes) | Gerenciamento de temas |
| [class-variance-authority](https://cva.style/) | Variantes de componentes |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Merge inteligente de classes |
| [clsx](https://github.com/lukeed/clsx) | Construtor de classNames |

---

## 📦 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** 18.17 ou superior
- **pnpm** 8.0 ou superior (recomendado)
  - Ou **npm** 9.0+ / **yarn** 1.22+

```bash
# Verificar versões instaladas
node --version
pnpm --version
```

---

## 🚀 Instalação

### 1. Acesse o diretório do projeto

```bash
cd instituto-costa-da-mina-landing-page
```

### 2. Instale as dependências

```bash
# Usando pnpm (recomendado)
pnpm install

# Ou usando npm
npm install

# Ou usando yarn
yarn install
```

### 3. Configure as variáveis de ambiente (opcional)

```bash
cp .env.example .env.local
```

Edite `.env.local` conforme necessário:

```env
# Exemplo de variáveis
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 💻 Desenvolvimento

### Iniciar servidor de desenvolvimento

```bash
pnpm dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

### Scripts disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor em modo desenvolvimento

# Build
pnpm build        # Cria build otimizado para produção
pnpm start        # Inicia servidor em modo produção

# Linting
pnpm lint         # Executa ESLint
```

### Hot Reload

O projeto utiliza Fast Refresh do Next.js. Alterações são refletidas instantaneamente sem perder o estado da aplicação.

---

## 📦 Build e Deploy

### Build para Produção

```bash
# Criar build otimizado
pnpm build

# Testar build localmente
pnpm start
```

### Deploy

#### Vercel (Recomendado)

```bash
# Usando Vercel CLI
npx vercel
```

#### Outras Plataformas

- **Netlify**: Conecte seu repositório e faça deploy automático
- **AWS Amplify**: Suporta Next.js nativamente
- **Docker**: Use a imagem oficial do Next.js

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 📁 Estrutura do Projeto

```
instituto-costa-da-mina-landing-page/
│
├── app/                          # App Router do Next.js
│   ├── layout.tsx                # Layout raiz
│   ├── page.tsx                  # Página inicial
│   └── globals.css               # Estilos globais
│
├── components/                   # Componentes React
│   ├── layout/                   # Componentes de layout
│   │   ├── header.tsx            # Cabeçalho
│   │   └── footer.tsx            # Rodapé
│   │
│   ├── sections/                 # Seções da landing page
│   │   ├── hero-section.tsx      # Hero principal
│   │   ├── about-section.tsx     # Sobre o instituto
│   │   ├── institute-section.tsx # Detalhes do instituto
│   │   ├── goals-section.tsx     # Objetivos
│   │   ├── colors-section.tsx    # Identidade visual
│   │   ├── beco-section.tsx      # Projetos
│   │   └── contact-section.tsx   # Contato
│   │
│   ├── ui/                       # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...                   # 50+ componentes
│   │
│   └── theme-provider.tsx        # Provider de tema
│
├── hooks/                        # Custom React Hooks
│   ├── use-mobile.tsx            # Hook para detectar mobile
│   ├── use-scroll-animation.ts   # Hook para animações scroll
│   └── use-toast.ts              # Hook para notificações
│
├── lib/                          # Utilitários
│   └── utils.ts                  # Funções auxiliares
│
├── public/                       # Assets estáticos
│   ├── placeholder-logo.svg
│   └── placeholder.svg
│
├── styles/                       # Estilos adicionais
│   └── globals.css
│
├── components.json               # Configuração shadcn/ui
├── tailwind.config.ts            # Configuração Tailwind
├── tsconfig.json                 # Configuração TypeScript
├── next.config.mjs               # Configuração Next.js
├── postcss.config.mjs            # Configuração PostCSS
├── package.json                  # Dependências
└── pnpm-lock.yaml                # Lock file do pnpm
```

---

## 🧩 Componentes

### Layout Components

#### Header (`components/layout/header.tsx`)
Cabeçalho responsivo com navegação e toggle de tema.

#### Footer (`components/layout/footer.tsx`)
Rodapé com informações de contato e links sociais.

### Section Components

Cada seção é um componente independente e reutilizável:

```tsx
// Exemplo de uso
import { HeroSection } from '@/components/sections/hero-section';

export default function Page() {
  return <HeroSection />;
}
```

### UI Components (shadcn/ui)

O projeto inclui 50+ componentes prontos para uso:

```tsx
// Exemplos
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

<Button variant="default" size="lg">
  Clique aqui
</Button>
```

Componentes disponíveis:
- Accordion, Alert, Avatar, Badge, Button
- Card, Carousel, Checkbox, Command, Dialog
- Dropdown, Form, Input, Label, Navigation
- Popover, Progress, Radio, Select, Separator
- Sheet, Skeleton, Slider, Switch, Table
- Tabs, Textarea, Toast, Tooltip, Toggle
- E muito mais...

### Custom Hooks

```tsx
// useScrollAnimation - Animações baseadas em scroll
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ref = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px',
});

// useMobile - Detecção de dispositivo móvel
import { useIsMobile } from '@/hooks/use-mobile';

const isMobile = useIsMobile();

// useToast - Notificações
import { useToast } from '@/hooks/use-toast';

const { toast } = useToast();
toast({
  title: 'Sucesso!',
  description: 'Mensagem enviada.',
});
```

---

## 🎨 Customização

### Cores e Tema

Edite `app/globals.css` para customizar o tema:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --primary: 282 85% 26%;        /* #6A0D74 - Roxo institucional */
    --primary-foreground: 0 0% 98%;
    /* ... outras cores */
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    /* ... cores para dark mode */
  }
}
```

### Tipografia

O projeto usa duas fontes do Google Fonts:

```tsx
// app/layout.tsx
const inter = Inter({ subsets: ['latin'] });           // Sans-serif
const playfair = Playfair_Display({ subsets: ['latin'] }); // Serif
```

Para usar no código:

```tsx
<h1 className="font-serif">Título Elegante</h1>
<p className="font-sans">Texto corpo</p>
```

### Adicionar Novos Componentes shadcn/ui

```bash
# Adicionar um componente específico
npx shadcn@latest add dialog

# Adicionar múltiplos componentes
npx shadcn@latest add dialog alert toast
```

### Customizar Componentes Existentes

Os componentes shadcn/ui são seus - modifique livremente:

```tsx
// components/ui/button.tsx
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

---

## ⚡ Performance

### Otimizações Implementadas

- ✅ **Server Components** por padrão
- ✅ **Code Splitting** automático
- ✅ **Image Optimization** com next/image
- ✅ **Font Optimization** com next/font
- ✅ **CSS Variables** para temas performáticos
- ✅ **Lazy Loading** de componentes pesados
- ✅ **Prefetching** de rotas

### Métricas

```bash
# Analisar bundle
pnpm build && npx @next/bundle-analyzer
```

### Dicas para Manter Performance

1. Use `next/image` para todas as imagens
2. Prefira Server Components
3. Use Client Components apenas quando necessário
4. Implemente lazy loading para componentes pesados
5. Otimize CSS removendo classes não utilizadas

---

## ♿ Acessibilidade

### Recursos de Acessibilidade

- ✅ **WCAG 2.1 AA** compliant
- ✅ **Navegação por teclado** completa
- ✅ **ARIA labels** apropriados
- ✅ **Contraste de cores** adequado
- ✅ **Screen reader friendly**
- ✅ **Focus visible** em elementos interativos
- ✅ **Semantic HTML**

### Testar Acessibilidade

```bash
# Lighthouse
npx lighthouse http://localhost:3000 --view

# axe DevTools
# Instale a extensão do navegador: axe DevTools
```

### Boas Práticas Implementadas

```tsx
// Exemplo de componente acessível
<button
  aria-label="Abrir menu de navegação"
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
>
  <Menu aria-hidden="true" />
</button>

// Imagens com alt descritivo
<Image
  src="/logo.svg"
  alt="Instituto Costa da Mina - Logo"
  width={200}
  height={60}
/>
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2026 Instituto Costa da Mina

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📞 Contato

### Instituto Costa da Mina

- 🌐 **Website**: [institutocostadamina.org.br](#)
- 📧 **Email**: contato@institutocostadamina.org.br
- 📍 **Endereço**: Cidade Ademar, São Paulo - SP
- 📱 **Redes Sociais**:
  - [Instagram](https://instagram.com/institutocostadamina)
  - [Facebook](https://facebook.com/institutocostadamina)
  - [LinkedIn](https://linkedin.com/company/institutocostadamina)

---

<div align="center">

**Feito com ❤️ e dedicação para o Instituto Costa da Mina**

[⬆️ Voltar ao topo](#-instituto-costa-da-mina)

</div>
