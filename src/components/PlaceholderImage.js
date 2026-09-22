export default function PlaceholderImage({ label, className = "" }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-sm border border-olive/10 bg-linear-to-br from-olive/[0.07] via-paper to-gold/12 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-7 w-7 text-gold/70"
      >
        <path
          d="M7 3h10l4 5-11 13L2 8l5-5z"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path d="M2 8h20M9.5 3L7 8l5 13M14.5 3L17 8l-5 13" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      {label ? (
        <span className="font-sans text-xs uppercase tracking-wider text-olive/40">
          {label}
        </span>
      ) : null}
    </div>
  );
}
