import InfoPage from "@/components/InfoPage";

export const metadata = {
  title: "Privacy Policy | Rinea",
  description: "How Rinea handles personal information.",
};

const sections = [
  {
    title: "Information we collect",
    content: [
      "We may collect information you provide through enquiries and orders, such as your name, contact details, delivery address, order information, and messages sent to us.",
      "The website may also store essential device information and local browser data, including your shopping cart, to provide requested site features.",
    ],
  },
  {
    title: "How we use it",
    content: [
      "We use personal information to respond to enquiries, process and deliver orders, provide customer support, prevent misuse, maintain the website, and meet legal obligations.",
    ],
  },
  {
    title: "Sharing and retention",
    content: [
      "Information may be shared with service providers that help operate the store, process payments, communicate with customers, and deliver orders. We do not sell personal information.",
      "We retain information only for as long as reasonably needed for these purposes, record keeping, dispute resolution, and applicable legal requirements.",
    ],
  },
  {
    title: "Your choices",
    content: [
      "You may contact Rinea, based in Malappuram, Kerala, to ask about your personal information, request a correction, withdraw consent where applicable, or raise a privacy concern. Some information may need to be retained where required by law or for legitimate business records.",
    ],
  },
  {
    title: "Updates",
    content: [
      "This policy may be updated when our services or legal obligations change. The current version applies from 24 September 2026.",
    ],
  },
];

export default function PrivacyPage() {
  return <InfoPage eyebrow="Legal" title="Privacy policy" intro="This policy explains how Rinea collects, uses, stores, and shares personal information." sections={sections} />;
}
