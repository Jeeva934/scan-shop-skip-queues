import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { FinalCta, StepsGrid } from "@/components/sections";
import { PhoneDemo } from "@/components/phone-demo";
import { ButtonLink, Card, PageHero, SectionHeading, pageMeta } from "@/components/ui-kit";

export const Route = createFileRoute("/how-it-works")({
  head: () => pageMeta("How QARTUNO Works | Scan, Pay and Go", "See how shoppers scan barcodes with their phone, pay digitally and complete their store's checkout verification with QARTUNO."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="How it works" title="Scan. Pay. Go. — step by step." intro="QARTUNO turns the shopper's smartphone into a personal checkout counter, while the store keeps control of payment confirmation and exit verification.">
        <ButtonLink to="/contact">Book a Demo</ButtonLink>
      </PageHero>
      <section className="container-site py-20">
        <SectionHeading title="The shopper journey" />
        <StepsGrid />
      </section>
      <section className="border-y bg-muted">
        <div className="container-site grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading title="Try the flow yourself" intro="Search, filter by category, simulate a barcode scan or type a code manually, adjust quantities and go through a simulated checkout. Nothing is charged and no real products are scanned." />
            <Card className="mt-8 flex gap-4">
              <ShieldCheck className="size-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Verification stays with the store</h3>
                <p className="mt-1 text-sm text-muted-foreground">A barcode scan alone doesn't prove payment or authorise exit. Each retailer defines how a completed purchase is confirmed — for example, staff checking a digital receipt at the exit.</p>
              </div>
            </Card>
          </div>
          <PhoneDemo initialCart={{}} />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
