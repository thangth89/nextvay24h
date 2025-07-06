// AffiliateButton.tsx - Phiên bản client-side hoàn toàn
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
    
    // Gửi sự kiện GA4 trực tiếp
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_affiliate', {
        event_category: 'Affiliate',
        event_label: label,
        affiliate_name: label,
        affiliate_url: href,
        page_location: window.location.href,
      });
    }

    // Chờ một chút để đảm bảo GA4 event được gửi
    setTimeout(() => {
      // Redirect trực tiếp không qua trang trung gian
      window.location.href = href;
    }, 100);
  };

  return (
    <a
      href={href} // Href gốc để SEO và accessibility
      rel="nofollow sponsored"
      className="btn"
      onClick={handleClick}
      aria-label={ariaLabel || label}
    >
      {children}
    </a>
  );
}
