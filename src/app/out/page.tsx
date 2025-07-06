'use client';
export const dynamic = 'force-dynamic'; // đảm bảo không prerender

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function OutPage() {
  const searchParams = useSearchParams();
  const to = searchParams.get('to');

  useEffect(() => {
    if (to) {
      // Gửi sự kiện click GA nếu có
      if (window.gtag) {
        window.gtag('event', 'click_affiliate', {
          event_category: 'Affiliate',
          event_label: to,
        });
      }

      // Chuyển hướng sau 300ms
      setTimeout(() => {
        window.location.href = to;
      }, 300);
    }
  }, [to]);

  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h2>🔁 Đang chuyển hướng bạn tới trang vay tiền...</h2>
      <p>Vui lòng chờ trong giây lát...</p>
    </main>
  );
}
