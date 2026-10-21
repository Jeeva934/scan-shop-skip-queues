import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { FAQS, FinalCta } from "@/components/sections";
import { PageHero, pageMeta } from "@/components/ui-kit";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta("QARTUNO FAQ | Scan & Go Checkout Questions", "Answers about QARTUNO's smartphone checkout: pricing, payments, POS compatibility and purchase verification."),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }),
    }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" intro="Payment options, POS compatibility, verification workflows and timelines depend on the integrations available and each store's requirements." />
      <section className="container-site max-w-3xl py-16">
        <div className="divide-y rounded-2xl border bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.q}<ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
