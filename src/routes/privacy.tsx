import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal";
import { pageMeta } from "@/components/ui-kit";

export const Route = createFileRoute("/privacy")({
  head: () => pageMeta("Privacy Policy | QARTUNO", "How QARTUNO handles personal and business information."),
  component: () => (
    <LegalPage title="Privacy Policy">
      <h2>Information we collect</h2>
      <p>When you submit an enquiry we would collect the details you provide: name, business name, work email, optional phone number, store type, number of locations and your message. Shopper app data (cart contents, orders, payment confirmations) would be collected only at participating stores once the service is live.</p>
      <h2>How we use it</h2>
      <p>To respond to enquiries, provide and improve the service, process checkout with participating stores, and meet legal obligations. We do not sell personal data.</p>
      <h2>Payments</h2>
      <p>Card and payment credentials are handled by regulated payment providers. QARTUNO does not store raw card details.</p>
      <h2>Retention and deletion</h2>
      <p>Data is kept only as long as needed for the purposes above or as required by law. You may request access, correction or deletion of your data.</p>
      <h2>Security</h2>
      <p>We apply access controls, encryption in transit and store-specific data separation for retailer information.</p>
      <h2>Contact</h2>
      <p>Official privacy contact details will be published here.</p>
    </LegalPage>
  ),
});
