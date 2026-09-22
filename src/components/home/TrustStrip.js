const items = [
  {
    label: "Anti-tarnish",
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Hypoallergenic",
    icon: (
      <path
        d="M12 20s-7-4.35-7-9.5A4.5 4.5 0 0112 6.5a4.5 4.5 0 017 4c0 5.15-7 9.5-7 9.5z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 border-y border-olive/10 bg-paper px-6 py-10">
      {items.map(({ label, icon }) => (
        <div key={label} className="flex items-center gap-3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-6 w-6 text-gold"
          >
            {icon}
          </svg>
          <span className="font-sans text-sm tracking-wide text-olive">
            {label}
          </span>
        </div>
      ))}
    </section>
  );
}
