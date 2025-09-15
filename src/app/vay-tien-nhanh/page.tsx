
import './style.css';
import Image from 'next/image';
import { Metadata } from 'next';
import { loanApps } from '@/data/loanData';
import { additionalLoanApps} from '@/data/additionalLoanData';
import LoanCard from '@/components/LoanCard';
import AdditionalLoanCard from '@/components/AdditionalLoanCard';


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
  {loanApps.map((app, index) => (
    <LoanCard
      key={index}
      topLabel={app.topLabel}
      imageSrc={app.imageSrc}
      altText={app.altText}
      title={app.title}
      duyetText={app.duyetText}
      amount={app.amount}
      features={app.features}
      affiliateLink={app.affiliateLink}
      position={index + 1}
      label={app.label}
    />
  ))}
</main>
  {/* Section divider */}
      <section className="section-divider">
        <h2 className="main-title">🔥 CÁC ỨNG DỤNG/ WEB CHỈ CHẤP NHẬN ĐĂNG KÍ BẰNG ĐIỆN THOẠI</h2>
        <p className="intro-text">
          Bên dưới là các đơn vị chỉ chấp nhận đăng kí bằng điện thoại, nếu truy cập từ máy tính sẽ không đăng kí được. Chú ý đối với các đơn vị này sẽ bị <strong>mất phí dịch vụ</strong> khi vay. Cụ thể phí khi vay sẽ thông báo cho bạn biết.
        </p>
      </section>
	  
      <section className="loan-list">
        {additionalLoanApps.map((app, index) => (
          <AdditionalLoanCard
 	    key={index}
      	    topLabel={app.topLabel}
            imageSrc={app.imageSrc}
            altText={app.altText}
            title={app.title}
            duyetText={app.duyetText}
            amount={app.amount}
            features={app.features}
            affiliateLink={app.affiliateLink}
            position={index + 1}
            label={app.label}
            />
         ))}
      </section> 
	

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
