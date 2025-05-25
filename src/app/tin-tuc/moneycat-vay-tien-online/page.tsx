import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MoneyCat - Vay tiền online nhanh chóng, không thế chấp',
  description: 'MoneyCat là nền tảng hỗ trợ vay tiền online từ 500.000đ đến 10 triệu đồng, xét duyệt tự động, không cần gặp mặt và giải ngân nhanh trong ngày.',
  keywords: ['MoneyCat', 'vay tiền MoneyCat', 'ứng dụng MoneyCat', 'vay tiền online', 'vay nhanh không thế chấp'],
  robots: 'index, follow',
  openGraph: {
    title: 'MoneyCat - Vay tiền online nhanh chóng, không thế chấp',
    description: 'Giải pháp tài chính nhanh với MoneyCat. Hỗ trợ khoản vay linh hoạt, lãi suất minh bạch, giải ngân siêu tốc.',
    url: 'https://vay24h.pro.vn/tin-tuc/moneycat-vay-tien-online',
    type: 'article',
    images: [
      {
        url: 'https://vay24h.pro.vn/news/moneycat-vay-tien-online.webp',
        width: 1200,
        height: 630,
        alt: 'MoneyCat - Vay tiền online nhanh chóng, không thế chấp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoneyCat - Vay tiền online nhanh chóng, không thế chấp',
    description: 'MoneyCat hỗ trợ vay tiền online dễ dàng, xét duyệt tự động, giải ngân trong ngày.',
    images: ['https://vay24h.pro.vn/news/moneycat-vay-tien-online.webp'],
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'MoneyCat - Vay tiền online nhanh chóng, không thế chấp',
            description:
              'Giải pháp tài chính nhanh với MoneyCat. Hỗ trợ khoản vay linh hoạt, lãi suất minh bạch, giải ngân siêu tốc.',
            image: 'https://vay24h.pro.vn/news/moneycat-vay-tien-online.webp',
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
            datePublished: '2025-05-27',
            dateModified: '2025-05-27',
          }),
        }}
      />

      <article className="text-sm text-gray-700 leading-relaxed mt-2" style={{ color: "#4a4a4a", lineHeight: 1.6, marginTop: 8 }}>
        <h1 style={{fontSize: "28px", marginBottom: "20px", color: "#0b2239" }}>
          MoneyCat - Vay tiền online nhanh chóng, không thế chấp
        </h1>

        <p>
          Trong số các ứng dụng vay tiền online phổ biến hiện nay, <strong>MoneyCat</strong> là cái tên được nhiều khách hàng lựa chọn nhờ quy trình đăng ký đơn giản, giải ngân nhanh và điều kiện linh hoạt.
        </p>

        <Image
          loading="lazy"
          src="/news/moneycat-vay-tien-online.webp"
          alt="MoneyCat - Vay tiền online nhanh chóng, không thế chấp"
          width={800}
          height={450}
          style={{ width: '100%', height: 'auto', margin: '20px 0' }}
        />

        <h2 className="text-xl font-semibold mt-6 mb-2">MoneyCat là gì?</h2>
        <p>
          MoneyCat là nền tảng kết nối tài chính trực tuyến giúp người dùng đăng ký vay tiền mà không cần đến ngân hàng hoặc gặp mặt trực tiếp. MoneyCat không cho vay trực tiếp mà liên kết với các đối tác tài chính được cấp phép hoạt động tại Việt Nam.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Ưu điểm nổi bật của MoneyCat</h2>
        <ul className="list-disc list-inside">
          <li>Hồ sơ online, không cần gặp mặt hay ký giấy tờ</li>
          <li>Hạn mức vay từ 500.000đ đến 10.000.000đ</li>
          <li>Hỗ trợ khách hàng có thu nhập thấp hoặc tự do</li>
          <li>Xét duyệt tự động, giải ngân trong ngày</li>
          <li>Thông tin minh bạch, rõ ràng về phí và lãi</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Điều kiện vay tại MoneyCat</h2>
        <ul className="list-disc list-inside">
          <li>Công dân Việt Nam từ 20 - 60 tuổi</li>
          <li>Có CCCD/CMND còn hiệu lực</li>
          <li>Sở hữu tài khoản ngân hàng chính chủ</li>
          <li>Không có nợ xấu nhóm 3 trở lên</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Quy trình đăng ký vay</h2>
        <ol className="list-decimal list-inside">
          <li>Truy cập website MoneyCat hoặc tải ứng dụng</li>
          <li>Nhập thông tin cá nhân và lựa chọn khoản vay</li>
          <li>Chờ hệ thống tự động duyệt hồ sơ</li>
          <li>Nhận tiền về tài khoản ngân hàng</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 mb-2">MoneyCat có uy tín không?</h2>
        <p>
          MoneyCat là đối tác của các tổ chức tài chính hợp pháp tại Việt Nam. Tuy nhiên, bạn cần đọc kỹ hợp đồng, kiểm tra phí và lãi suất trước khi xác nhận vay để tránh phát sinh chi phí ngoài ý muốn.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Tổng kết</h2>
        <p>
          Với hình thức vay tiền nhanh, thủ tục online, giải ngân trong ngày, <strong>MoneyCat</strong> là lựa chọn phù hợp cho những ai cần nguồn vốn ngắn hạn gấp. Hãy cân nhắc kỹ điều khoản trước khi đăng ký để đảm bảo an toàn tài chính cho bản thân.
        </p>

        <p className="mt-4">
          Xem thêm:{' '}
          <Link
            href="/vay-tien-nhanh" className="text-blue-600 underline">
            Top 10+ ứng dụng vay tiền online uy tín nhất hiện nay
          </Link>
        </p>
      </article>
    </>
  );
}
