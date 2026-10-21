import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal";
import { pageMeta } from "@/components/ui-kit";

export const Route = createFileRoute("/terms")({
  head: () => pageMeta("Terms and Conditions | QARTUNO", "Terms for using the QARTUNO website and services."),
  component: () => (
    <LegalPage title="Terms and Conditions">
      <h2>Use of this website</h2>
      <p>This website describes the QARTUNO platform. Interactive demonstrations use illustrative products, prices and simulated scans and payments; they do not represent a live catalogue or real transactions.</p>
      <h2>Pricing</h2>
      <p>The Retailer Starter Plan starting price of ₹1,999/month and included features are subject to confirmation. Taxes, transaction charges and integration availability are confirmed in a separate agreement.</p>
      <h2>Shopping at participating stores</h2>
      <p>Shoppers must follow each store's checkout confirmation and verification procedure. Scanning a product does not by itself constitute payment or authorise leaving the store.</p>
      <h2>Liability</h2>
      <p>The website is provided as is. Details on service levels and liability for retailers will be set out in the retailer agreement.</p>
      <h2>Changes</h2>
      <p>These terms may be updated. The latest version will always be shown on this page.</p>
    </LegalPage>
  ),
});
