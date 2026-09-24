import InfoPage from "@/components/InfoPage";

export const metadata = {
  title: "Shipping & Delivery | Rinea",
  description: "Rinea shipping and delivery information.",
};

const sections = [
  {
    title: "Delivery time",
    content: [
      "Estimated delivery is 2–5 days after your order is confirmed.",
      "Delivery times are estimates and may vary because of the destination, courier operations, public holidays, weather, or other circumstances outside our control.",
    ],
  },
  {
    title: "Order updates",
    content: [
      "Please provide accurate contact and delivery details when ordering. We will use those details to share important order and delivery updates.",
      "If a parcel appears delayed, contact us with your order details so we can check its status.",
    ],
  },
  {
    title: "Delivery issues",
    content: [
      "Inspect your parcel when it arrives. If it is damaged, incomplete, or different from what you ordered, contact us as soon as possible with your order details and clear photos or an unboxing video.",
    ],
  },
];

export default function ShippingPage() {
  return <InfoPage eyebrow="Customer care" title="Shipping & delivery" intro="Clear delivery information for every Rinea order." sections={sections} />;
}
