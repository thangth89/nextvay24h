// app/out/page.tsx
'use client';
export const dynamic = 'force-dynamic';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function OutRedirectPage() {
  const searchParams = useSearchParams();
  const to = searchParams.get('to');

  useEffect(() => {
    if (to) {
      // Gửi sự kiện GA4 nếu có gtag
      window.gtag?.('event', 'click_affiliate', {
        event_category: 'Affiliate',
        event_label: to,
      });

      // Redirect sau 300ms
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
