// src/app/layout.tsx
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Sidebar from "../components/Sidebar";
import { Roboto } from 'next/font/google';
import NavHeader from '../components/NavHeader'; // Vẫn giữ NavHeader cho desktop
import MobileNavBar from '../components/MobileNavBar'; // Import MobileNavBar mới
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

import Script from 'next/script';
import Analytics from '../lib/Analytics';
import { GA_TRACKING_ID } from '../lib/gtag';

export const metadata = {
  title: {
    default: "Vay Tiền Online 24/7 - Lãi Suất 0% Khoản Đầu | vay24h.pro.vn",
    template: "%s | vay24h.pro.vn"
  },
  description: "⭐ Vay tiền online nhanh 24/7 chỉ cần CMND. Lãi suất 0% khoản đầu, hạn mức 1-500 triệu. Mở thẻ tín dụng miễn phí. Uy tín - An toàn - Duyệt nhanh.",
  keywords: "vay tiền online, vay nhanh 24/7, vay tiền uy tín, mở thẻ tín dụng, lãi suất 0%, vay không thế chấp, vay online nhanh, vay tiền chỉ cần cmnd",
  authors: [{ name: "vay24h.pro.vn" }],
  creator: "vay24h.pro.vn",
  publisher: "vay24h.pro.vn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://vay24h.pro.vn',
    title: 'Vay Tiền Online 24/7 - Lãi Suất 0% Khoản Đầu | vay24h.pro.vn',
    description: 'Vay tiền online nhanh 24/7 chỉ cần CMND. Lãi suất 0% khoản đầu, hạn mức 1-500 triệu. Mở thẻ tín dụng miễn phí. Uy tín - An toàn - Duyệt nhanh.',
    images: [
      {
        url: 'https://vay24h.pro.vn/vay.webp',
        width: 1200,
        height: 630,
        alt: 'Vay tiền online 24/7 - vay24h.pro.vn',
      }
    ],
    siteName: 'vay24h.pro.vn',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vay Tiền Online 24/7 - Lãi Suất 0% Khoản Đầu',
    description: 'Vay tiền online nhanh 24/7 chỉ cần CMND. Lãi suất 0% khoản đầu, hạn mức 1-500 triệu.',
    images: ['https://vay24h.pro.vn/vay.webp'],
  },
  alternates: {
    canonical: 'https://vay24h.pro.vn',
  },

  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/webp' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/favicon-192.png',
    shortcut: '/favicon.png',
  },
  manifest: '/site.webmanifest',
  category: 'finance',
};

const roboto = Roboto({
  subsets: ['latin', 'vietnamese'], // Thêm vietnamese support
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true, // Preload font cho performance tốt hơn
});

// Structured Data JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://vay24h.pro.vn/#organization",
  "name": "vay24h.pro.vn",
  "description": "Website tư vấn tài chính, cung cấp thông tin và đánh giá dịch vụ vay tiền online, mở thẻ tín dụng uy tín tại Việt Nam",
  "url": "https://vay24h.pro.vn",
  "logo": "https://vay24h.pro.vn/logovay.webp",
  "image": "https://vay24h.pro.vn/vay.webp",
  "telephone": "+84-332-071-189",
  "priceRange": "Tùy theo khoản vay",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "VN",
    "addressRegion": "Phú Thọ",
    "addressLocality": "Thị xã Phú Thọ",
    "streetAddress": "Phú Hộ",
    "postalCode": "290000"
  },
  "sameAs": [
    "https://www.facebook.com/giaiphaptaichinhlinhhoat"
  ],
  "foundingDate": "2025",
  "areaServed": {
    "@type": "Country", 
    "name": "Vietnam"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Danh mục sản phẩm tài chính",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "Offer",
        "url": "https://www.vay24h.pro.vn/vay-tien-nhanh",
        "availability": "https://schema.org/InStock",
        "itemOffered": {
          "@type": "Service",
          "name": "Vay tiền online",
          "description": "Các gói vay tiền từ ngân hàng và tổ chức tài chính",
          "category": "Personal Loan"
        }
      },
      {
        "@type": "Offer",
        "url": "https://www.vay24h.pro.vn/the-tin-dung",
        "availability": "https://schema.org/InStock",
        "itemOffered": {
          "@type": "Service",
          "name": "Thẻ tín dụng",
          "description": "Các loại thẻ tín dụng từ các ngân hàng",
          "category": "Credit Card"
        }
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={roboto.className}>
      <head>
        <meta name="facebook-domain-verification" content="vquzyqlasiqtfdy8oivcro2yi1xowm" />
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#007000" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '850947108943962');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=850947108943962&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      
      <body style={{ margin: 0 }}>
        {/* AdSense Verification Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1987409798165796"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
    
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Analytics />

        <header className="header" role="banner">
          <div className="header-container">
            <div className="logo-section">
              <Image 
                src="/logovay.webp" 
                alt="Vay24h.pro.vn - Vay tiền online uy tín 24/7" 
                width={120} 
                height={40}
                priority // Priority loading cho logo
              />
              <h1>
                <strong>Giải pháp tài chính linh hoạt</strong>
              </h1>
            </div>
            {/* NavHeader (desktop nav) vẫn nằm trong header */}
            <NavHeader />
          </div>
        </header>

        <main className="main-content" role="main">
          <div className="content-area">
            {children}
          </div>
          <Sidebar />
        </main>

        <footer className="footer" role="contentinfo">
          <div className="footer-content">
            <div className="footer-column">
              <h4>Về vay24h.pro.vn</h4>
              <p>
                vay24h.pro.vn là website tư vấn tài chính, cung cấp thông tin và đánh giá dịch vụ vay tiền online, mở thẻ tín dụng uy tín tại Việt Nam. Hoạt động từ 2025, chúng tôi giúp người dùng so sánh và chọn giải pháp tài chính phù hợp. Website không trực tiếp cho vay hay phát hành thẻ, mà giới thiệu đối tác đáng tin cậy.
              </p>
            </div>

            <div className="footer-column">
              <h4>Trang thông tin</h4>
              <ul>
                <li><Link href="/gioi-thieu">Giới thiệu vay24.pro.vn</Link></li>
                <li><Link href="/dieu-khoan">Điều khoản sử dụng</Link></li>
                <li><Link href="/chinh-sach">Chính sách bảo mật</Link></li>
                <li><Link href="/lien-he">Liên hệ với chúng tôi</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Danh mục bài viết</h4>
              <ul>
                <li><Link href="/vay-tien-nhanh">Vay tiền uy tín</Link></li>
                <li><Link href="/the-tin-dung">Mở thẻ tín dụng</Link></li>
                <li><Link href="/">Hướng dẫn cơ bản</Link></li>
                <li><Link href="/tin-tuc">Tổng hợp tin tức</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            © 2025 vay24h.pro.vn All rights reserved.
          </div>
        </footer>
        <VercelAnalytics />
        <SpeedInsights />
        {/* MobileNavBar (bottom nav) được đặt ở cuối body */}
        <MobileNavBar />
      </body>
    </html>
  );
}
