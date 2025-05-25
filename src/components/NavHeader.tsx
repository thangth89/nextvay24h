'use client';

import { usePathname } from 'next/navigation';

const navLink = {
  color: "#fff",
  marginLeft: "15px",
  textDecoration: "none",
  fontWeight: "bold"
};

export default function NavHeader() {
  const pathname = usePathname();

  return (
    <nav>
      <a
        href="/"
        style={{
          ...navLink,
          color: pathname === '/' ? '#ffd700' : navLink.color,
          borderBottom: pathname === '/' ? '2px solid #ffd700' : 'none',
        }}
      >
        Trang chủ
      </a>
      <a
        href="/vay-tien-nhanh"
        style={{
          ...navLink,
          color: pathname === '/vay-tien-nhanh' ? '#ffd700' : navLink.color,
          borderBottom: pathname === '/vay-tien-nhanh' ? '2px solid #ffd700' : 'none',
        }}
      >
        Vay tiền nhanh
      </a>
      <a
        href="/the-tin-dung"
        style={{
          ...navLink,
          color: pathname === '/the-tin-dung' ? '#ffd700' : navLink.color,
          borderBottom: pathname === '/the-tin-dung' ? '2px solid #ffd700' : 'none',
        }}
      >
        Thẻ tín dụng
      </a>
      <a
        href="/tin-tuc"
        style={{
          ...navLink,
          color: pathname.startsWith('/tin-tuc') ? '#ffd700' : navLink.color,
          borderBottom: pathname.startsWith('/tin-tuc') ? '2px solid #ffd700' : 'none',
        }}
      >
        Tin tức
      </a>
    </nav>
  );
}