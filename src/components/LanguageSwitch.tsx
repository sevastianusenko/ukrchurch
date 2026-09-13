"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "../../content/church";

function swapLocale(pathname: string, target: Locale) {
  const segments = pathname.split("/");
  segments[1] = target;
  return segments.join("/") || "/";
}

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full border border-charcoal/15 p-0.5 text-sm font-medium">
      <Link
        href={swapLocale(pathname, "uk")}
        aria-current={locale === "uk" ? "page" : undefined}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === "uk" ? "bg-ink text-wheat" : "text-charcoal/70 hover:text-charcoal"
        }`}
      >
        UA
      </Link>
      <Link
        href={swapLocale(pathname, "en")}
        aria-current={locale === "en" ? "page" : undefined}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === "en" ? "bg-ink text-wheat" : "text-charcoal/70 hover:text-charcoal"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
