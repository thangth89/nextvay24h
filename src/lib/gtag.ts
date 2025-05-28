// src/lib/gtag.ts

// 🟢 BẮT BUỘC: Khai báo cho TypeScript biết window.gtag tồn tại
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-0K7KQX479V';

// Gửi pageview khi chuyển trang
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Gửi sự kiện tùy chỉnh (nếu dùng thêm sau này)
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
