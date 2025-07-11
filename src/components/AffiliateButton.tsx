'use client';
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
  category = 'referral_apps'
}: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && window.gtag) {
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

      window.gtag('event', `click_${label.toLowerCase().replace(/\s+/g, '_')}`, {
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
        item_id: label.toLowerCase().replace(/\s+/g, '_'),
        item_name: label,
        item_category: category,
        item_list_name: 'loan_apps_list',
        index: position || 0,
        value: 1
      });
    }

    // Facebook Pixel Tracking
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

    const redirectTimer = setTimeout(() => {
      window.location.href = href;
    }, 150);

    if (!window.gtag) {
      clearTimeout(redirectTimer);
      window.location.href = href;
    }
  };

  // ✅ Đặt return bên trong function AffiliateButton
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
