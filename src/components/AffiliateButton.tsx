'use client';

import { useRouter } from 'next/navigation';

type Props = {
  href: string;
  label: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function AffiliateButton({ href, label, ariaLabel, children }: Props) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // ngăn mở link trực tiếp
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_affiliate', {
        event_category: 'Affiliate',
        event_label: label
      });
    }

    // Đợi một chút rồi chuyển hướng
    setTimeout(() => {
      router.push(`/out?to=${encodeURIComponent(href)}`);
    }, 300);
  };

  return (
    <a
      href={`/out?to=${encodeURIComponent(href)}`}
      rel="nofollow sponsored"
      className="btn"
      onClick={handleClick}
      aria-label={ariaLabel || label}
    >
      {children}
    </a>
  );
}
