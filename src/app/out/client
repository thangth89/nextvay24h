'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function OutRedirect() {
  const searchParams = useSearchParams();
  const to = searchParams.get('to');

  useEffect(() => {
    if (to) {
      if (window.gtag) {
        window.gtag('event', 'click_affiliate', {
          event_category: 'Affiliate',
          event_label: to,
        });
      }
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
