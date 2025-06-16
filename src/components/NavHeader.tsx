// src/components/NavHeader.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLink = {
  color: "#fff",
  marginLeft: "15px",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "5px 10px",
  borderRadius: "4px",
  transition: "all 0.3s ease"
};

export default function NavHeader() {
  const pathname = usePathname();

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .nav-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-shrink: 0;
            min-height: 40px;
          }
          
          .desktop-nav {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-shrink: 0;
            white-space: nowrap;
          }
          
          /* Desktop styles - Ensure desktop nav is always visible */
          @media (min-width: 769px) {
            .desktop-nav {
              display: flex;
            }
            .nav-container {
              justify-content: flex-end; /* Align desktop nav to the right */
            }
          }
          
          /* Mobile styles - Hide desktop nav */
          @media (max-width: 768px) {
            .desktop-nav {
              display: none;
            }
            .nav-container {
              display: none; /* Hide the original nav container on mobile */
            }
          }
        `
      }} />
      
      <div className="nav-container">
        <nav className="desktop-nav">
          <Link
            href="/"
            style={{
              ...navLink,
              color: pathname === '/' ? '#ffd700' : navLink.color,
              borderBottom: pathname === '/' ? '2px solid #ffd700' : 'none',
            }}
          >
            Trang chủ
          </Link>
          <Link
            href="/vay-tien-nhanh"
            style={{
              ...navLink,
              color: pathname === '/vay-tien-nhanh' ? '#ffd700' : navLink.color,
              borderBottom: pathname === '/vay-tien-nhanh' ? '2px solid #ffd700' : 'none',
            }}
          >
            Vay tiền nhanh
          </Link>
          <Link
            href="/the-tin-dung"
            style={{
              ...navLink,
              color: pathname === '/the-tin-dung' ? '#ffd700' : navLink.color,
              borderBottom: pathname === '/the-tin-dung' ? '2px solid #ffd700' : 'none',
            }}
          >
            Thẻ tín dụng
          </Link>
          <Link
            href="/tin-tuc"
            style={{
              ...navLink,
              color: pathname.startsWith('/tin-tuc') ? '#ffd700' : navLink.color,
              borderBottom: pathname.startsWith('/tin-tuc') ? '2px solid #ffd700' : 'none',
            }}
          >
            Tin tức
          </Link>
        </nav>
      </div>
    </>
  );
}