import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, Hourglass, MonitorX, ShoppingBasket, Smartphone, Store } from "lucide-react";
import mascot from "@/assets/qartuno-mascot.png.asset.json";
import { DashboardPreview } from "@/components/dashboard-preview";
import { PhoneDemo } from "@/components/phone-demo";
import { FinalCta, PricingCards, StepsGrid, ZeroHardware } from "@/components/sections";
import { ButtonLink, Card, SectionHeading, pageMeta } from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "QARTUNO | Smart Supermarket Scan & Go Checkout",
      "Discover QARTUNO, a smartphone-based supermarket scan-and-pay platform designed to simplify grocery checkout for shoppers and retailers.",
    ),
  component: Home,
});

const PROBLEMS = [
  { icon: Clock, t: "Long checkout lines during peak hours" },
  { icon: Hourglass, t: "Time wasted on small grocery purchases" },
  { icon: MonitorX, t: "Expensive dedicated self-checkout hardware" },
  { icon: ShoppingBasket, t: "Slow checkout throughput during busy periods" },
];
const SOLUTION = [
  "Scan products using a smartphone",
  "Build and review a digital cart",
  "Pay using supported digital payment methods",
  "Complete the store's checkout verification and exit according to store policy",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-secondary lg:block" aria-hidden />
        <div className="container-site relative grid gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="tagline text-3xl md:text-4xl">Scan. Pay. Go.</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Skip the Queue. <span className="text-primary">Shop Smarter.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Scan your groceries with your smartphone, pay digitally, and leave the checkout queue behind. QARTUNO brings a faster, simpler shopping experience to modern supermarkets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/contact" size="lg">Book a Demo</ButtonLink>
              <ButtonLink to="/how-it-works" size="lg" variant="outline">See How It Works</ButtonLink>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground">
              <span className="flex size-5 items-center justify-center rounded-full bg-secondary text-primary"><Check className="size-3.5" /></span>
              No dedicated checkout kiosks required.
            </p>
            <img src={mascot.url} alt="QARTUNO mascot: a smiling shopping cart holding a phone that scans a barcode" className="mt-10 hidden h-36 w-auto rounded-2xl lg:block" width={800} height={457} />
          </div>
          <PhoneDemo />
        </div>
      </section>

      {/* Problem / solution */}
      <section className="border-y bg-muted">
        <div className="container-site grid gap-12 py-20 lg:grid-cols-2">
          <SectionHeading eyebrow="The problem" title="Your Shopping Shouldn't End in a Queue." intro="A few items shouldn't mean a long wait. For stores, adding checkout capacity has traditionally meant buying more hardware." />
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Today</h3>
              <ul className="mt-4 space-y-3">
                {PROBLEMS.map((p) => (
                  <li key={p.t} className="flex gap-3 rounded-xl border bg-card p-3.5 text-sm"><p.icon className="size-5 shrink-0 text-muted-foreground" />{p.t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">With QARTUNO</h3>
              <ul className="mt-4 space-y-3">
                {SOLUTION.map((t) => (
                  <li key={t} className="flex gap-3 rounded-xl bg-primary p-3.5 text-sm text-primary-foreground"><Check className="size-5 shrink-0" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-site py-20">
        <SectionHeading eyebrow="How it works" title="Four simple steps to a queue-free trip." center />
        <StepsGrid />
        <div className="mt-10 text-center"><ButtonLink to="/how-it-works" variant="soft">Learn more about the process</ButtonLink></div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/50">
        <div className="container-site py-20">
          <SectionHeading eyebrow="Benefits" title="Less Waiting. More Living." center />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="p-8">
              <Smartphone className="size-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">For shoppers</h3>
              <p className="mt-2 text-muted-foreground">Spend less time waiting and more time getting on with your day.</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {["Faster shopping for small and routine grocery trips", "A convenient smartphone-based shopping flow", "Clear digital cart and purchase summary", "Supported digital payment options", "Accessible order history when available"].map((t) => (
                  <li key={t} className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{t}</li>
                ))}
              </ul>
              <ButtonLink to="/shoppers" variant="outline" className="mt-7">Explore the shopper app</ButtonLink>
            </Card>
            <Card className="p-8">
              <Store className="size-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">For supermarket owners</h3>
              <p className="mt-2 text-muted-foreground">Offer modern self-checkout without investing in dedicated checkout kiosks.</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {["Reduce dependence on dedicated self-checkout kiosks", "Offer customers a modern shopping experience", "Connect inventory and sales data when integration is available", "Support store operations through a management dashboard", "Introduce self-checkout without purchasing additional scanning kiosks"].map((t) => (
                  <li key={t} className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{t}</li>
                ))}
              </ul>
              <ButtonLink to="/retailers" className="mt-7">Explore Retailer Solutions</ButtonLink>
            </Card>
          </div>
        </div>
      </section>

      <ZeroHardware />

      {/* Dashboard */}
      <section className="container-site py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="For retailers" title="One dashboard for your store." intro="A proposed management dashboard for daily sales, orders, inventory status, products, store activity and configuration. The preview uses sample demo data." />
            <ButtonLink to="/retailers" className="mt-8">Explore Retailer Solutions</ButtonLink>
          </div>
          <DashboardPreview />
        </div>
      </section>

      {/* Pricing */}
      <section className="border-y bg-muted">
        <div className="container-site py-20">
          <SectionHeading eyebrow="Pricing" title="Simple, transparent pricing." center />
          <PricingCards />
        </div>
      </section>

      {/* About teaser */}
      <section className="container-site py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Our mission</h3>
            <p className="mt-4 text-lg leading-relaxed">To eliminate long checkout queues in supermarkets by empowering everyday shoppers to scan products, pay instantly using their smartphones, and walk out—making grocery shopping faster, effortless, and stress-free.</p>
          </Card>
          <Card className="p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Our vision</h3>
            <p className="mt-4 text-lg leading-relaxed">To build a future where retail stores operate completely queue-free, making every phone a personal checkout counter for seamless, hardware-free shopping everywhere.</p>
          </Card>
        </div>
        <div className="mt-8 text-center"><ButtonLink to="/about" variant="soft">About QARTUNO</ButtonLink></div>
      </section>

      <FinalCta />
    </>
  );
}
