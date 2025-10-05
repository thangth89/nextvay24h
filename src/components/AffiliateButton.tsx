'use client';

import React from 'react';

declare const fbq: (...args: unknown[]) => void;

type Props = {
  href: string;
  label: string;
  ariaLabel?: string;
  children: React.ReactNode;
  position?: number;
  category?: string;
};

export default function AffiliateButton({
  href,
  label,
  ariaLabel,
  children,
  position,
  category = 'referral_apps',
}: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const win = window.open(href, '_blank');

    try {
      // Google Analytics tracking
      if (typeof window !== 'undefined' && window.gtag) {
        const safeLabel = label.toLowerCase().replace(/\s+/g, '_');

        window.gtag('event', 'click_affiliate', {
          event_category: 'Affiliate',
          event_label: label,
          affiliate_name: label,
          affiliate_url: href,
          affiliate_position: position || 0,
          affiliate_category: category,
          page_location: window.location.href,
          page_title: document.title,
          custom_parameter_1: `${category}_${label}`,
          value: 1
        });

        window.gtag('event', `click_${safeLabel}`, {
          event_category: 'Affiliate_Products',
          event_label: label,
          affiliate_name: label,
          affiliate_position: position,
          value: 1
        });

        window.gtag('event', 'affiliate_conversion', {
          event_category: 'Conversions',
          event_label: label,
          affiliate_name: label,
          conversion_type: 'click',
          value: 1
        });

        window.gtag('event', 'select_item', {
          event_category: 'Affiliate',
          item_id: safeLabel,
          item_name: label,
          item_category: category,
          item_list_name: 'loan_apps_list',
          index: position || 0,
          value: 1
        });
      }

      // Facebook Pixel tracking
      if (typeof fbq !== 'undefined') {
        fbq('trackCustom', 'ClickAffiliate', {
          affiliate_name: label,
          affiliate_url: href,
          affiliate_position: position || 0,
          affiliate_category: category,
          page_location: window.location.href,
          page_title: document.title
        });

        fbq('trackCustom', `Click_${label.replace(/\s+/g, '')}`);
      }
      // Facebook Conversion API (server-side)
      fetch('/api/fb-capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          affiliate_name: label,
          affiliate_url: href,
          affiliate_position: position || 0,
          affiliate_category: category,
          page_location: window.location.href,
          user_agent: navigator.userAgent,
          fbp: document.cookie.match(/_fbp=([^;]+)/)?.[1],
          fbc: new URLSearchParams(window.location.search).get("fbclid")
            ? `fb.1.${Date.now()}.${new URLSearchParams(window.location.search).get("fbclid")}`
            : undefined,
        }),
      });

// TikTok Conversion API (server-side)
fetch('/api/tiktok-capi', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    event_name: 'ClickAffiliate',
    affiliate_name: label,
    affiliate_url: href,
    affiliate_position: position || 0,
    affiliate_category: category,
    page_location: window.location.href,
    referrer: document.referrer,
    user_agent: navigator.userAgent,
  }),
});

    } catch {
      // fail silently
    }

    // Fallback: nếu popup bị chặn
    if (!win || win.closed || typeof win.closed === 'undefined') {
      setTimeout(() => {
        window.location.href = href;
      }, 250); // tăng timeout để tracking kịp gửi
    }
  };

  return (
    <a
      href={href}
      rel="nofollow sponsored"
      className="btn"
      onClick={handleClick}
      aria-label={ariaLabel || label}
      data-affiliate={label}
      data-position={position}
    >
      {children}
    </a>
  );
}
