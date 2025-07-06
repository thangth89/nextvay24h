'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function OutRedirectPage() {
  const searchParams = useSearchParams();
  const to = searchParams.get('to');

  useEffect(() => {
    if (to) {
      setTimeout(() => {
        window.location.href = to;
      }, 300); // chờ một chút để GA gửi xong
    }
  }, [to]);

  return <p>Đang chuyển hướng...</p>;
}
