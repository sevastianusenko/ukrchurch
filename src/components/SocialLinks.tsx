import { contact } from "../../content/church";

const icons = {
  facebook: (
    <path
      d="M13 9H15V6H13C11.3 6 10 7.3 10 9V11H8V14H10V18H13V14H15L15.5 11H13V9.5C13 9.2 13.2 9 13 9Z"
      fill="currentColor"
    />
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.5L14.5 12L10.5 14.5V9.5Z" fill="currentColor" />
    </>
  ),
};

const links = [
  { key: "facebook", href: contact.facebook, label: "Facebook" },
  { key: "instagram", href: contact.instagram, label: "Instagram" },
  { key: "youtube", href: contact.youtube, label: "YouTube" },
] as const;

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((l) => (
        <a
          key={l.key}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-current/25 transition-colors hover:border-current"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {icons[l.key]}
          </svg>
        </a>
      ))}
    </div>
  );
}
