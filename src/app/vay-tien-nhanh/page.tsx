
import './style.css';
import Image from 'next/image';
import { Metadata } from 'next';
import AffiliateButton from '@/components/AffiliateButton';

// SEO Metadata nhẹ nhàng cho trang menu con
export const metadata: Metadata = {
  title: 'Vay Tiền Nhanh Online | Top 10 App Uy Tín - Vay24h.pro.vn',
  description: 'Danh sách 10+ app vay tiền nhanh online uy tín. Duyệt vay 15 phút, lãi suất từ 0%, chỉ cần CMND. So sánh điều kiện tốt nhất.',
  keywords: 'vay tiền nhanh, app vay tiền, vay online nhanh, vay tiền chỉ cần cmnd',
  openGraph: {
    title: 'Vay Tiền Nhanh Online - Top App Uy Tín',
    description: 'So sánh top app vay tiền nhanh, lãi suất ưu đãi, duyệt nhanh.',
    url: 'https://vay24h.pro.vn/vay-tien-nhanh',
    siteName: 'Vay24h.pro.vn',
  },
  alternates: {
    canonical: 'https://vay24h.pro.vn/vay-tien-nhanh',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org đơn giản cho trang menu
const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Vay Tiền Nhanh Online",
  "description": "Danh sách các ứng dụng vay tiền nhanh online uy tín",
  "url": "https://vay24h.pro.vn/vay-tien-nhanh",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 12,
    "name": "Top App Vay Tiền Nhanh"
  }
};

export default function VayTienNhanhPage() {
  return (
    <>
      {/* JSON-LD đơn giản */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Breadcrumb đơn giản */}
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <a href="https://vay24h.pro.vn">Trang chủ</a> › 
        <span> Vay tiền nhanh</span>
      </nav>

      {/* Header tối ưu cho trang con */}
      <header className="page-header">
        <h1 className="main-title">TOP 10 VAY TIỀN ONLINE 24/7 UY TÍN CHỈ CẦN CMND</h1>
        <p className="intro-text">
          So sánh <strong>top app vay tiền nhanh</strong> uy tín nhất hiện nay. 
          Duyệt vay trong 15 phút, lãi suất ưu đãi, không cần thế chấp.
        </p>
      </header>

      <main className="loan-list">

	<article className="loan-card">
          <span className="top-label">TOP #1</span>
          <header className="card-header">
            <Image 
              src="/vay/jeff.webp" 
              width={80} 
              height={80} 
              alt="Jeff Web app vay tiền" 
              className="logo" 
            />
            <h3>Jeff Web</h3>
            <p className="duyet">📌 DUYỆT VAY NHANH</p>
            <p className="amount">1.000.000 – 30.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li><strong>Kết nối hơn 25 đối tác</strong> cho vay</li>
              <li>Thời hạn vay: 3 – 12 tháng</li>
              <li><strong>Lãi suất: 0% khoản vay đầu</strong></li>
              <li>Độ tuổi: 22 tuổi trở lên</li>
              <li>Hồ sơ chỉ cần CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
            <AffiliateButton
                href="https://go.dinos.click/click?a=11826&o=161" 
                label="Jeff"
                ariaLabel="Vay tiền tại Jeff Web"
		position={1}
                category="referral_apps"
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>

        <article className="loan-card">
          <span className="top-label">TOP #2</span>
          <header className="card-header">
            <Image 
              src="/vay/vayvnd.webp" 
              width={80} 
              height={80} 
              alt="VayVND ứng dụng vay tiền" 
              className="logo" 
            />
            <h3>VAYVND</h3>
            <p className="duyet">📌 DUYỆT VAY NHANH</p>
            <p className="amount">500.000 – 15.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li>Thời hạn vay: 10 – 182 ngày</li>
              <li><strong>Lãi suất từ 0% – 1,5%/tháng</strong></li>
              <li>Từ 22-60 tuổi trở lên</li>
              <li>Hồ sơ chỉ cần CMND</li>
              <li><strong>Xét duyệt: 15 phút</strong></li>
            </ul>
          </div>
          <footer className="card-footer">             
            <AffiliateButton
                href="https://go.dinos.click/click?a=11826&o=277"
                label="VayVND"
                ariaLabel="Vay tiền tại VayVND"
		position={2}
                category="referral_apps"
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>

        <article className="loan-card">
          <span className="top-label">TOP #3</span>
          <header className="card-header">
            <Image 
              src="/vay/meocat.webp" 
              width={80} 
              height={80} 
              alt="MoneyCat vay tiền online" 
              className="logo" 
            />
            <h3>MONEYCAT</h3>
            <p className="duyet">📌 DUYỆT VAY NHANH</p>
            <p className="amount">500.000 – 10.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li>Thời hạn vay: 91 – 182 ngày</li>
              <li>Lãi suất: 1,0% - 1,52%/tháng</li>
              <li><strong>0% lãi suất cho khách mới</strong></li>
              <li>Độ tuổi: 22 - 60 tuổi</li>
              <li>Hồ sơ: chỉ cần CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
            <AffiliateButton
                href="https://go.dinos.click/click?a=11826&o=762"
                label="MoneyCat"
                ariaLabel="Vay tiền tại MoneyCat"
		position={3}
                category="referral_apps"		       
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>

        <article className="loan-card">
          <span className="top-label">TOP #4</span>
          <header className="card-header">
            <Image 
              src="/vay/moneyveo.webp" 
              width={80} 
              height={80} 
              alt="MoneyVeo app vay" 
              className="logo" 
            />
            <h3>MONEYVEO</h3>
            <p className="duyet">📌 TỰ ĐỘNG XEM XÉT HỒ SƠ</p>
            <p className="amount">500.000 – 25.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li>Thời hạn vay: linh động gia hạn</li>
              <li><strong>Lãi suất chỉ từ 1,52%/tháng</strong></li>
              <li>Hệ thống làm việc 24/7</li>
              <li>Độ tuổi: 22-60 tuổi</li>
              <li>Hồ sơ: chỉ cần CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
             <AffiliateButton
                href="https://go.dinos.click/click?a=11826&o=663" 
                label="MoneyVeo"
                ariaLabel="Vay tiền tại MoneyVeo"
		position={4}
                category="referral_apps"
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>

        <article className="loan-card">
          <span className="top-label">TOP #5</span>
          <header className="card-header">
            <Image 
              src="/vay/cayvang.webp" 
              width={80} 
              height={80} 
              alt="Cây Vàng vay tiền" 
              className="logo" 
            />
            <h3>CAYVANG</h3>
            <p className="duyet">📌 DUYỆT VAY NHANH</p>
            <p className="amount">500.000 – 10.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li>Thời hạn vay: theo từng gói vay</li>
              <li><strong>Lãi suất: 0% khoản vay đầu</strong></li>
              <li>Phí xử lý hồ sơ: 50.000-1.000.000</li>
              <li>Độ tuổi: 22 tuổi trở lên</li>
              <li>Hồ sơ: chỉ cần CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
             <AffiliateButton
                href="https://go.dinos.click/click?a=11826&o=935"  
                label="CayVang"
                ariaLabel="Vay tiền tại Cây Vàng"
		position={5}
                category="referral_apps"		     
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>

        <article className="loan-card">
          <span className="top-label">TOP #6</span>
          <header className="card-header">
            <Image 
              src="/vay/tinvay.webp" 
              width={80} 
              height={80} 
              alt="TinVay ứng dụng vay tiền" 
              className="logo" 
            />
            <h3>TINVAY</h3>
            <p className="duyet">📌 DUYỆT VAY NHANH</p>
            <p className="amount">5.000.000– 90.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li>Thời hạn vay: 3 – 36 tháng</li>
              <li><strong>Lãi suất: chỉ từ 1,67%/tháng</strong></li>
              <li>Xét duyệt nhanh chóng</li>
              <li>Độ tuổi: 22-60 tuổi</li>
              <li>Hồ sơ: dùng Sim Viettel và CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
            <AffiliateButton
                href="https://dinos.scaletrk.com/click?a=11826&o=769"  
                label="TinVay"
                ariaLabel="Vay tiền tại TinVay"
		position={6}
                category="referral_apps"
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>

        <article className="loan-card">
          <span className="top-label">TOP #7</span>
          <header className="card-header">
            <Image 
              src="/vay/vimayman.webp" 
              width={80} 
              height={80} 
              alt="Ví May Mắn app vay tiền" 
              className="logo" 
            />
            <h3>Ví May Mắn</h3>
            <p className="duyet">📌 DUYỆT VAY NHANH</p>
            <p className="amount">1.000.000– 30.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li>Thời hạn vay: 91 - 180 ngày</li>
              <li><strong>Lãi suất: từ 1,25%/tháng</strong></li>
              <li>Xét duyệt nhanh</li>
              <li>Độ tuổi: 22 - 60 tuổi</li>
              <li>Hồ sơ: chỉ cần CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
            <AffiliateButton
                href="https://adpvn.top/7Xwi"
                label="ViMayMan"
                ariaLabel="Vay tiền tại Ví May Mắn"
		position={7}
                category="referral_apps"
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>

        <article className="loan-card">
          <span className="top-label">TOP #8</span>
          <header className="card-header">
            <Image
              src="/vay/dong247.webp" 
              width={80} 
              height={80} 
              alt="Dong247 vay tiền nhanh" 
              className="logo" 
            />
            <h3>dong247</h3>
            <p className="duyet">📌 DUYỆT VAY NHANH</p>
            <p className="amount">500.000 – 30.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li>Thời hạn vay: 91 – 120 ngày</li>
              <li><strong>Lãi suất: 0% - 1,25%/tháng</strong></li>
              <li>Kết nối hơn 25 đối tác cho vay</li>
              <li>Độ tuổi: 22 tuổi trở lên</li>
              <li>Hồ sơ chỉ cần CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
            <AffiliateButton
                href="https://go.dinos.click/click?a=11826&o=302" 
                label="Dong247"
                ariaLabel="Vay tiền tại Dong247"
		position={8}
                category="referral_apps"
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>

        <article className="loan-card">
          <span className="top-label">TOP #9</span>
          <header className="card-header">
            <Image 
              src="/vay/finapps.webp" 
              width={80} 
              height={80} 
              alt="FinApps ứng dụng vay tiền" 
              className="logo" 
            />
            <h3>FinApps</h3>
            <p className="duyet">📌 DUYỆT VAY NHANH</p>
            <p className="amount">300.000 – 20.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li>Thời hạn vay: 3 – 12 tháng</li>
              <li><strong>Lãi suất: 0% khoản vay đầu</strong></li>
              <li>Xử lý hồ sơ 24/7</li>
              <li>Độ tuổi: 22 tuổi trở lên</li>
              <li>Hồ sơ: chỉ cần CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
            <AffiliateButton
                href="https://go.dinos.click/click?a=11826&o=821" 
                label="FinApps"
                ariaLabel="Vay tiền tại FinApps"
		position={9}
                category="referral_apps"
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>

        <article className="loan-card">
          <span className="top-label">TOP #10</span>
          <header className="card-header">
            <Image  
              src="/vay/visame.webp" 
              width={80} 
              height={80} 
              alt="ViSame app vay tiền online" 
              className="logo" 
            />
            <h3>VISAME</h3>
            <p className="duyet">📌 DUYỆT VAY NHANH</p>
            <p className="amount">1.000.000 – 15.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li>Thời hạn vay: 3 – 24 tháng</li>
              <li><strong>Lãi suất: 0% - 1,67%/tháng</strong></li>
              <li>Hoạt động 24/7</li>
              <li>Độ tuổi: 22-60 tuổi</li>
              <li>Hồ sơ: chỉ cần CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
            <AffiliateButton
                href="https://adpvn.top/pDUW"
                label="ViSame"
                ariaLabel="Vay tiền tại ViSame"
		position={10}
                category="referral_apps"
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>

        <article className="loan-card">
          <span className="top-label">NEW</span>
          <header className="card-header">
            <Image 
              src="/vay/finami.webp"  
              width={80} 
              height={80} 
              alt="Finami vay tiền bao nợ xấu" 
              className="logo" 
            />
            <h3>Finami</h3>
            <p className="duyet">📌 BAO NỢ XẤU</p>
            <p className="amount">500.000 – 10.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li>Thời hạn vay: 1 – 12 tháng</li>
              <li><strong>Lãi suất: 0% nếu trả ngày đầu</strong></li>
              <li>Hoạt động 24/7</li>
              <li>Độ tuổi: 22 - 60 tuổi</li>
              <li>Hồ sơ: chỉ cần CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
             <AffiliateButton
                href="https://go.dinos.click/click?a=11826&o=683" 
                label="Finami"
                ariaLabel="Vay tiền tại Finami"
		position={11}
                category="referral_apps"		     
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>
	      
	<article className="loan-card">
          <span className="top-label">NEW</span>
          <header className="card-header">
            <Image 
              src="/vay/credityes.webp" 
              width={80} 
              height={80} 
              alt="CreditYes vay tiền nhanh" 
              className="logo" 
            />
            <h3>CREDITYES</h3>
            <p className="duyet">📌 DUYỆT VAY NHANH</p>
            <p className="amount">100.000 – 20.000.000</p>
          </header>
          <div className="card-body">
            <ul className="info-list">
              <li><strong>Không chứng minh thu nhập</strong></li>
              <li>Thời hạn vay: 1 – 365 ngày</li>
              <li><strong>Lãi suất: 0.01%/tháng</strong></li>
              <li>Độ tuổi: 22 -60 tuổi</li>
              <li>Hồ sơ chỉ cần CMND</li>
            </ul>
          </div>
          <footer className="card-footer">
             <AffiliateButton
                href="https://go.dinos.click/click?a=11826&o=1085"
                label="CreditYes"
                ariaLabel="Vay tiền tại CreditYes"
		position={12}
                category="referral_apps"
              >
                VAY ONLINE NGAY
            </AffiliateButton>
          </footer>
        </article>
      </main>
        {/* Call-to-action cuối trang */}
        <section className="page-cta">
          <h2>Lựa Chọn App Vay Tiền Phù Hợp</h2>
          <p>
            Tất cả <strong>app vay tiền online</strong> trên đều đã được kiểm duyệt về độ uy tín. 
            Hãy so sánh lãi suất, điều kiện vay và chọn ứng dụng phù hợp nhất với nhu cầu của bạn.
          </p>
          <p className="note">
            💡 <em>Lưu ý: Vay tiền cần cân nhắc khả năng trả nợ. Chỉ vay khi thật sự cần thiết.</em>
          </p>
        </section>
         <section className="nhom-zalo">
          <p><strong>Hãy tham gia nhóm zalo của vay24h.pro.vn để cập nhật những thông tin mới nhất về vay tiền online (cập nhật, hướng dẫn,mẹo ...)</strong></p>
	<Image
          src="/news/zalo.webp"
          alt="nhóm zalo vay tiền online"
          width={800}
          height={450}
          className="w-full h-auto mx-auto rounded-lg shadow-md my-4"
        />
	</section>
    </>
  );
}
