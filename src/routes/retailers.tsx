import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FinalCta, ZeroHardware } from "@/components/sections";
import { ButtonLink, Card, PageHero, SectionHeading, pageMeta } from "@/components/ui-kit";

export const Route = createFileRoute("/retailers")({
  head: () => pageMeta("QARTUNO for Retailers | Self-Checkout Without Kiosks", "Offer smartphone-based self-checkout in your supermarket without buying dedicated kiosks. Plans start at ₹1,999/month."),
  component: Page,
});

const NEEDS = ["A compatible POS or inventory system (confirmed during onboarding)", "Supported payment infrastructure", "Reliable in-store connectivity for shoppers", "A defined exit verification procedure", "Barcoded products in your catalogue"];

function Page() {
  return (
    <>
      <PageHero eyebrow="For retailers" title="Offer modern self-checkout without investing in dedicated checkout kiosks." intro="Built for independent grocery stores, supermarkets and chains looking to ease peak-hour queues and modernise the in-store experience.">
        <ButtonLink to="/contact">Book a Demo</ButtonLink>
        <ButtonLink to="/pricing" variant="outline">View Pricing</ButtonLink>
      </PageHero>
      <section className="container-site py-20">
        <SectionHeading title="Retailer dashboard preview" intro="Proposed capabilities shown with sample demo data: daily sales, order and transaction summaries, inventory status, product management, store activity, reporting and configuration. Switch tabs to explore." />
        <div className="mt-10"><DashboardPreview /></div>
      </section>
      <ZeroHardware />
      <section className="container-site grid gap-10 py-20 lg:grid-cols-2">
        <SectionHeading title="What your store needs" intro="QARTUNO removes the need for checkout kiosks, not for sensible setup. Here's what we'll work through together." />
        <Card>
          <ul className="space-y-3">
            {NEEDS.map((n) => <li key={n} className="flex gap-2.5 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{n}</li>)}
          </ul>
        </Card>
      </section>
      <FinalCta />
    </>
  );
}
