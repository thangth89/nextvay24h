// src/lib/gtag.ts

// Khai báo window.gtag cho TypeScript (dùng kiểu cụ thể, không dùng any)
declare global {
  interface Window {
    gtag: (...args: [string, string, Record<string, unknown>?]) => void;
  }
}

export const GA_TRACKING_ID = 'G-0K7KQX479V';

// Gửi pageview
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Gửi sự kiện tùy chỉnh
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
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
