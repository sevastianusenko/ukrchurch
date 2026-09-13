"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, ui, contact, type Locale } from "../../content/church";
import LanguageSwitch from "./LanguageSwitch";

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  const links = [
    { href: base, label: ui.nav.home[locale] },
    { href: `${base}/about`, label: ui.nav.about[locale] },
    { href: `${base}/ministries`, label: ui.nav.ministries[locale] },
    { href: `${base}/news`, label: ui.nav.news[locale] },
    { href: `${base}/calendar`, label: ui.nav.calendar[locale] },
    { href: `${base}/visit`, label: ui.nav.visit[locale] },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-wheat-soft/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href={base}
          className="flex shrink-0 items-center gap-2 font-display text-base font-semibold leading-tight text-ink"
        >
          <Image src="/logo.png" alt="" width={44} height={36} className="h-9 w-auto shrink-0" priority />
          <span className="hidden whitespace-nowrap sm:inline">{site.shortName[locale]}</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-charcoal/80 xl:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="whitespace-nowrap transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
          <Link
            href={`${base}/give`}
            className="whitespace-nowrap font-semibold text-poppy transition-colors hover:text-ink"
          >
            {ui.nav.give[locale]}
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={contact.phoneHref}
            className="hidden shrink-0 whitespace-nowrap rounded-full bg-amber px-4 py-1.5 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft sm:inline-block"
          >
            {contact.phone}
          </a>
          <LanguageSwitch locale={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-charcoal/15 xl:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-charcoal/10 bg-wheat-soft px-5 py-4 xl:hidden">
          <ul className="flex flex-col gap-3 text-base font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-1">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={`${base}/give`} onClick={() => setOpen(false)} className="block py-1 font-semibold text-poppy">
                {ui.nav.give[locale]}
              </Link>
            </li>
            <li>
              <a href={contact.phoneHref} className="block py-1 font-semibold text-ink">
                {contact.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
