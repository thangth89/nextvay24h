'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          
          .mobile-menu-button {
            display: none;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 8px 12px;
            border-radius: 8px;
            transition: background-color 0.3s ease;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 500;
            flex-shrink: 0;
          }
          
          .mobile-menu-button:hover {
            background-color: rgba(255,255,255,0.1);
          }
          
          .menu-text {
            color: white;
            font-size: 14px;
            font-weight: 500;
          }
          
          .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.3);
            z-index: 999;
            display: none;
          }
          
          .mobile-overlay.open {
            display: block;
          }
          
          .mobile-nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%);
            box-shadow: -4px 0 20px rgba(0,0,0,0.15);
            z-index: 1000;
            transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
            display: flex;
            flex-direction: column;
          }
          
          .mobile-nav.open {
            right: 0;
          }
          
          .mobile-nav-header {
            padding: 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(255,255,255,0.05);
          }
          
          .mobile-nav-title {
            color: white;
            font-size: 18px;
            font-weight: bold;
            margin: 0;
          }
          
          .mobile-close-button {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 4px;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease;
          }
          
          .mobile-close-button:hover {
            background-color: rgba(255,255,255,0.1);
          }
          
          .mobile-nav-links {
            flex: 1;
            padding: 20px 0;
          }
          
          .mobile-nav-link {
            display: block;
            color: white;
            text-decoration: none;
            padding: 16px 24px;
            font-weight: 500;
            font-size: 16px;
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
            position: relative;
          }
          
          .mobile-nav-link:hover {
            background-color: rgba(255,255,255,0.1);
            border-left-color: rgba(255,255,255,0.5);
            padding-left: 28px;
          }
          
          .mobile-nav-link.active {
            background-color: rgba(255,215,0,0.15);
            color: #ffd700;
            border-left-color: #ffd700;
            font-weight: 600;
          }
          
          .mobile-nav-link.active:hover {
            background-color: rgba(255,215,0,0.2);
          }
          
          .mobile-nav-link::before {
            content: '';
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-right: 12px;
            vertical-align: middle;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0.8;
          }
          
          .mobile-nav-link[href="/"]::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3C/svg%3E");
          }
          
          .mobile-nav-link[href="/vay-tien-nhanh"]::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E");
          }
          
          .mobile-nav-link[href="/the-tin-dung"]::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'/%3E%3C/svg%3E");
          }
          
          .mobile-nav-link[href="/tin-tuc"]::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'/%3E%3C/svg%3E");
          }
          
          .hamburger {
            display: inline-block;
            cursor: pointer;
            transition-property: opacity, filter;
            transition-duration: 0.15s;
            transition-timing-function: linear;
          }
          
          .hamburger-box {
            width: 20px;
            height: 20px;
            display: inline-block;
            position: relative;
          }
          
          .hamburger-inner {
            display: block;
            top: 50%;
            margin-top: -1px;
          }
          
          .hamburger-inner,
          .hamburger-inner::before,
          .hamburger-inner::after {
            width: 20px;
            height: 2px;
            background-color: white;
            border-radius: 2px;
            position: absolute;
            transition-property: transform;
            transition-duration: 0.15s;
            transition-timing-function: ease;
          }
          
          .hamburger-inner::before,
          .hamburger-inner::after {
            content: "";
            display: block;
          }
          
          .hamburger-inner::before {
            top: -5px;
          }
          
          .hamburger-inner::after {
            bottom: -5px;
          }
          
          .hamburger.active .hamburger-inner {
            transform: rotate(45deg);
          }
          
          .hamburger.active .hamburger-inner::before {
            top: 0;
            transform: rotate(90deg);
          }
          
          .hamburger.active .hamburger-inner::after {
            bottom: 0;
            transform: rotate(90deg);
          }
          
          /* Desktop styles - Ẩn hoàn toàn mobile menu button */
          @media (min-width: 769px) {
            .mobile-menu-button {
              display: none !important;
            }
            
            .desktop-nav {
              display: flex;
            }
          }
          
          /* Mobile styles */
          @media (max-width: 768px) {
            .desktop-nav {
              display: none;
            }
            
            .mobile-menu-button {
              display: flex;
            }
            
            .nav-container {
              flex-wrap: nowrap;
              align-items: center;
              min-height: 35px;
            }
          }
          
          /* Smaller mobile screens */
          @media (max-width: 480px) {
            .mobile-nav {
              width: 100vw;
              right: -100vw;
            }
            
            .mobile-nav.open {
              right: 0;
            }
            
            .nav-container {
              padding: 0 10px;
              min-height: 30px;
            }
            
            .mobile-menu-button {
              padding: 6px 10px;
              gap: 6px;
            }
            
            .menu-text {
              font-size: 13px;
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

        <button 
          className={`mobile-menu-button hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          <span className="menu-text">Menu</span>
        </button>

        <div 
          className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        />

        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-header">
            <h3 className="mobile-nav-title">Menu</h3>
            <button 
              className="mobile-close-button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          
          <div className="mobile-nav-links">
            <Link
              href="/"
              className={`mobile-nav-link ${pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/vay-tien-nhanh"
              className={`mobile-nav-link ${pathname === '/vay-tien-nhanh' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Vay tiền nhanh
            </Link>
            <Link
              href="/the-tin-dung"
              className={`mobile-nav-link ${pathname === '/the-tin-dung' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Thẻ tín dụng
            </Link>
            <Link
              href="/tin-tuc"
              className={`mobile-nav-link ${pathname.startsWith('/tin-tuc') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tin tức
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}