import Sidebar from "../components/Sidebar";
import { Roboto } from 'next/font/google';
import NavHeader from '../components/NavHeader';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: "Vay tiền online 24/7 - Uy tín",
  description: "Vay nhanh, đơn giản, không thẩm định.",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={roboto.className}>
      <body style={{ margin: 0 }}>
        <header className="header">
          <div className="header-container">
            <div className="logo-section">
              <Image src="/logovay.webp" alt="Logo" width={120} height={40} />
              <h1>
                <strong>Giải pháp tài chính linh hoạt</strong>
              </h1>
            </div>
            <NavHeader />
          </div>
        </header>

        <main className="main-content">
          <div className="content-area">
            {children}
          </div>
          <Sidebar />
        </main>

        <footer className="footer">
          <div className="footer-content">
            {/* Cột 1 */}
            <div className="footer-column">
              <h4>Về vay24h.pro.vn</h4>
              <p>
                vay24h.pro.vn là website tư vấn tài chính, cung cấp thông tin và đánh giá dịch vụ vay tiền online, mở thẻ tín dụng uy tín tại Việt Nam. Hoạt động từ 2025, chúng tôi giúp người dùng so sánh và chọn giải pháp tài chính phù hợp. Website không trực tiếp cho vay hay phát hành thẻ, mà giới thiệu đối tác đáng tin cậy.
              </p>
            </div>

            {/* Cột 2 */}
            <div className="footer-column">
              <h4>Trang thông tin</h4>
              <ul>
                <li><Link href="/gioi-thieu">Giới thiệu vay24.pro.vn</Link></li>
                <li><Link href="/dieu-khoan">Điều khoản sử dụng</Link></li>
                <li><Link href="/chinh-sach">Chính sách bảo mật</Link></li>
                <li><Link href="/lien-he">Liên hệ với chúng tôi</Link></li>
              </ul>
            </div>

            {/* Cột 3 */}
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
            © 2025 vay24h.pro.vn. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}