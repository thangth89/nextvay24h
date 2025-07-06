// app/out/page.tsx
'use client';
export const dynamic = 'force-dynamic';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// Component con để xử lý redirect
function RedirectHandler() {
  const searchParams = useSearchParams();
  const to = searchParams.get('to');
  const label = searchParams.get('label');

  useEffect(() => {
    if (to) {
      // Gửi sự kiện GA4 nếu có gtag
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click_affiliate', {
          event_category: 'Affiliate',
          event_label: label || to, // Sử dụng label nếu có, không thì dùng URL
          custom_url: to, // Thêm URL riêng biệt nếu cần
        });
      }

      // Redirect sau 300ms
      setTimeout(() => {
        window.location.href = to;
      }, 300);
    }
  }, [to, label]);

  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h2>🔁 Đang chuyển hướng bạn tới trang vay tiền...</h2>
      <p>Vui lòng chờ trong giây lát...</p>
    </main>
  );
}

// Component loading fallback
function LoadingRedirect() {
  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h2>🔁 Đang tải...</h2>
      <p>Vui lòng chờ trong giây lát...</p>
    </main>
  );
}

export default function OutRedirectPage() {
  return (
    <Suspense fallback={<LoadingRedirect />}>
      <RedirectHandler />
    </Suspense>
  );
}
