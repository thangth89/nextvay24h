'use client';
export const dynamic = 'force-dynamic';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function OutRedirectPage() {
  const searchParams = useSearchParams();
  const to = searchParams.get('to');

  useEffect(() => {
    if (to) {
      setTimeout(() => {
        window.location.href = to;
      }, 300);
    }
  }, [to]);

  return <p>🔁 Đang chuyển hướng bạn tới trang vay tiền...</p>;
}
