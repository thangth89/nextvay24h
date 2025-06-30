'use client';

type Props = {
  href: string;
  label: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function AffiliateButton({ href, label, ariaLabel, children }: Props) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_affiliate', {
        event_category: 'Affiliate',
        event_label: label
      });
    }
  };

  return (
    <a
      href={href}
      rel="nofollow sponsored"
      target="_blank"
      className="btn"
      onClick={handleClick}
      aria-label={ariaLabel || label}
    >
      {children}
    </a>
  );
}
