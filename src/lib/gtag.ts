// src/lib/gtag.ts

// Khai báo window.gtag cho TypeScript (không dùng any)
declare global {
  interface Window {
    gtag: (...args: [string, string, Record<string, unknown>?]) => void;
  }
}

export const GA_TRACKING_ID = 'G-0K7KQX479V';

// ✅ Gửi pageview (an toàn: chỉ khi window.gtag đã sẵn sàng)
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// ✅ Gửi sự kiện tùy chỉnh (an toàn)
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: string;
}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
