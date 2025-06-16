// src/components/MobileNavBar.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function MobileNavBar() {
  const pathname = usePathname();

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Bottom Navigation Bar Styles */
          .bottom-nav-bar {
            display: none; /* Hidden by default */
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%); /* Modern green */
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            z-index: 1000;
            padding: 8px 0;
            justify-content: space-around;
            align-items: center;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }

          .bottom-nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.7);
            font-size: 12px;
            font-weight: 500;
            padding: 5px 0;
            transition: color 0.3s ease;
            flex: 1; /* Distribute space evenly */
          }

          .bottom-nav-item:hover {
            color: #fff;
          }

          .bottom-nav-item.active {
            color: #ffd700; /* Active color, same as desktop for consistency */
          }

          .bottom-nav-icon {
            width: 24px;
            height: 24px;
            margin-bottom: 4px;
            fill: currentColor; /* Use currentColor to inherit color from parent */
            transition: fill 0.3s ease;
          }

          /* Mobile styles - Show bottom nav */
          @media (max-width: 768px) {
            .bottom-nav-bar {
              display: flex; /* Show bottom nav on mobile */
            }
          }
          
          /* Smaller mobile screens */
          @media (max-width: 480px) {
            .bottom-nav-item {
              font-size: 11px;
            }
            .bottom-nav-icon {
              width: 22px;
              height: 22px;
            }
          }
        `
      }} />
      <nav className="bottom-nav-bar">
        <Link href="/" className={`bottom-nav-item ${pathname === '/' ? 'active' : ''}`}>
          <svg className="bottom-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          Trang chủ
        </Link>
        <Link href="/vay-tien-nhanh" className={`bottom-nav-item ${pathname === '/vay-tien-nhanh' ? 'active' : ''}`}>
          <svg className="bottom-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          Vay tiền nhanh
        </Link>
        <Link href="/the-tin-dung" className={`bottom-nav-item ${pathname === '/the-tin-dung' ? 'active' : ''}`}>
          <svg className="bottom-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
          Thẻ tín dụng
        </Link>
        <Link href="/tin-tuc" className={`bottom-nav-item ${pathname.startsWith('/tin-tuc') ? 'active' : ''}`}>
          <svg className="bottom-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
          Tin tức
        </Link>
      </nav>
    </>
  );
}