import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Finami - Ứng dụng vay tiền nhanh, tiện lợi và minh bạch',
  description: 'Finami là nền tảng kết nối tài chính, giúp người dùng tiếp cận khoản vay nhanh chóng từ 500.000đ đến 10 triệu đồng. Đăng ký đơn giản, duyệt nhanh và giải ngân trong ngày.',
  keywords: ['Finami', 'vay tiền Finami', 'ứng dụng Finami', 'vay tiền online', 'vay nhanh', 'vay tiện lợi'],
  robots: 'index, follow',
  openGraph: {
    title: 'Finami - Ứng dụng vay tiền nhanh, tiện lợi và minh bạch',
    description: 'Ứng dụng Finami hỗ trợ vay tiền online an toàn, nhanh chóng với thủ tục đơn giản và đối tác uy tín.',
    url: 'https://vay24h.pro.vn/tin-tuc/finami-vay-tien-online',
    type: 'article',
    images: [
      {
        url: 'https://vay24h.pro.vn/news/finami-vay-tien-online.webp',
        width: 1200,
        height: 630,
        alt: 'Finami - Ứng dụng vay tiền nhanh, tiện lợi và minh bạch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finami - Ứng dụng vay tiền nhanh, tiện lợi và minh bạch',
    description: 'Tìm hiểu về Finami - ứng dụng hỗ trợ vay tiền online đáng tin cậy với thủ tục đơn giản, xét duyệt tự động và giải ngân siêu tốc.',
    images: ['https://vay24h.pro.vn/news/finami-vay-tien-online.webp'],
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Finami - Ứng dụng vay tiền nhanh, tiện lợi và minh bạch',
            description: 'Ứng dụng Finami hỗ trợ vay tiền online an toàn, nhanh chóng với thủ tục đơn giản và đối tác uy tín.',
            image: 'https://vay24h.pro.vn/news/finami-vay-tien-online.webp',
            author: {
              '@type': 'Organization',
              name: 'Vay24h Pro',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Vay24h Pro',
              logo: {
                '@type': 'ImageObject',
                url: 'https://vay24h.pro.vn/logovay.webp',
              },
            },
            datePublished: '2025-05-26',
            dateModified: '2025-05-26',
          }),
        }}
      />
    <div style={{ display: "flex", gap: "20px", maxWidth: "1200px", margin: "0 auto", padding: "20px",backgroundColor: "#fff", borderRadius: "8px" }}>
      <article style={{ color: "#4a4a4a", lineHeight: 1.6, marginTop: 8 }}>
        <h1 style={{fontSize: "28px", marginBottom: "20px", color: "#0b2239" }}>
          Finami - Ứng dụng vay tiền nhanh, tiện lợi và minh bạch
        </h1>

        <p>
          Trong thời buổi công nghệ phát triển, các ứng dụng vay tiền trực tuyến như <strong>Finami</strong> ngày càng được nhiều người tin tưởng và sử dụng. Với quy trình đăng ký đơn giản, duyệt vay nhanh và giải ngân siêu tốc, Finami là giải pháp tài chính linh hoạt cho mọi người.
        </p>

        <Image
          src="/news/finami-vay-tien-online.webp"
          alt="Finami - Ứng dụng vay tiền nhanh, tiện lợi và minh bạch"
          width={800}
          height={450}
          style={{ width: '100%', height: 'auto', margin: '20px 0' }}
        />

        <h2 className="text-xl font-semibold mt-6 mb-2">Finami là gì?</h2>
        <p>
          Finami là một nền tảng trung gian hỗ trợ người dùng tiếp cận các khoản vay ngắn hạn từ các đối tác tài chính uy tín. Finami không trực tiếp cho vay mà đóng vai trò cầu nối giữa khách hàng và tổ chức tài chính.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Ưu điểm khi sử dụng Finami</h2>
        <ul className="list-disc list-inside">
          <li>Vay tiền hoàn toàn online, không cần gặp mặt</li>
          <li>Hạn mức từ 500.000đ đến 10.000.000đ</li>
          <li>Giải ngân nhanh, có thể trong vòng 30 phút</li>
          <li>Không yêu cầu thế chấp hay bảo lãnh</li>
          <li>Đối tác rõ ràng, lãi suất minh bạch</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Điều kiện vay tiền qua Finami</h2>
        <ul className="list-disc list-inside">
          <li>Công dân Việt Nam từ 20 đến 60 tuổi</li>
          <li>Có CCCD/CMND còn hiệu lực</li>
          <li>Sở hữu tài khoản ngân hàng chính chủ</li>
          <li>Có khả năng thanh toán khoản vay đúng hạn</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Cách đăng ký vay tại Finami</h2>
        <ol className="list-decimal list-inside">
          <li>Truy cập website chính thức của Finami</li>
          <li>Chọn khoản vay phù hợp và điền thông tin cá nhân</li>
          <li>Hệ thống tự động xét duyệt trong vài phút</li>
          <li>Nhận tiền giải ngân vào tài khoản ngân hàng</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 mb-2">Finami có uy tín không?</h2>
        <p>
          Finami chỉ hợp tác với các tổ chức tài chính được cấp phép, minh bạch về điều khoản vay. Người dùng cần đọc kỹ thông tin về lãi suất, phí và thời hạn trả trước khi đăng ký khoản vay.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Tổng kết</h2>
        <p>
          Nếu bạn cần vay tiền gấp mà không muốn làm thủ tục phức tạp, <strong>Finami</strong> là một lựa chọn đáng để cân nhắc. Nhanh chóng, tiện lợi và minh bạch chính là ưu điểm nổi bật mà nền tảng này mang lại.
        </p>

        <p className="mt-4">
          Xem thêm:{' '}
          <Link href="/vay-tien-nhanh" className="text-blue-600 underline">
            Top 10+ ứng dụng vay tiền online uy tín hiện nay
          </Link>
        </p>
      </article>
     </div>
    </>
  );
}
