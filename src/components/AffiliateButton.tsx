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
    const redirectUrl = `/out?to=${encodeURIComponent(href)}&label=${encodeURIComponent(label)}`;
    window.location.href = redirectUrl;
  };

  return (
    <a
      href={`/out?to=${encodeURIComponent(href)}&label=${encodeURIComponent(label)}`}
      rel="nofollow sponsored"
      className="btn"
      onClick={handleClick}
      aria-label={ariaLabel || label}
    >
      {children}
    </a>
  );
}
