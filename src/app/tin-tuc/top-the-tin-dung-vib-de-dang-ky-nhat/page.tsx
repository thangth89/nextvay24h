// Gợi ý đường dẫn: /tin-tuc/mo-the-tin-dung-vib-cho-genz
// Hoặc /tin-tuc/top-the-tin-dung-vib-de-dang-ky-nhat
// Bạn cần tạo thư mục /public/images/vib/ và đặt ảnh thẻ vào đó
// Ví dụ: /public/images/vib/vib-ivy-card.webp, /public/images/vib/vib-genz-banner.webp...

import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Cập nhật ngày xuất bản và sửa đổi
const PUBLISHED_DATE = "2025-10-31T11:30:00+7:00"; 
const LAST_MODIFIED_DATE = "2025-10-31T11:30:00+07:00";
// <-- THAY URL CỦA BẠN (Rất quan trọng cho SEO)
const CANONICAL_URL = "https://vay24h.pro.vn/tin-tuc/top-the-tin-dung-vib-de-dang-ky-nhat"; 

export const metadata: Metadata = {
  // Title tối ưu cho cả GenZ (sinh viên) và người mới đi làm
  title: 'Mở Thẻ Tín Dụng VIB Cho GenZ: Top 8 Thẻ Dễ Đăng Ký Nhất 2025',
  description: 'Hướng dẫn mở thẻ tín dụng VIB cho sinh viên (VIB Ivy Card không cần thu nhập) và người mới đi làm (lương từ 7 triệu). So sánh 8 thẻ VIB dễ duyệt nhất. Đăng ký online ngay!',
  keywords: 'mở thẻ tín dụng vib cho genz, mở thẻ tín dụng vib cho sinh viên, vib ivy card, vib super card, thẻ tín dụng vib dễ đăng ký nhất, điều kiện mở thẻ vib, thẻ tín dụng vib online',
  robots: 'index, follow',
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: 'Mở Thẻ Tín Dụng VIB Cho GenZ: Top 8 Thẻ Dễ Đăng Ký Nhất 2025',
    description: 'Không cần chứng minh thu nhập (sinh viên) hoặc chỉ cần lương từ 7 triệu. Khám phá ngay VIB Ivy Card, VIB Super Card và nhận link đăng ký duyệt nhanh.',
    type: 'article',
    url: CANONICAL_URL,
    images: [
      {
        url: 'https://vay24h.pro.vn/vib/vib-genz-banner.webp', // <-- THAY ẢNH BANNER CHÍNH
        width: 1200,
        height: 630,
        alt: 'Hướng dẫn mở thẻ tín dụng VIB cho GenZ và sinh viên',
      },
    ],
  },
};

export default function MoTheTinDungVIBGenZPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mở Thẻ Tín Dụng VIB Cho GenZ: Top 8 Thẻ Dễ Đăng Ký Nhất 2025 (Cho Sinh Viên & Người Mới Đi Làm)",
    "description": "Review chi tiết 8 dòng thẻ tín dụng VIB, sắp xếp theo điều kiện đăng ký từ dễ đến khó (bắt đầu từ sinh viên không cần thu nhập). Hướng dẫn mở thẻ online và link đăng ký.",
    "author": {
      "@type": "Organization",
      "name": "Vay24h.pro.vn",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vay24h.pro.vn",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vay24h.pro.vn/logovay.webp",
      },
    },
    "datePublished": PUBLISHED_DATE,
    "dateModified": LAST_MODIFIED_DATE,
    "mainEntityOfPage": CANONICAL_URL,
    "image": {
      "@type": "ImageObject",
      "url": 'https://vay24h.pro.vn/vib/vib-genz-banner.webp', // <-- THAY ẢNH BANNER CHÍNH
      "width": 1200,
      "height": 630,
    },
  };

  // ----- Dữ liệu thẻ (Đã sắp xếp lại & trau chuốt nội dung) -----
  // Bạn chỉ cần thay link trong `affLink`
  const vibCards = [
    {
      id: 'ivy-card',
      name: '1. VIB Ivy Card (Cho Sinh Viên GenZ)',
      image: '/vib/vib-ivy-card.webp',
      alt: 'Thẻ tín dụng VIB Ivy Card cho sinh viên GenZ',
      why: 'Đây là dòng thẻ ĐẶC BIỆT, được thiết kế riêng cho GenZ đang là sinh viên năm 3, 4. Ưu điểm lớn nhất là KHÔNG CẦN CHỨNG MINH THU NHẬP. Đây là cách tốt nhất để xây dựng lịch sử tín dụng (CIC) sớm.',
      benefits: [
        'Miễn phí thường niên năm đầu.',
        'Miễn phí thường niên năm 2 nếu chi tiêu 12 triệu/năm đầu.',
        'Tích điểm 0.5% cho mọi giao dịch.',
        'Điều kiện mở thẻ linh hoạt nhất trong danh sách.',
      ],
      condition: 'Sinh viên năm 3, 4 có GPA (điểm trung bình) từ 7.0, có giấy tờ xe máy chính chủ.',
      affLink: 'https://clearpmf.com/ql?pm_cid=0255249e328041bd81e3', // <-- THAY LINK AFFILIATE
    },
    {
      id: 'super-card',
      name: '2. VIB Super Card (Linh hoạt nhất - Thu nhập 7 Triệu)',
      image: '/vib/vib-super-card.webp',
      alt: 'Thẻ tín dụng VIB Super Card tùy chọn tính năng',
      why: 'Dòng thẻ hoàn hảo cho người mới đi làm. Bạn được TOÀN QUYỀN chọn tính năng hoàn tiền hoặc tích điểm cho danh mục mình chi tiêu nhiều nhất (ví dụ: Ẩm thực, Mua sắm...).',
      benefits: [
        'Tùy chọn 1 trong 6 nhóm danh mục để nhận ưu đãi hoàn tiền/tích điểm (lên đến 10-15%).',
        'Miễn lãi suất 55 ngày.',
        'Thiết kế thẻ dọc, độc đáo, cá nhân hóa.',
      ],
      condition: 'Thu nhập trung bình tối thiểu chỉ từ 7 triệu VNĐ/tháng (chứng minh qua sao kê lương).',
      affLink: 'https://clearpmf.com/ql?pm_cid=42a0390108264b6582b3', // <-- THAY LINK AFFILIATE
    },
    {
      id: 'financial-free',
      name: '3. VIB Financial Free (Miễn lãi vượt trội - Thu nhập 7 Triệu)',
      image: '/vib/vib-financial-free.webp',
      alt: 'Thẻ tín dụng VIB Financial Free miễn lãi',
      why: 'Nếu bạn cần một chiếc thẻ để "xoay xở" tài chính ngắn hạn, đây là lựa chọn số 1. Thẻ này MIỄN LÃI 0% cho 3 kỳ sao kê đầu tiên, áp dụng cho CẢ CHI TIÊU VÀ RÚT TIỀN MẶT.',
      benefits: [
        'Miễn lãi 0% cho 3 kỳ sao kê đầu tiên (áp dụng cả rút tiền).',
        'Miễn phí thường niên năm đầu.',
        'Miễn phí thường niên các năm sau nếu chi tiêu 12 triệu/năm.',
      ],
      condition: 'Thu nhập trung bình tối thiểu chỉ từ 7 triệu VNĐ/tháng (chứng minh qua sao kê lương).',
      affLink: 'https://clearpmf.com/ql?pm_cid=82372789e5c34f39a720', // <-- THAY LINK AFFILIATE
    },
    {
      id: 'rewards-unlimited',
      name: '4. VIB Rewards Unlimited (Tích điểm mua sắm - Thu nhập 10 Triệu)',
      image: '/vib/vib-rewards-unlimited.webp',
      alt: 'Thẻ tín dụng VIB Rewards Unlimited tích điểm',
      why: 'Dành cho các tín đồ shopping đã có thu nhập ổn định hơn. Thẻ này cho phép tích điểm không giới hạn với tỷ lệ cực cao khi bạn mua sắm tại các trung tâm thương mại hoặc siêu thị.',
      benefits: [
        'Tặng điểm gấp 10 lần tại Trung tâm mua sắm & Cửa hàng miễn thuế.',
        'Tặng điểm gấp 5 lần tại Siêu thị.',
        'Tích lũy điểm không giới hạn, dễ dàng đổi thành tiền mặt, quà tặng.',
      ],
      condition: 'Thu nhập trung bình tối thiểu từ 10 triệu VNĐ/tháng.',
      affLink: 'https://clearpmf.com/ql?pm_cid=80e09143c9e7429b8148', // <-- THAY LINK AFFILIATE
    },
    {
      id: 'family-link',
      name: '5. VIB Family Link (Vì Gia Đình - Thu nhập 10-15 Triệu)',
      image: '/vib/vib-family-link.webp',
      alt: 'Thẻ tín dụng VIB Family Link cho gia đình',
      why: 'Một dòng thẻ ý nghĩa, tập trung vào chi tiêu cho gia đình, đặc biệt là giáo dục và y tế. Thẻ đi kèm các gói bảo hiểm hữu ích cho con cái và chủ thẻ.',
      benefits: [
        'Hoàn tiền đến 10% cho chi tiêu Giáo dục, Y tế, Bảo hiểm.',
        'Tặng gói bảo hiểm giáo dục cho con.',
        'Trả góp 0% cho các chi tiêu giáo dục.',
      ],
      condition: 'Thu nhập trung bình tối thiểu từ 10 - 15 triệu VNĐ/tháng.',
      affLink: 'https://clearpmf.com/ql?pm_cid=3de6d0b9324548789f1a', // <-- THAY LINK AFFILIATE
    },
    {
      id: 'cash-back',
      name: '6. VIB Cash Back (Hoàn tiền tối đa - Thu nhập 15 Triệu)',
      image: '/vib/vib-cash-back.webp',
      alt: 'Thẻ tín dụng VIB Cash Back hoàn tiền',
      why: 'Nếu bạn có mức chi tiêu cố định hàng tháng cao cho ăn uống, giải trí, đây là thẻ "vua hoàn tiền". Bạn có thể nhận lại tối đa 2 triệu VNĐ/tháng.',
      benefits: [
        'Hoàn tiền đến 10% (tối đa 2 triệu/tháng) cho các danh mục đăng ký (Ẩm thực, Giải trí...).',
        'Hoàn 0.1% cho các chi tiêu còn lại.',
        'Thời gian miễn lãi 55 ngày.',
      ],
      condition: 'Thu nhập trung bình tối thiểu từ 15 triệu VNĐ/tháng.',
      affLink: 'https://clearpmf.com/ql?pm_cid=a219e787e0ec4b558be7', // <-- THAY LINK AFFILIATE
    },
    {
      id: 'travel-elite',
      name: '7. VIB Travel Élite (Chuyên gia Du lịch - Thu nhập 20 Triệu)',
      image: '/vib/vib-travel-elite.webp',
      alt: 'Thẻ tín dụng VIB Travel Élite du lịch',
      why: 'Dành cho người thường xuyên du lịch hoặc mua sắm quốc tế. Ưu đãi lớn nhất là phí giao dịch ngoại tệ CỰC THẤP, chỉ 0% trong 3 kỳ đầu và 1% sau đó (so với 3-4% của thị trường).',
      benefits: [
        'Phí giao dịch ngoại tệ 0% (3 kỳ đầu), sau đó chỉ 1%.',
        'Miễn phí 4 lượt/năm sử dụng phòng chờ sân bay.',
        'Tích lũy dặm thưởng cho mọi chi tiêu.',
      ],
      condition: 'Thu nhập trung bình tối thiểu từ 20 triệu VNĐ/tháng.',
      affLink: 'https://clearpmf.com/ql?pm_cid=d4daa22546234c4ba37e', // <-- THAY LINK AFFILIATE
    },
    {
      id: 'premier-boundless',
      name: '8. VIB Premier Boundless (Đẳng cấp Hàng không - Thu nhập 20 Triệu)',
      image: '/vib/vib-premier-boundless.webp',
      alt: 'Thẻ tín dụng VIB Premier Boundless Vietnam Airlines',
      why: 'Thẻ đồng thương hiệu với Vietnam Airlines, là "vũ khí" tối thượng để tích lũy dặm Bông Sen Vàng (BSV) và hưởng đặc quyền bay.',
      benefits: [
        'Tự động tích lũy dặm thưởng BSV cho mọi chi tiêu.',
        'Đặc quyền nâng hạng thẻ Titan, Gold, Platinum của Vietnam Airlines.',
        'Miễn phí sử dụng phòng chờ sân bay không giới hạn.',
        'Giảm 10% số dặm khi đổi vé thưởng.',
      ],
      condition: 'Thu nhập tối thiểu 20 triệu VNĐ/tháng HOẶC là Hội viên BSV hạng Titan trở lên.',
      affLink: 'https://clearpmf.com/ql?pm_cid=5bfa37959b9747679f38', // <-- THAY LINK AFFILIATE
    },
  ];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
        <header className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mở Thẻ Tín Dụng VIB Cho GenZ: Top 8 Thẻ Dễ Đăng Ký Nhất 2025
          </h1>
          <div className="text-gray-600 text-sm mb-4">
            <time dateTime={LAST_MODIFIED_DATE}>
              Cập nhật: {new Date(LAST_MODIFIED_DATE).toLocaleDateString('vi-VN')}
            </time>
            <span className="mx-2">|</span>
            <span>Bởi: Vay24h.pro.vn</span>
          </div>
  
          <Image
            src="/vib/vib-genz-banner.webp" // <-- THAY ẢNH BANNER CHÍNH
            alt="Hướng dẫn mở thẻ tín dụng VIB cho GenZ và sinh viên"
            width={1200}
            height={630}
            className="w-full h-auto mx-auto rounded-lg shadow-md"
            priority
          />

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 text-left rounded-lg shadow-sm">
            <p className="text-lg">
              Bạn là <strong className="text-blue-700">GenZ, sinh viên năm 3, 4</strong> muốn xây dựng lịch sử tín dụng sớm? Hay bạn là <strong className="text-blue-700">người mới đi làm</strong> với mức lương khởi điểm 7-10 triệu? Thẻ tín dụng VIB có những dòng thẻ chuyên biệt, dễ đăng ký 100% online để đáp ứng mọi nhu cầu này.
            </p>
            <p className="text-lg mt-2">
              Bài viết này sẽ review 8 dòng thẻ VIB phổ biến và sắp xếp chúng theo thứ tự <strong className="text-red-700">từ dễ đăng ký nhất đến khó nhất</strong> (bắt đầu từ thẻ không cần thu nhập cho sinh viên), giúp bạn tìm được chiếc thẻ &quot;chân ái&quot; đầu đời.
            </p>
          </div>
        </header>

        <section id="loi-ich-chung" className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Vì sao GenZ nên sở hữu thẻ tín dụng càng sớm càng tốt?</h2>
          <p className="mb-4">
            Nhiều bạn trẻ e ngại &quot;nợ nần&quot;, nhưng nếu dùng đúng cách, thẻ tín dụng (credit card) là một công cụ tài chính cực kỳ thông minh:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
            <li><strong className="text-green-700">Xây dựng lịch sử tín dụng (CIC):</strong> Đây là lợi ích VÀNG. Chi tiêu và trả nợ đúng hạn giúp bạn có điểm tín dụng tốt, là chìa khóa cho các khoản vay lớn (mua nhà, mua xe) trong tương lai với lãi suất ưu đãi.</li>
            <li><strong className="text-green-700">Chi tiêu trước, trả tiền sau:</strong> Bạn được cấp một hạn mức và có thể chi tiêu ngay cả khi tài khoản 0 đồng.</li>
            <li><strong className="text-green-700">Miễn lãi lên đến 55 ngày:</strong> Bạn có gần 2 tháng để xoay xở tài chính mà không bị tính một đồng lãi nào.</li>
            <li><strong className="text-green-700">An toàn & Tiện lợi:</strong> Hạn chế dùng tiền mặt, dễ dàng thanh toán online, đặt vé, du lịch và khóa thẻ ngay khi bị mất.</li>
            <li><strong className="text-green-700">Ngập tràn ưu đãi:</strong> Hoàn tiền, tích điểm, giảm giá khi ăn uống (The Coffee House, Gong Cha...), mua sắm (Shopee, Lazada...), xem phim...</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-lg">
            <p className="font-semibold text-yellow-800 text-xl">
              Bạn là Sinh Viên hay Người Mới Đi Làm?
            </p>
            <p className="text-yellow-900 mt-1">
              Hãy bắt đầu với 2 dòng thẻ dễ duyệt nhất của VIB. Chọn thẻ phù hợp với bạn dưới đây:
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <a href="https://clearpmf.com/ql?pm_cid=0255249e328041bd81e3" // <-- THAY LINK AFFILIATE
                 target="_blank" rel="nofollow noreferrer"
                 className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Đăng ký VIB Ivy Card<br/>(Dành cho Sinh Viên)
              </a>
              <a href="https://clearpmf.com/ql?pm_cid=42a0390108264b6582b3" // <-- THAY LINK AFFILIATE
                 target="_blank" rel="nofollow noreferrer"
                 className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Đăng ký VIB Super Card<br/>(Lương từ 7 Triệu)
              </a>
            </div>
          </div>
        </section>

        <nav className="bg-gray-50 p-4 rounded-lg mb-8 shadow-sm sticky top-0 z-10">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Mục lục (Top 8 thẻ VIB từ dễ đến khó)</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-600">
            {vibCards.map((card) => (
              <li key={card.id}>
                <Link href={`#${card.id}`} className="hover:underline">{card.name}</Link>
              </li>
            ))}
            <li><Link href="#luu-y" className="hover:underline">Lưu ý vàng khi dùng thẻ (Tránh nợ xấu)</Link></li>
            <li><Link href="#faq" className="hover:underline">Câu hỏi thường gặp (FAQ)</Link></li>
          </ol>
        </nav>

        <section id="danh-sach-the" className="space-y-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Đánh giá chi tiết 8 dòng thẻ VIB (Sắp xếp từ dễ mở nhất)</h2>
          
          {/* Vòng lặp các thẻ */}
          {vibCards.map((card) => (
            <div id={card.id} key={card.id} className="pt-16 -mt-16 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-3xl font-bold text-blue-800 mb-3">{card.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Ảnh thẻ */}
                  <div className="md:col-span-1">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={400}
                      height={252}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  {/* Thông tin thẻ */}
                  <div className="md:col-span-2">
                    <p className="text-lg mb-4">{card.why}</p>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Lợi ích nổi bật:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4 pl-4 text-gray-700">
                      {card.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Điều kiện đăng ký chính:</p>
                    <p className="text-lg text-red-700 font-bold bg-red-50 p-3 rounded-md">{card.condition}</p>
                  </div>
                </div>
              </div>
              {/* Nút CTA Affiliate */}
              <div className="bg-gray-50 px-6 py-4 mt-4 text-center">
                <a 
                  href={card.affLink} // <-- LINK AFFILIATE CỦA BẠN
                  target="_blank" 
                  rel="nofollow noreferrer" 
                  className="inline-block bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105 animate-bounce"
                >
                  ĐĂNG KÝ MỞ THẺ NGAY
                </a>
              </div>
            </div>
          ))}
        </section>

        <section id="luu-y" className="mb-8 mt-12 p-6 bg-red-50 border-l-4 border-red-400 rounded-lg">
          <h2 className="text-3xl font-bold text-red-800 mb-4">Lưu ý vàng khi dùng thẻ tín dụng (Tránh nợ xấu)</h2>
          <p className="mb-3 text-lg">Thẻ tín dụng là một công cụ tài chính tuyệt vời, nhưng cũng là con dao hai lưỡi. Để tối ưu lợi ích và tránh &quot;sập bẫy&quot; nợ nần, bạn PHẢI nhớ:</p>
          <ul className="list-decimal list-inside space-y-2 text-red-900">
            <li><strong className="font-semibold">Luôn trả nợ đúng hạn:</strong> Chỉ cần trễ 1 ngày, bạn sẽ bị phạt phí trả chậm VÀ toàn bộ số tiền đã chi tiêu sẽ bị tính lãi (khoảng 30-40%/năm).</li>
            <li><strong className="font-semibold">Trả đủ 100% sao kê:</strong> Đừng bao giờ chỉ trả &quot;số tiền tối thiểu&quot;. Nếu chỉ trả tối thiểu, bạn vẫn bị tính lãi trên số tiền còn nợ.</li>
            <li><strong className="font-semibold">Không rút tiền mặt (trừ VIB Financial Free):</strong> Phí rút tiền mặt rất cao (khoảng 4%) và bị tính lãi ngay lập tức từ thời điểm rút.</li>
            <li><strong className="font-semibold">Bảo mật thẻ:</strong> Tuyệt đối không đưa số thẻ, ngày hết hạn và 3 số CVV/CVC (mặt sau thẻ) cho bất kỳ ai.</li>
          </ul>
        </section>

        <section id="faq" className="mb-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Câu hỏi thường gặp (FAQ)</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-900">1. Mở thẻ VIB Ivy Card (sinh viên) có khó không?</h3>
              <p className="mt-2 text-lg">Không khó nếu bạn đáp ứng đủ 3 điều kiện: Là sinh viên năm 3 hoặc 4, có GPA (điểm trung bình) từ 7.0 trở lên, và có giấy tờ xe máy chính chủ. Đây là cách VIB &quot;thẩm định&quot; uy tín của bạn thay vì xem xét thu nhập.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-900">2. Thu nhập 7 triệu/tháng mở thẻ nào dễ nhất?</h3>
              <p className="mt-2 text-lg">Với thu nhập 7 triệu, <strong className="text-red-700">VIB Super Card</strong> và <strong className="text-red-700">VIB Financial Free</strong> là hai lựa chọn dễ duyệt nhất. Bạn chỉ cần sao kê lương 3 tháng gần nhất qua tài khoản ngân hàng (bất kỳ) là được.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-900">3. Mở thẻ tín dụng VIB online mất bao lâu?</h3>
              <p className="mt-2 text-lg">Rất nhanh. Nếu hồ sơ của bạn đầy đủ và rõ ràng, VIB áp dụng công nghệ &quot;Big Data&quot; và &quot;AI&quot; để duyệt hồ sơ. Nhiều trường hợp thẻ được duyệt và cấp hạn mức chỉ sau 15-30 phút.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-900">4. &quot;GPA 7.0&quot; nghĩa là gì?</h3>
              <p className="mt-2 text-lg">GPA là điểm trung bình tích lũy của bạn tại trường đại học (theo thang điểm 10). Mức 7.0 tương đương với học lực Khá. Bạn cần xin bảng điểm có xác nhận của trường để chứng minh điều này khi đăng ký VIB Ivy Card.</p>
            </div>
          </div>
        </section>

        <section id="final-cta" className="mt-12 p-8 bg-gradient-to-r from-purple-700 to-blue-900 text-white rounded-lg shadow-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Bạn là Sinh Viên hay Người Mới Đi Làm?</h2>
          <p className="text-xl mb-6">
            Đừng chần chừ, hãy chọn ngay chiếc thẻ phù hợp nhất để xây dựng lịch sử tín dụng và tận hưởng ưu đãi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://clearpmf.com/ql?pm_cid=0255249e328041bd81e3" // <-- THAY LINK AFFILIATE
              target="_blank" 
              rel="nofollow noreferrer" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-purple-900 text-xl font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-110"
            >
              Đăng Ký VIB Ivy Card (Sinh Viên)
            </a>
            <a 
              href="https://clearpmf.com/ql?pm_cid=42a0390108264b6582b3" // <-- THAY LINK AFFILIATE
              target="_blank" 
              rel="nofollow noreferrer" 
              className="inline-block bg-white hover:bg-gray-100 text-blue-900 text-xl font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-110"
            >
              Đăng Ký VIB Super Card (Lương 7Tr+)
            </a>
          </div>
        </section>

      </article>
    </>
  );

}



