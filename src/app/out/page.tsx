'use client';
export const dynamic = 'force-dynamic';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function OutRedirectPage() {
  const pathname = usePathname();
  const toEncoded = pathname.replace('/out/', '');
  const to = decodeURIComponent(toEncoded);

  useEffect(() => {
    if (to) {
      window.gtag?.('event', 'click_affiliate', {
        event_category: 'Affiliate',
        event_label: to,
      });
      setTimeout(() => {
        window.location.href = to;
      }, 300);
    }
  }, [to]);

  return (
    <main style={{ textAlign: 'center', padding: '50px' }}>
      <h2>🔁 Đang chuyển hướng bạn tới trang vay tiền...</h2>
      <p>Vui lòng chờ trong giây lát...</p>
    </main>
  );
}
