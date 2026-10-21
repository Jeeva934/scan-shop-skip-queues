import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-bright",
        outline: "border border-input bg-background text-foreground hover:border-primary hover:text-primary",
        soft: "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground",
        inverse: "bg-background text-primary hover:bg-secondary",
        ghostInverse: "border border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10",
      },
      size: { sm: "h-9 px-3.5 text-sm", md: "h-11 px-5 text-sm", lg: "h-13 px-7 text-base" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type BtnVariants = VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ComponentProps<"button"> & BtnVariants) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  to,
  hash,
  children,
  variant,
  size,
  className,
}: { to: string; hash?: string; children: ReactNode; className?: string } & BtnVariants) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={to as any} hash={hash} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-widest text-primary">{children}</p>;
}

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: ReactNode; center?: boolean }) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function Card({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("rounded-2xl border bg-card p-6 shadow-soft", className)} {...props} />;
}

export function DemoBadge({ children = "Demo data" }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-warning/40 bg-warning/10 px-2 py-0.5 text-xs font-medium text-foreground">
      <span className="size-1.5 rounded-full bg-warning" aria-hidden /> {children}
    </span>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="border-b bg-muted">
      <div className="container-site py-16 md:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function pageMeta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
