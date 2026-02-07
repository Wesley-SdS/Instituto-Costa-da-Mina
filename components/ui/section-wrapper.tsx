"use client";

import React from "react"

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  alternate = false,
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        "px-4 lg:px-8 py-16 md:py-24",
        alternate ? "bg-surface-alt" : "bg-background",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl opacity-0 transition-all duration-700",
          isVisible && "animate-fade-in-up"
        )}
      >
        {children}
      </div>
    </section>
  );
}
