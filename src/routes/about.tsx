import { createFileRoute } from "@tanstack/react-router";
import mockups from "@/assets/qartuno-brand-mockups.jpg.asset.json";
import { FinalCta } from "@/components/sections";
import { Card, PageHero, pageMeta } from "@/components/ui-kit";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("About QARTUNO | Making Every Phone a Checkout Counter", "QARTUNO's mission is to eliminate long supermarket checkout queues with smartphone-based scan-and-pay."),
  component: Page,
});

const NAME = [["Q", "Quick"], ["A", "Access"], ["T", "Technology"], ["U", "User Experience"], ["N", "No Queue"], ["O", "One Experience"]];

function Page() {
  return (
    <>
      <PageHero eyebrow="About us" title="Faster checkout for a smarter you." intro="QARTUNO is a supermarket self-checkout platform built around one idea: your phone can be your checkout counter." />
      <section className="container-site grid gap-6 py-20 md:grid-cols-2">
        <Card className="p-8"><h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Mission</h2><p className="mt-4 text-lg leading-relaxed">To eliminate long checkout queues in supermarkets by empowering everyday shoppers to scan products, pay instantly using their smartphones, and walk out—making grocery shopping faster, effortless, and stress-free.</p></Card>
        <Card className="p-8"><h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Vision</h2><p className="mt-4 text-lg leading-relaxed">To build a future where retail stores operate completely queue-free, making every phone a personal checkout counter for seamless, hardware-free shopping everywhere.</p></Card>
      </section>
      <section className="border-y bg-muted">
        <div className="container-site py-20">
          <h2 className="text-3xl font-bold">What QARTUNO stands for</h2>
          <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-6">
            {NAME.map(([l, w]) => (
              <div key={l} className="rounded-2xl border bg-card p-5 text-center">
                <dt className="font-display text-4xl font-bold text-primary">{l}</dt><dd className="mt-2 text-sm text-muted-foreground">{w}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="container-site py-20">
        <h2 className="text-3xl font-bold">A friendly cart that scans</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Our mascot holds a phone scanning a barcode — the whole idea in one picture. The motion lines echo the “Quick” and “No Queue” promise, and the wink keeps self-checkout approachable.</p>
        <img src={mockups.url} alt="QARTUNO brand applied to an app icon, storefront sign, business card, tote bag, uniform, packaging and receipt" loading="lazy" className="mt-10 w-full rounded-2xl border" width={1600} height={1066} />
        <p className="mt-2 text-xs text-muted-foreground">Brand concept mockups.</p>
      </section>
      <FinalCta />
    </>
  );
}
