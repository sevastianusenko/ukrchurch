export default function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ink/25 bg-ink/5 p-8 text-center ${className}`}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink/40">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="10.5" r="1.75" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 17l5-4.5 3 2.5 3-3 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="max-w-[16rem] text-sm font-medium text-ink/60">{label}</p>
    </div>
  );
}
