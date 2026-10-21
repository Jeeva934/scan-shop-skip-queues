import { Check, CreditCard, LogOut, ScanLine, Smartphone, Store, X } from "lucide-react";
import { ButtonLink, Card, SectionHeading } from "./ui-kit";

export const STEPS = [
  { icon: Smartphone, title: "Open and Shop", text: "Open the QARTUNO experience and browse the store's available products." },
  { icon: ScanLine, title: "Scan Products", text: "Scan each product's barcode with the smartphone camera." },
  { icon: CreditCard, title: "Review and Pay", text: "Verify the cart and total, then pay using an available supported payment method." },
  { icon: LogOut, title: "Complete Checkout", text: "Follow the store's checkout confirmation or verification procedure and leave without the traditional cashier queue where the store's workflow permits." },
];

export function StepsGrid() {
  return (
    <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((s, i) => (
        <li key={s.title} className="relative rounded-2xl border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary"><s.icon className="size-5" /></span>
            <span className="font-display text-4xl font-bold text-secondary">0{i + 1}</span>
          </div>
          <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function ZeroHardware() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-site grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-bright">Zero hardware</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Self-Checkout Without Expensive Checkout Kiosks.</h2>
          <p className="mt-5 text-lg leading-relaxed opacity-85">
            QARTUNO is designed to use shoppers' smartphones as the scanning and checkout interface, reducing the need for dedicated self-checkout terminals.
          </p>
          <p className="mt-5 text-sm leading-relaxed opacity-70">
            Stores may still need a compatible POS system, supported payment infrastructure, in-store connectivity and an exit verification procedure. QARTUNO works with retailers on this setup during onboarding.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-navy-foreground/15 p-6">
            <Store className="size-7 opacity-70" />
            <h3 className="mt-4 font-semibold">Traditional approach</h3>
            <ul className="mt-4 space-y-2.5 text-sm opacity-80">
              {["Dedicated kiosk hardware", "Floor space per terminal", "Hardware maintenance", "Queues at the terminals"].map((t) => (
                <li key={t} className="flex gap-2"><X className="mt-0.5 size-4 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
            <Smartphone className="size-7" />
            <h3 className="mt-4 font-semibold">QARTUNO approach</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Shopper's own smartphone", "Software platform", "Scan anywhere in the aisle", "Store-defined verification"].map((t) => (
                <li key={t} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingCards() {
  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col p-8">
          <h3 className="text-lg font-semibold">Shopper Plan</h3>
          <p className="mt-4 text-4xl font-bold">Free</p>
          <p className="mt-1 text-sm text-muted-foreground">For shoppers at participating stores</p>
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {["Browse supported products", "Scan items", "Build a digital cart", "Access supported digital checkout features"].map((t) => (
              <li key={t} className="flex gap-2.5"><Check className="mt-0.5 size-4 text-primary" />{t}</li>
            ))}
          </ul>
          <ButtonLink to="/shoppers" variant="outline" className="mt-8">Explore the App</ButtonLink>
        </Card>
        <Card className="flex flex-col border-primary p-8 ring-1 ring-primary">
          <h3 className="text-lg font-semibold">Retailer Starter Plan</h3>
          <p className="mt-4 text-4xl font-bold">₹1,999<span className="text-base font-medium text-muted-foreground">/month</span></p>
          <p className="mt-1 text-sm text-muted-foreground">Starting price</p>
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {["Designed for supermarkets and local grocery retailers", "Intended to support a smartphone-based checkout experience", "Higher subscription plans may be offered as store requirements and transaction volume grow"].map((t) => (
              <li key={t} className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{t}</li>
            ))}
          </ul>
          <ButtonLink to="/contact" className="mt-8">Book a Demo</ButtonLink>
        </Card>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Starting price and included features are subject to confirmation. Contact QARTUNO for current plan details, onboarding requirements, taxes, transaction charges, and integration availability.
      </p>
    </>
  );
}

export function FinalCta() {
  return (
    <section className="container-site py-20">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-12">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to Make Checkout Smarter?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">Bring a simpler scan-and-pay experience to your supermarket with QARTUNO.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/contact" variant="inverse" size="lg">Book a Demo</ButtonLink>
          <ButtonLink to="/contact" variant="ghostInverse" size="lg">Contact Us</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export const FAQS = [
  { q: "What is QARTUNO?", a: "QARTUNO is a smartphone-based self-checkout platform for supermarkets. Shoppers scan product barcodes with their own phone, review a digital cart and pay digitally, while retailers get a management dashboard for products, orders and sales." },
  { q: "How does smartphone-based supermarket checkout work?", a: "At a participating store, you open QARTUNO, scan each product's barcode as you shop, review your cart and total, pay with a supported method, then complete the store's checkout confirmation or verification step before leaving." },
  { q: "Do shoppers need a dedicated scanner?", a: "No. QARTUNO is designed to use the camera on the shopper's own smartphone. Where a barcode can't be read, it can be entered manually." },
  { q: "Is QARTUNO free for shoppers?", a: "Yes. The Shopper Plan is free. Stores may apply their own charges such as taxes on purchases." },
  { q: "How much does QARTUNO cost for retailers?", a: "The Retailer Starter Plan starts at ₹1,999/month. The price and included features are subject to confirmation — contact QARTUNO for current plan details, taxes, transaction charges and onboarding requirements." },
  { q: "Which payment methods are supported?", a: "The checkout is designed for digital payments common in India, such as UPI and cards. The methods available depend on the payment providers integrated for each store." },
  { q: "Does QARTUNO work with existing POS systems?", a: "QARTUNO is intended to connect with a store's existing POS and inventory where an integration is available. Compatibility depends on the specific system and is confirmed during onboarding — universal compatibility is not guaranteed." },
  { q: "Does a store need to change its existing infrastructure?", a: "No dedicated checkout kiosks are needed, but a store may require a compatible POS or inventory system, supported payment infrastructure, reliable connectivity and a defined verification process." },
  { q: "How is a shopper's purchase verified?", a: "Each retailer sets its own verification workflow — for example, showing a digital receipt or order code to staff at the exit. A barcode scan alone does not prove payment or authorise leaving the store." },
  { q: "How can a supermarket request a demo?", a: "Use the Book a Demo form on the Contact page with your store details. Implementation timelines depend on store requirements and the integrations needed." },
];
