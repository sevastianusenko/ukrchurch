import { schedule, contact, ui, type Locale } from "../../content/church";

export default function ServiceTimesCard({ locale }: { locale: Locale }) {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-wheat-soft p-6 shadow-xl shadow-ink/10 ring-1 ring-charcoal/5">
      <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
        {ui.sundayEyebrow[locale]}
      </p>
      <ul className="mt-4 space-y-3">
        {schedule.map((s) => (
          <li key={s.day.en} className="flex items-baseline justify-between gap-4 border-b border-charcoal/10 pb-3 last:border-0 last:pb-0">
            <div>
              <p className="font-display text-sm font-semibold text-ink">{s.day[locale]}</p>
              <p className="text-sm text-charcoal/70">{s.label[locale]}</p>
            </div>
            <p className="shrink-0 font-semibold text-charcoal">{s.time}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-charcoal/70">{contact.addressLines[locale].join(", ")}</p>
    </div>
  );
}
