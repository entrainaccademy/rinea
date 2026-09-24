import InfoPage from "@/components/InfoPage";

export const metadata = {
  title: "Returns & Exchanges | Rinea",
  description: "Rinea returns and exchanges policy.",
};

const sections = [
  {
    title: "Final sale",
    content: [
      "We do not offer returns or exchanges for change of mind, personal preference, sizing decisions, or items that are no longer wanted.",
      "Please review the product information carefully before placing your order.",
    ],
  },
  {
    title: "Damaged or incorrect items",
    content: [
      "If an item arrives damaged, defective, incomplete, or different from what you ordered, contact us as soon as possible with your order details, clear photos, and an unboxing video where available.",
      "We will review the issue and provide an appropriate remedy where required under applicable law.",
    ],
  },
  {
    title: "Condition of items",
    content: [
      "Any item submitted for review must be unworn, unused, and returned with its original packaging and accessories if we ask you to send it back.",
    ],
  },
];

export default function ReturnsPage() {
  return <InfoPage eyebrow="Customer care" title="Returns & exchanges" intro="Our pieces are final sale, with support available when an order arrives damaged, defective, or incorrect." sections={sections} />;
}
