// AffiliateButton.tsx - Cải thiện tracking GA4
'use client';

type Props = {
  href: string;
  label: string;
  ariaLabel?: string;
  children: React.ReactNode;
  position?: number; // Thêm vị trí ranking
  category?: string; // Thêm category
};

export default function AffiliateButton({ 
  href, 
  label, 
  ariaLabel, 
  children, 
  position,
  category = 'loan_apps' 
}: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Gửi multiple events để tracking tốt hơn
    if (typeof window !== 'undefined' && window.gtag) {
      
      // Event chính - click_affiliate
      window.gtag('event', 'click_affiliate', {
        event_category: 'Affiliate',
        event_label: label,
        affiliate_name: label,
        affiliate_url: href,
        affiliate_position: position || 0,
        affiliate_category: category,
        page_location: window.location.href,
        page_title: document.title,
        custom_parameter_1: `${category}_${label}`, // Tham số tùy chỉnh
        value: 1 // Giá trị số để dễ sum
      });

      // Event phụ - theo dõi từng sản phẩm cụ thể
      window.gtag('event', `click_${label.toLowerCase().replace(/\s+/g, '_')}`, {
        event_category: 'Affiliate_Products',
        event_label: label,
        affiliate_name: label,
        affiliate_position: position,
        value: 1
      });

      // Event conversion - để tracking funnel
      window.gtag('event', 'affiliate_conversion', {
        event_category: 'Conversions',
        event_label: label,
        affiliate_name: label,
        conversion_type: 'click',
        value: 1
      });

      // Custom event với item_id để tracking chi tiết
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

     // FACEBOOK PIXEL TRACKING
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
    // Chờ để đảm bảo events được gửi, nhưng không quá lâu
    const redirectTimer = setTimeout(() => {
      window.location.href = href;
    }, 150);

    // Fallback: redirect ngay lập tức nếu GA4 không có
    if (!window.gtag) {
      clearTimeout(redirectTimer);
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      rel="nofollow sponsored"
      className="btn"
      onClick={handleClick}
      aria-label={ariaLabel || label}
      data-affiliate={label} // Thêm data attribute
      data-position={position}
    >
      {children}
    </a>
  );
}
