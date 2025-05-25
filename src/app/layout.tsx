
import Sidebar from "../components/Sidebar";
import { Roboto } from 'next/font/google';
import NavHeader from '../components/NavHeader';



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
      <head />
      <body style={{ margin: 0 }}>
        <header style={{
          backgroundColor: "#1abc9c",
          padding: "10px",
          color: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000
        }}>
          <div style={{ maxWidth: 1200, margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img src="/logovay.webp" alt="Logo" style={{ height: "40px" }} />
              <h1 style={{ margin: 0, fontSize: "20px" }}><strong>Giải pháp tài chính linh hoạt</strong></h1>
            </div>
          <NavHeader />
          </div>
        </header>

        <main style={{
          maxWidth: 1200,
          margin: "80px auto 20px",
          display: "flex",
          gap: "20px",
          alignItems: "flex-start"
        }}>
          <div style={{ flex: 3 }}>
            {children}
          </div>
          <Sidebar />
        </main>

        <footer style={{
          backgroundColor: "#0b2239",
          color: "#fff",
          padding: "40px 20px",
          marginTop: "40px",
        }}>
           <div style={{
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px"
  }}>
    {/* Cột 1 */}
    <div style={{ flex: "1 1 250px" }}>
      <h4 style={{ marginBottom: "10px" }}>Về vay24h.pro.vn</h4>
      <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
        vay24h.pro.vn là website tư vấn tài chính, cung cấp thông tin và đánh giá dịch vụ vay tiền online, mở thẻ tín dụng uy tín tại Việt Nam. Hoạt động từ 2025, chúng tôi giúp người dùng so sánh và chọn giải pháp tài chính phù hợp. Website không trực tiếp cho vay hay phát hành thẻ, mà giới thiệu đối tác đáng tin cậy.
      </p>
    </div>

    {/* Cột 2 */}
    <div style={{ flex: "1 1 150px" }}>
      <h4 style={{ marginBottom: "10px" }}>Trang thông tin</h4>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
        <li><a href="/gioi-thieu" style={footerLink}>Giới thiệu vay24.pro.vn</a></li>
        <li><a href="/dieu-khoan" style={footerLink}>Điều khoản sử dụng</a></li>
        <li><a href="/chinh-sach" style={footerLink}>Chính sách bảo mật</a></li>
        <li><a href="/lien-he" style={footerLink}>Liên hệ với chúng tôi</a></li>
      </ul>
    </div>

    {/* Cột 3 */}
    <div style={{ flex: "1 1 150px" }}>
      <h4 style={{ marginBottom: "10px" }}>Danh mục bài viết</h4>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
        <li><a href="/vay-tien-nhanh" style={footerLink}>Vay tiền uy tín</a></li>
        <li><a href="/the-tin-dung" style={footerLink}>Mở thẻ tín dụng</a></li>
        <li><a href="/" style={footerLink}>Hướng dẫn cơ bản</a></li>
        <li><a href="/tin-tuc" style={footerLink}>Tổng hợp tin tức</a></li>
      </ul>
    </div>
  </div>

  <div style={{
    textAlign: "center",
    fontSize: "13px",
    color: "#ccc",
    marginTop: "30px"
  }}>
    © 2025 vay24h.pro.vn. All rights reserved.
  </div>
        </footer>
      </body>
    </html>
  );
}

const navLink = {
  color: "#fff",
  marginLeft: "15px",
  textDecoration: "none",
  fontWeight: "bold"
};
const footerLink = {
  color: "#ccc",
  textDecoration: "none",
  display: "block",
  marginBottom: "6px"
};
