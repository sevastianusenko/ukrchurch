import Link from "next/link";
import { site, contact, schedule, ui, type Locale } from "../../content/church";
import RushnykDivider from "./RushnykDivider";
import SocialLinks from "./SocialLinks";

export default function Footer({ locale }: { locale: Locale }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-wheat">
      <RushnykDivider tone="ink" />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold">{site.shortName[locale]}</p>
            <p className="mt-2 max-w-xs text-sm text-wheat/70">{site.tagline[locale]}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-soft">
              {ui.nav.visit[locale]}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-wheat/80">
              {contact.addressLines[locale].map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>
                <a href={contact.phoneHref} className="hover:text-wheat">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-wheat">
                  {contact.email}
                </a>
              </li>
            </ul>
            <SocialLinks className="mt-4 text-wheat/70" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-soft">
              {ui.nav.home[locale] === "Home" ? "Weekly" : "Щотижня"}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-wheat/80">
              {schedule.map((s) => (
                <li key={s.day.en}>
                  <span className="text-wheat">{s.day[locale]}</span> · {s.time} {s.label[locale]}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-wheat/15 pt-6 text-xs text-wheat/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name[locale]}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href={`${base}/news`} className="hover:text-wheat">
              {ui.nav.news[locale]}
            </Link>
            <Link href={`${base}/calendar`} className="hover:text-wheat">
              {ui.nav.calendar[locale]}
            </Link>
            <Link href={`${base}/give`} className="hover:text-wheat">
              {ui.nav.give[locale]}
            </Link>
            <Link href={`${base}/visit`} className="hover:text-wheat">
              {ui.nav.visit[locale]}
            </Link>
            <a href="https://seva-web-studio.com/" className="hover:text-wheat">
              Site by Seva Web Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
