// AffiliateButton.tsx
'use client';

type Props = {
  href: string;
  label: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function AffiliateButton({ href, label, ariaLabel, children }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(href);
    window.location.href = `/out/${encoded}`;
  };

  return (
    <a
      href={`/out/${encodeURIComponent(href)}`}
      rel="nofollow sponsored"
      className="btn"
      onClick={handleClick}
      aria-label={ariaLabel || label}
    >
      {children}
    </a>
  );
}
