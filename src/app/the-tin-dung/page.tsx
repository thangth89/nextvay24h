
import './style.css';
import Image from 'next/image';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Mở Thẻ Tín Dụng Online Miễn Phí 2025 | Top 4 Ngân Hàng Uy Tín',
  description: 'Mở thẻ tín dụng online miễn phí 2025 tại CAKE, VIB, VPBank, TPBank. Hoàn tiền đến 20%, miễn phí thường niên, duyệt nhanh 2 phút. Đăng ký ngay!',
  keywords: 'mở thẻ tín dụng online, thẻ tín dụng miễn phí, mở thẻ tín dụng nhanh, thẻ tín dụng 2025, CAKE, VIB, VPBank, TPBank',
  openGraph: {
    title: 'Top 4 Mở Thẻ Tín Dụng Online Miễn Phí 2025',
    description: 'Mở thẻ tín dụng online miễn phí tại các ngân hàng uy tín. Hoàn tiền cao, duyệt nhanh, không cần bảng lương.',
    type: 'website',
    locale: 'vi_VN',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://vay24h.pro.vn/the-tin-dung'
  }
};

// Structured Data Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Top 4 Mở Thẻ Tín Dụng Online Miễn Phí",
  "description": "Danh sách các ngân hàng mở thẻ tín dụng online miễn phí với ưu đãi tốt nhất",
  "url": "https://vay24h.pro.vn/the-tin-dung",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "FinancialProduct",
        "name": "Thẻ Tín Dụng CAKE",
        "description": "Hoàn tiền 20%, mở online 2 phút có thẻ ảo",
        "provider": {
          "@type": "Organization",
          "name": "CAKE"
        }
      },
      {
        "@type": "FinancialProduct", 
        "name": "Thẻ Tín Dụng VIB Bank",
        "description": "Hoàn tiền đến 6%, miễn phí thường niên trọn đời",
        "provider": {
          "@type": "Organization",
          "name": "VIB Bank"
        }
      }
    ]
  }
};

export default function TheTinDungPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Main Content */}
      <article>

      {/* Breadcrumb đơn giản */}
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <a href="https://vay24h.pro.vn">Trang chủ</a> › 
        <span> Thẻ tín dụng</span>
      </nav>

        <header className="page-header">
          <h1 className="main-title">
            Top 4 Mở Thẻ Tín Dụng Online Miễn Phí 2025 - Duyệt Nhanh, Hoàn Tiền Cao
          </h1>
          <p className="intro-text">
            Tổng hợp <strong>4 ngân hàng mở thẻ tín dụng online miễn phí</strong> uy tín nhất hiện nay. 
            Duyệt nhanh chỉ 2 phút, hoàn tiền lên đến 20%, miễn phí thường niên. 
            So sánh chi tiết để chọn thẻ phù hợp nhất với nhu cầu của bạn.
          </p>
        </header>

        <section className="loan-list" aria-label="Danh sách thẻ tín dụng">
          <div className="loan-card" itemScope itemType="https://schema.org/FinancialProduct">
            <span className="top-label" aria-label="Xếp hạng số 1">TOP #1</span>
            <div className="card-header">
              <Image 
                src="/the/cake.webp" 
                width={80} 
                height={80} 
                alt="Logo thẻ tín dụng CAKE - Mở thẻ online miễn phí" 
                className="logo" 
              />
              <h2 itemProp="name">Thẻ Tín Dụng CAKE</h2>
              <p className="duyet">📌 MIỄN PHÍ MỞ THẺ ONLINE - DUYỆT NHANH</p>
            </div>
            <div className="card-body">
              <h3>Ưu đãi nổi bật:</h3>
              <ul className="info-list" itemProp="description">
                <li><strong>Hoàn tiền 20%</strong> cho mọi giao dịch</li>
                <li>Mở online <strong>2 phút có thẻ ảo</strong> ngay lập tức</li>
                <li><strong>Miễn phí phát hành</strong> và chuyển đổi ngoại tệ</li>
                <li>Độ tuổi: <strong>18 - 60 tuổi</strong></li>
                <li><strong>Không cần bảng lương</strong>, thủ tục đơn giản</li>
              </ul>
            </div>
            <div className="card-footer">
              <a 
                href="https://riofin.asia/Erk2010" 
                rel="nofollow sponsored" 
                target="_blank" 
                className="btn"
                aria-label="Mở thẻ tín dụng CAKE ngay"
              >
                MỞ THẺ TÍN DỤNG NGAY
              </a>
            </div>
          </div>

          <div className="loan-card" itemScope itemType="https://schema.org/FinancialProduct">
            <span className="top-label" aria-label="Xếp hạng số 2">TOP #2</span>
            <div className="card-header">
              <Image 
                src="/the/vib.webp" 
                width={80} 
                height={80} 
                alt="Logo thẻ tín dụng VIB Bank - Hoàn tiền 6%" 
                className="logo" 
              />
              <h2 itemProp="name">Thẻ Tín Dung VIB Bank</h2>
              <p className="duyet">📌 MIỄN PHÍ THƯỜNG NIÊN TRỌN ĐỜI</p>
            </div>
            <div className="card-body">
              <h3>Ưu đãi nổi bật:</h3>
              <ul className="info-list" itemProp="description">
                <li><strong>Hoàn tiền đến 6%</strong> cho mọi chi tiêu</li>
                <li><strong>Miễn phí thường niên trọn đời</strong></li>
                <li>Ưu đãi <strong>trả góp 0% lãi suất</strong></li>
                <li>Độ tuổi: <strong>22 - 65 tuổi</strong></li>
                <li>Thu nhập tối thiểu: <strong>≥ 7 triệu VNĐ/tháng</strong></li>
              </ul>
            </div>
            <div className="card-footer">
              <a 
                href="https://shorten.asia/eZMrBdpm" 
                rel="nofollow sponsored" 
                target="_blank" 
                className="btn"
                aria-label="Mở thẻ tín dụng VIB Bank ngay"
              >
                MỞ THẺ TÍN DỤNG NGAY
              </a>
            </div>
          </div>

          <div className="loan-card" itemScope itemType="https://schema.org/FinancialProduct">
            <span className="top-label" aria-label="Xếp hạng số 3">TOP #3</span>
            <div className="card-header">
              <Image  
                src="/the/vp.webp" 
                width={80} 
                height={80} 
                alt="Logo thẻ tín dụng VPBank - Thu nhập 4.5 triệu" 
                className="logo" 
              />
              <h2 itemProp="name">Thẻ Tín Dung VPBank</h2>
              <p className="duyet">📌 THU NHẬP THẤP NHẤT - 4.5 TRIỆU</p>
            </div>
            <div className="card-body">
              <h3>Ưu đãi nổi bật:</h3>
              <ul className="info-list" itemProp="description">
                <li><strong>Hoàn tiền đến 5%</strong> mọi giao dịch</li>
                <li><strong>Miễn phí phát hành thẻ</strong></li>
                <li>Ưu đãi <strong>trả góp 0% lãi suất</strong></li>
                <li>Độ tuổi: <strong>22 - 60 tuổi</strong></li>
                <li>Thu nhập tối thiểu chỉ: <strong>≥ 4.5 triệu VNĐ/tháng</strong></li>
              </ul>
            </div>
            <div className="card-footer">
              <a 
                href="https://shorten.asia/2BsfXPMa" 
                rel="nofollow sponsored" 
                target="_blank" 
                className="btn"
                aria-label="Mở thẻ tín dụng VPBank ngay"
              >
                MỞ THẺ TÍN DỤNG NGAY
              </a>
            </div>
          </div>

          <div className="loan-card" itemScope itemType="https://schema.org/FinancialProduct">
            <span className="top-label" aria-label="Xếp hạng số 4">TOP #4</span>
            <div className="card-header">
              <Image 
                src="/the/tp.webp" 
                width={80} 
                height={80} 
                alt="Logo thẻ tín dụng TPBank - Hoàn tiền 8%" 
                className="logo" 
              />
              <h2 itemProp="name">Thẻ Tín Dung TPBank</h2>
              <p className="duyet">📌 HOÀN TIỀN CAO NHẤT - 8%</p>
            </div>
            <div className="card-body">
              <h3>Ưu đãi nổi bật:</h3>
              <ul className="info-list" itemProp="description">
                <li><strong>Hoàn tiền đến 8%</strong> - cao nhất thị trường</li>
                <li><strong>Miễn phí thường niên năm đầu</strong></li>
                <li>Ưu đãi <strong>trả góp 0% lãi suất</strong></li>
                <li>Độ tuổi: <strong>22 - 60 tuổi</strong></li>
                <li>Thu nhập tối thiểu: <strong>≥ 7 triệu VNĐ/tháng</strong></li>
              </ul>
            </div>
            <div className="card-footer">
              <a 
                href="https://go.dinos.click/click?a=11826&o=1081" 
                rel="nofollow sponsored" 
                target="_blank" 
                className="btn"
                aria-label="Mở thẻ tín dụng TPBank ngay"
              >
               MỞ THẺ TÍN DỤNG NGAY
              </a>
            </div>
          </div>
        </section>

        <section className="comparison-section">
          <h2>So Sánh Nhanh 4 Thẻ Tín Dụng Tốt Nhất 2025</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Ngân hàng</th>
                  <th>Hoàn tiền</th>
                  <th>Thu nhập tối thiểu</th>
                  <th>Độ tuổi</th>
                  <th>Ưu điểm nổi bật</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>CAKE</strong></td>
                  <td>20%</td>
                  <td>Không yêu cầu</td>
                  <td>18-60</td>
                  <td>Mở nhanh nhất, không cần bảng lương</td>
                </tr>
                <tr>
                  <td><strong>VIB Bank</strong></td>
                  <td>6%</td>
                  <td>7 triệu VNĐ</td>
                  <td>22-65</td>
                  <td>Miễn phí thường niên trọn đời</td>
                </tr>
                <tr>
                  <td><strong>VPBank</strong></td>
                  <td>5%</td>
                  <td>4.5 triệu VNĐ</td>
                  <td>22-60</td>
                  <td>Thu nhập yêu cầu thấp nhất</td>
                </tr>
                <tr>
                  <td><strong>TPBank</strong></td>
                  <td>8%</td>
                  <td>7 triệu VNĐ</td>
                  <td>22-60</td>
                  <td>Hoàn tiền cao nhất thị trường</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="faq-section">
          <h2>Câu Hỏi Thường Gặp Về Mở Thẻ Tín Dụng Online</h2>
          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Mở thẻ tín dụng online có an toàn không?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">
                Hoàn toàn an toàn khi bạn mở thẻ tại các ngân hàng uy tín như CAKE, VIB, VPBank, TPBank. 
                Các ngân hàng này đã được Ngân hàng Nhà nước cấp phép và áp dụng công nghệ bảo mật cao.
              </p>
            </div>
          </div>
          
          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Mất bao lâu để có thẻ tín dụng sau khi đăng ký?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">
                CAKE nhanh nhất với thẻ ảo sau 2 phút, thẻ vật lý 3-5 ngày. 
                Các ngân hàng khác thường mất 5-7 ngày làm việc để giao thẻ vật lý.
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
