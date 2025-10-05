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
      const safeLabel = label.toLowerCase().replace(/\s+/g, '_');
      const eventName = `Click_${label.replace(/\s+/g, '')}`;
      const pageLocation = window.location.href;

      // ============ Google Analytics ============
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click_affiliate', {
          event_category: 'Affiliate',
          event_label: label,
          affiliate_name: label,
          affiliate_url: href,
          affiliate_position: position || 0,
          affiliate_category: category,
          page_location: pageLocation,
          page_title: document.title,
          custom_parameter_1: `${category}_${label}`,
          value: 1,
        });

        window.gtag('event', eventName.toLowerCase(), {
          event_category: 'Affiliate_Products',
          event_label: label,
          affiliate_name: label,
          affiliate_position: position,
          value: 1,
        });

        window.gtag('event', 'affiliate_conversion', {
          event_category: 'Conversions',
          event_label: label,
          affiliate_name: label,
          conversion_type: 'click',
          value: 1,
        });

        window.gtag('event', 'select_item', {
          event_category: 'Affiliate',
          item_id: safeLabel,
          item_name: label,
          item_category: category,
          item_list_name: 'loan_apps_list',
          index: position || 0,
          value: 1,
        });
      }

      // ============ Facebook Pixel (Client-side) ============
      if (typeof fbq !== 'undefined') {
        fbq('trackCustom', 'ClickAffiliate', {
          affiliate_name: label,
          affiliate_url: href,
          affiliate_position: position || 0,
          affiliate_category: category,
          page_location: pageLocation,
          page_title: document.title,
        });

        fbq('trackCustom', eventName);
      }

      // ============ Facebook CAPI (Server-side) ============
      fetch('/api/fb-capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: eventName,
          affiliate_name: label,
          affiliate_url: href,
          affiliate_position: position || 0,
          affiliate_category: category,
          page_location: pageLocation,
          user_agent: navigator.userAgent,
          fbp: document.cookie.match(/_fbp=([^;]+)/)?.[1],
          fbc: new URLSearchParams(window.location.search).get('fbclid')
            ? `fb.1.${Date.now()}.${new URLSearchParams(window.location.search).get('fbclid')}`
            : undefined,
        }),
      }).catch(() => {
        // fail silently
      });

      // ============ TikTok Pixel (Client-side) ============
      if (typeof window !== 'undefined' && window.ttq) {
        window.ttq.track(eventName, {
          content_type: 'product',
          content_name: label,
          content_category: category,
          contents: [
            {
              content_id: safeLabel,
              content_name: label,
            },
          ],
          value: 1,
          currency: 'VND',
        });
      }

      // ============ TikTok Events API (Server-side) ============
      const urlParams = new URLSearchParams(window.location.search);
      const ttclid = urlParams.get('ttclid'); // TikTok click ID

      fetch('/api/tiktok-capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: eventName,
          affiliate_name: label,
          affiliate_url: href,
          affiliate_position: position || 0,
          affiliate_category: category,
          page_location: pageLocation,
          referrer: document.referrer,
          user_agent: navigator.userAgent,
          ttp: document.cookie.match(/_ttp=([^;]+)/)?.[1],
          ttclid: ttclid,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('✅ TikTok CAPI Response:', data);
          }
        })
        .catch((err) => {
          if (process.env.NODE_ENV === 'development') {
            console.error('❌ TikTok CAPI Request Failed:', err);
          }
        });
    } catch {
      // fail silently
    }

    // Fallback: nếu popup bị chặn
    if (!win || win.closed || typeof win.closed === 'undefined') {
      setTimeout(() => {
        window.location.href = href;
      }, 250);
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
