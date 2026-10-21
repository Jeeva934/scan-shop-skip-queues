import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, CreditCard, ScanLine, ShoppingCart } from "lucide-react";
import { PhoneDemo } from "@/components/phone-demo";
import { FinalCta } from "@/components/sections";
import { ButtonLink, Card, PageHero, pageMeta } from "@/components/ui-kit";

export const Route = createFileRoute("/shoppers")({
  head: () => pageMeta("QARTUNO for Shoppers | Shop Without the Queue", "Scan groceries with your phone, review your digital cart and pay digitally at participating supermarkets. Free for shoppers."),
  component: Page,
});

const ITEMS = [
  { icon: ScanLine, t: "Scan as you shop", d: "Use your phone camera on each barcode, or type the code if a label is hard to read." },
  { icon: ShoppingCart, t: "Always know your total", d: "Your digital cart shows every item, quantity and running total." },
  { icon: CreditCard, t: "Pay digitally", d: "Pay with the supported payment methods available at your store." },
  { icon: ClipboardList, t: "Keep your receipts", d: "Access your order history when available." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="For shoppers" title="Spend less time waiting and more time getting on with your day." intro="QARTUNO is free for shoppers at participating stores. No scanner to pick up, no queue to join for a handful of items.">
        <ButtonLink to="/how-it-works" variant="outline">See How It Works</ButtonLink>
      </PageHero>
      <section className="container-site grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          {ITEMS.map((i) => (
            <Card key={i.t}><i.icon className="size-6 text-primary" /><h2 className="mt-4 text-lg font-semibold">{i.t}</h2><p className="mt-2 text-sm text-muted-foreground">{i.d}</p></Card>
          ))}
        </div>
        <PhoneDemo />
      </section>
      <FinalCta />
    </>
  );
}
