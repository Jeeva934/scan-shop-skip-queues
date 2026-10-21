import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Boxes, ClipboardList, CreditCard, Keyboard, LayoutDashboard, ScanLine, Search, ShieldCheck, ShoppingCart } from "lucide-react";
import { FinalCta } from "@/components/sections";
import { Card, PageHero, SectionHeading, pageMeta } from "@/components/ui-kit";

export const Route = createFileRoute("/features")({
  head: () => pageMeta("QARTUNO Features | Scan & Go Checkout Platform", "Barcode scanning, digital cart, digital payments, exit verification and a retailer dashboard for inventory and sales."),
  component: Page,
});

const SHOPPER = [
  { i: Search, t: "Search and browse", d: "Search bar plus quick categories: Fruits, Dairy, Snacks, Beverages, Household." },
  { i: ScanLine, t: "Barcode scanning", d: "A dedicated Scan tab using the phone camera." },
  { i: Keyboard, t: "Manual entry fallback", d: "Type a barcode when the camera can't read it." },
  { i: ShoppingCart, t: "Live digital cart", d: "Live cart count, quantities and totals." },
  { i: CreditCard, t: "Digital payment", d: "Designed for supported methods such as UPI and cards." },
  { i: ClipboardList, t: "Orders", d: "Order history in the bottom bar, when available." },
];
const RETAIL = [
  { i: LayoutDashboard, t: "Management dashboard", d: "Daily sales overview and store activity." },
  { i: Boxes, t: "Inventory status", d: "Stock levels, synced where integration is available." },
  { i: BarChart3, t: "Sales reporting", d: "Order and transaction summaries with filtering." },
  { i: ShieldCheck, t: "Store-defined verification", d: "Confirm completed purchases according to your policy." },
];

function Grid({ items }: { items: typeof SHOPPER }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f) => <Card key={f.t}><f.i className="size-6 text-primary" /><h3 className="mt-4 font-semibold">{f.t}</h3><p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p></Card>)}
    </div>
  );
}

function Page() {
  return (
    <>
      <PageHero eyebrow="Features" title="Everything needed for a queue-free trip." intro="Shopper features for a simple scan-and-pay flow, and retailer tools to run it. Retailer capabilities are in development and depend on available integrations." />
      <section className="container-site py-20"><SectionHeading title="For shoppers" /><Grid items={SHOPPER} /></section>
      <section className="border-t bg-muted"><div className="container-site py-20"><SectionHeading title="For retailers" /><Grid items={RETAIL} /></div></section>
      <FinalCta />
    </>
  );
}
