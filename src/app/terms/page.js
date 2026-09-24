import InfoPage from "@/components/InfoPage";

export const metadata = {
  title: "Terms & Conditions | Rinea",
  description: "Terms governing use of the Rinea website and purchases.",
};

const sections = [
  {
    title: "Products and pricing",
    content: [
      "We aim to present product colours, dimensions, descriptions, availability, and prices accurately. Screen settings and handcrafted details may cause small visual variations.",
      "Prices are shown in Indian rupees and may change before an order is confirmed. We may correct genuine errors in product information or pricing.",
    ],
  },
  {
    title: "Orders",
    content: [
      "Submitting an order does not guarantee acceptance. An order is accepted when we confirm it. We may decline or cancel an order where an item is unavailable, information is incorrect, payment is not completed, or misuse is suspected.",
    ],
  },
  {
    title: "Delivery and final sale",
    content: [
      "Estimated delivery is 2–5 days, subject to courier and destination conditions. Change of mind returns and exchanges are not offered.",
      "Nothing in these terms limits remedies that must be provided for damaged, defective, incorrect, misdescribed, or undelivered goods under applicable law.",
    ],
  },
  {
    title: "Website use",
    content: [
      "Rinea branding, photographs, copy, and website content may not be copied, republished, or commercially used without permission. You must not interfere with the website, attempt unauthorised access, or use it unlawfully.",
    ],
  },
  {
    title: "Liability and law",
    content: [
      "To the extent permitted by law, Rinea is not responsible for indirect or consequential loss arising from use of the website. These terms are governed by the laws of India, with disputes subject to the competent courts serving Malappuram, Kerala, while mandatory consumer rights continue to apply.",
      "These terms may be updated from time to time. The current version applies from 24 September 2026.",
    ],
  },
];

export default function TermsPage() {
  return <InfoPage eyebrow="Legal" title="Terms & conditions" intro="These terms apply when you use the Rinea website or purchase a Rinea product." sections={sections} />;
}
