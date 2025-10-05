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
import StatsComponent from '../components/StatsComponent';
import TestimonialsSection from '../components/TestimonialsSection';
import SuccessNotification from '../components/SuccessNotification';
import { Metadata } from 'next';

import Script from 'next/script';
import Analytics from '../lib/Analytics';
import { GA_TRACKING_ID } from '../lib/gtag';

export const metadata: Metadata = {
  metadataBase: new URL('https://vay24h.pro.vn'), // thêm dòng này
  alternates: {
    canonical: '/', // canonical gốc, Next.js sẽ tự ghép với metadataBase
  },
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
    "https://www.facebook.com/giaiphaptaichinhlinhhoat",
    "https://www.tiktok.com/@vay24h.pro.vn",
    "https://zalo.me/g/wzwmpm349"  
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
            fbq('init', '773319391878744');
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


        <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
          !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
          var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
          ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
          ttq.load('D3H80T3C77U3D7OGHMC0');
          ttq.page();
          }(window, document, 'ttq');
        `}
      </script>

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

    <div className="StatsComponent">
      <StatsComponent />
    </div>
    <div className="TestimonialsSection">
      <TestimonialsSection />
    </div>

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
            <div className="footer-bottom-content">
              <span>© 2025 vay24h.pro.vn All rights reserved.</span>
              <div className="social-links-bottom">
                <a 
                  href="https://www.facebook.com/giaiphaptaichinhlinhhoat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-small facebook"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.tiktok.com/@vay24h.pro.vn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-small tiktok"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://zalo.me/g/wzwmpm349" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-small zalo"
                  aria-label="Zalo"
                >
                  <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M24 4C12.954 4 4 12.954 4 24c0 4.267 1.339 8.221 3.618 11.456L6 44l8.544-1.618C17.779 42.661 21.733 44 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4z"/>
                    <path d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z" fill="white"/>
                    <path d="M17.5 18.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm10 0c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z" fill="#0068ff"/>
                    <path d="M16 26c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H18c-1.1 0-2-.9-2-2v-4z" fill="#0068ff"/>
                    <path d="M18 26h12v4H18v-4z" fill="white"/>
                    <path d="M19 27h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" fill="#0068ff"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <VercelAnalytics />
        <SpeedInsights />
        {/* MobileNavBar (bottom nav) được đặt ở cuối body */}
        <MobileNavBar />
        <SuccessNotification />
      </body>
    </html>
  );
}



