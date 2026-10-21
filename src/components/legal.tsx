import type { ReactNode } from "react";
import { PageHero } from "./ui-kit";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro="Draft for review. This page must be reviewed by a qualified legal adviser and completed with QARTUNO's registered company details before launch." />
      <article className="container-site max-w-3xl space-y-6 py-16 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground">
        {children}
      </article>
    </>
  );
}
