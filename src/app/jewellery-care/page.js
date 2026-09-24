import InfoPage from "@/components/InfoPage";

export const metadata = {
  title: "Jewellery Care | Rinea",
  description: "Simple care guidance for Rinea jewellery.",
};

const sections = [
  {
    title: "Daily care",
    content: [
      "Put your jewellery on after perfume, lotion, makeup, and hair products have dried. Wipe each piece gently with a soft, dry cloth after wearing it.",
      "Although our jewellery is designed for daily wear, careful handling will help preserve its finish for longer.",
    ],
  },
  {
    title: "Water and products",
    content: [
      "Waterproof and stainless steel pieces can handle everyday splashes. Rinse away soap, salt water, or chlorine and dry the jewellery thoroughly afterwards.",
      "Avoid prolonged contact with harsh cleaners, perfume, sanitiser, and strong chemicals.",
    ],
  },
  {
    title: "Storage",
    content: [
      "Store pieces separately in a dry pouch or jewellery box. Close chains before storing them to reduce tangling, and keep jewellery away from direct sunlight and humid spaces.",
    ],
  },
];

export default function JewelleryCarePage() {
  return <InfoPage eyebrow="Keep the shine" title="Jewellery care" intro="A little care helps your everyday pieces stay beautiful for longer." sections={sections} />;
}
