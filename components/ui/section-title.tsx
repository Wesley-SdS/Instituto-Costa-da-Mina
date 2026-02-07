import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-serif font-bold text-foreground text-balance",
          "text-3xl md:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </h2>
      {/* Decorative line under title */}
      <div
        className={cn(
          "mt-4 h-[3px] w-16 rounded-full bg-primary",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p className="mt-6 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
