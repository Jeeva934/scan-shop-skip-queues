import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PricingCards } from "@/components/sections";
import { PageHero, pageMeta } from "@/components/ui-kit";

export const Route = createFileRoute("/pricing")({
  head: () => pageMeta("QARTUNO Pricing | Free for Shoppers, from ₹1,999/month for Retailers", "QARTUNO is free for shoppers. The Retailer Starter Plan starts at ₹1,999/month, subject to confirmation."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Simple, transparent pricing." intro="Free for shoppers. A single starting plan for retailers — talk to us about your store's needs." />
      <section className="container-site pb-10"><PricingCards /></section>
      <FinalCta />
    </>
  );
}
