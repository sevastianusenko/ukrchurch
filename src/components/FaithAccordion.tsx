"use client";

import { useState } from "react";
import type { FaithArticle, Locale } from "../../content/church";

export default function FaithAccordion({
  articles,
  locale,
}: {
  articles: FaithArticle[];
  locale: Locale;
}) {
  const [openNumber, setOpenNumber] = useState<number | null>(1);

  return (
    <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
      {articles.map((article) => {
        const isOpen = openNumber === article.number;
        return (
          <div key={article.number}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenNumber(isOpen ? null : article.number)}
                aria-expanded={isOpen}
                aria-controls={`article-${article.number}`}
                className="flex w-full items-center gap-4 py-5 text-left"
              >
                <span className="font-display text-sm font-bold text-poppy">
                  {String(article.number).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-lg font-semibold text-ink sm:text-xl">
                  {article.title[locale]}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className={`shrink-0 text-charcoal/50 transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </h3>
            {isOpen && (
              <div id={`article-${article.number}`} className="max-w-3xl pb-6 pl-9">
                {article.paragraphs.map((p, i) => (
                  <p key={i} className="mb-3 font-serif text-base leading-relaxed text-charcoal/90 last:mb-0">
                    {p[locale]}
                  </p>
                ))}
                <p className="mt-4 text-xs text-charcoal/50">{article.refs}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
