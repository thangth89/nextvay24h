import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Cập nhật ngày xuất bản thực tế
const PUBLISHED_DATE = "2025-09-03T10:45:00+07:00"; 
// Cập nhật ngày sửa đổi cuối cùng
const LAST_MODIFIED_DATE = "2025-09-03T10:55:00+07:00"; 

export const metadata: Metadata = {
  title: 'Hướng dẫn vay tiền Jeff.vn: Đơn vị trung gian, so sánh khoản vay',
  description: 'Hướng dẫn chi tiết cách sử dụng Jeff.vn để so sánh và tìm kiếm khoản vay phù hợp với nhu cầu. Jeff.vn là đơn vị trung gian, giúp bạn tiết kiệm thời gian và tăng tỷ lệ duyệt hồ sơ.',
  keywords: 'Jeff.vn, vay tiền Jeff, so sánh khoản vay, vay tiền online, đơn vị trung gian tài chính, hướng dẫn vay tiền, Jeff.vn là gì',
  openGraph: {
    title: 'Hướng dẫn vay tiền Jeff.vn: Đơn vị trung gian, so sánh khoản vay',
    description: 'Tìm hiểu cách sử dụng Jeff.vn - nền tảng so sánh tài chính uy tín, để tìm ra các đơn vị cho vay tốt nhất, phù hợp nhất với bạn.',
    type: 'article',
    url: 'https://vay24h.pro.vn/tin-tuc/huong-dan-vay-tien-jeff', // Cập nhật URL chính xác
    images: [
      {
        url: 'https://vay24h.pro.vn/news/jeff-banner.webp', // Thay thế bằng hình ảnh phù hợp
        width: 800,
        height: 450,
        alt: 'Jeff.vn - Hướng dẫn so sánh khoản vay',
      },
    ],
  },
};

export default function JeffGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hướng dẫn vay tiền Jeff.vn: Đơn vị trung gian, so sánh khoản vay",
    description: "Hướng dẫn chi tiết cách sử dụng Jeff.vn để so sánh và tìm kiếm khoản vay phù hợp với nhu cầu. Jeff.vn là đơn vị trung gian, giúp bạn tiết kiệm thời gian và tăng tỷ lệ duyệt hồ sơ.",
    author: {
      "@type": "Organization",
      name: "Vay24h.pro.vn",
    },
    publisher: {
      "@type": "Organization",
      name: "Vay24h.pro.vn",
      logo: {
        "@type": "ImageObject",
        url: "https://vay24h.pro.vn/logovay.webp",
      },
    },
    datePublished: PUBLISHED_DATE,
    dateModified: LAST_MODIFIED_DATE,
    mainEntityOfPage: "https://vay24h.pro.vn/tin-tuc/huong-dan-vay-tien-jeff", // Cập nhật URL chính xác
    image: {
      "@type": "ImageObject",
      url: '/news/jeff-banner.webp', // Thay thế bằng hình ảnh phù hợp
      width: 800,
      height: 450,
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8 text-gray-700 leading-relaxed">
        <header className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hướng dẫn sử dụng Jeff.vn để tìm khoản vay phù hợp
          </h1>
          <div className="text-gray-600 text-sm mb-4">
            <time dateTime={LAST_MODIFIED_DATE}>
              Cập nhật: {new Date(LAST_MODIFIED_DATE).toLocaleDateString('vi-VN')}
            </time>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 text-left rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-blue-800 mb-2">Lời giới thiệu:</p>
            <p>
              Jeff.vn là một nền tảng công nghệ tài chính, hoạt động như một <strong className="text-blue-700">đơn vị trung gian</strong>, kết nối người có nhu cầu vay với các tổ chức cho vay uy tín. Điều đặc biệt là <strong className="text-red-700">Jeff không trực tiếp cho vay</strong>, mà chỉ giúp bạn tìm ra đơn vị phù hợp với hồ sơ của mình, tiết kiệm thời gian và tăng tỷ lệ duyệt hồ sơ.
            </p>
          </div>
        </header>

        <nav className="bg-gray-50 p-4 rounded-lg mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Mục lục</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-600">
            <li><Link href="#buoc1" className="hover:underline">Bước 1: Chọn khoản vay và thời hạn vay</Link></li>
            <li><Link href="#buoc2" className="hover:underline">Bước 2: Đăng ký tài khoản</Link></li>
            <li><Link href="#buoc3" className="hover:underline">Bước 3: Nhập thông tin cá nhân</Link></li>
            <li><Link href="#buoc4" className="hover:underline">Bước 4: Điền thông tin địa chỉ</Link></li>
            <li><Link href="#buoc5" className="hover:underline">Bước 5: Nhập thông tin công việc</Link></li>
            <li><Link href="#buoc6" className="hover:underline">Bước 6: Nhập thông tin Căn Cước Công Dân</Link></li>
            <li><Link href="#buoc7" className="hover:underline">Bước 7: Trả lời một số khảo sát</Link></li>
            <li><Link href="#buoc8" className="hover:underline">Bước 8: Nhận kết quả từ Jeff</Link></li>
            <li><Link href="#buoc9" className="hover:underline">Bước 9: Đăng ký vay chính thức</Link></li>
          </ol>
        </nav>

        <section id="huong-dan-chi-tiet" className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Hướng dẫn các bước vay tiền trên Jeff.vn</h2>
          
          <h3 id="buoc1" className="text-2xl font-semibold text-gray-800 mb-2">Bước 1: Chọn khoản vay và thời hạn</h3>
          <p className="mb-4">
            Đầu tiên, chọn khoản vay và thời hạn vay phù hợp với nhu cầu của mình, sau đó bấm vào nút <strong className="text-purple-700">So sánh ngay</strong>.
          </p>
          <div className="mt-4 text-center">
            {/* Vui lòng chèn ảnh minh họa cho bước 1 */}
            <Image src="/news/jeff-buoc1.webp" alt="Ảnh minh họa bước 1: Chọn khoản vay Jeff.vn" width={800} height={450} className="w-full h-auto rounded-lg shadow-md" />
          </div>

          <h3 id="buoc2" className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Bước 2: Đăng ký tài khoản</h3>
          <p className="mb-4">
            Bạn cần nhập số điện thoại đang dùng chính chủ và địa chỉ email còn hoạt động để đăng ký tài khoản.
          </p>
          <div className="mt-4 text-center">
            {/* Vui lòng chèn ảnh minh họa cho bước 2 */}
            <Image src="/news/jeff-buoc2.webp" alt="Ảnh minh họa bước 2: Đăng ký tài khoản Jeff.vn" width={800} height={450} className="w-full h-auto rounded-lg shadow-md" />
          </div>

          <h3 id="buoc3" className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Bước 3: Nhập thông tin cá nhân</h3>
          <p className="mb-4">
            Điền các thông tin cá nhân cơ bản như họ tên, ngày sinh, giới tính.
          </p>
          <div className="mt-4 text-center">
            {/* Vui lòng chèn ảnh minh họa cho bước 3 */}
            <Image src="/news/jeff-buoc3.webp" alt="Ảnh minh họa bước 3: Nhập thông tin cá nhân" width={800} height={450} className="w-full h-auto rounded-lg shadow-md" />
          </div>

          <h3 id="buoc4" className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Bước 4: Điền thông tin địa chỉ</h3>
          <p className="mb-4">
            Nhập chính xác địa chỉ thường trú giống như trên Căn Cước Công Dân của bạn.
          </p>
          <div className="mt-4 text-center">
            {/* Vui lòng chèn ảnh minh họa cho bước 4 */}
            <Image src="/news/jeff-buoc4.webp" alt="Ảnh minh họa bước 4: Điền thông tin địa chỉ" width={800} height={450} className="w-full h-auto rounded-lg shadow-md" />
          </div>

          <h3 id="buoc5" className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Bước 5: Nhập thông tin công việc</h3>
          <p className="mb-4">
            Đây là bước quan trọng để Jeff tìm kiếm các đối tác phù hợp. Hãy nhập chính xác thông tin công việc hiện tại.
            <br />
            <strong className="text-red-700">Lời khuyên:</strong> Nếu bạn chưa có công việc ổn định, có thể tạm điền là <strong className="text-purple-700">công nhân</strong> hoặc <strong className="text-purple-700">nhân viên văn phòng</strong>, mức lương từ 8-9 triệu đồng, đảm bảo trong khả năng trả nợ của bạn.
          </p>
          <div className="mt-4 text-center">
            {/* Vui lòng chèn ảnh minh họa cho bước 5 */}
            <Image src="/news/jeff-buoc5.webp" alt="Ảnh minh họa bước 5: Nhập thông tin công việc" width={800} height={450} className="w-full h-auto rounded-lg shadow-md" />
          </div>

          <h3 id="buoc6" className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Bước 6: Nhập thông tin Căn Cước Công Dân</h3>
          <p className="mb-4">
            Nhập thật chính xác số Căn Cước Công Dân và ngày cấp trên thẻ của bạn.
          </p>
          <div className="mt-4 text-center">
            {/* Vui lòng chèn ảnh minh họa cho bước 6 */}
            <Image src="/news/jeff-buoc6.webp" alt="Ảnh minh họa bước 6: Nhập thông tin Căn Cước Công Dân" width={800} height={450} className="w-full h-auto rounded-lg shadow-md" />
          </div>

          <h3 id="buoc7" className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Bước 7: Trả lời một số khảo sát</h3>
          <p className="mb-4">
            Trả lời các câu hỏi khảo sát một cách trung thực. Điều này giúp Jeff.vn sàng lọc và tìm được những đơn vị cho vay phù hợp nhất với bạn.
          </p>
          <div className="mt-4 text-center">
            {/* Vui lòng chèn ảnh minh họa cho bước 7 */}
            <Image src="/news/jeff-buoc7.webp" alt="Ảnh minh họa bước 7: Trả lời khảo sát" width={800} height={450} className="w-full h-auto rounded-lg shadow-md" />
          </div>

          <h3 id="buoc8" className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Bước 8: Jeff trả kết quả cho bạn</h3>
          <p className="mb-4">
            Sau khi hoàn tất, Jeff sẽ trả kết quả là danh sách các đơn vị cho vay phù hợp, có tỷ lệ duyệt hồ sơ cao nhất. Như hình dưới, Jeff đưa ra 4 gợi ý tốt nhất cho bạn.
          </p>
          <div className="mt-4 text-center">
            {/* Vui lòng chèn ảnh minh họa cho bước 8 */}
            <Image src="/news/jeff-buoc8.webp" alt="Ảnh minh họa bước 8: Kết quả từ Jeff.vn" width={800} height={450} className="w-full h-auto rounded-lg shadow-md" />
          </div>
          
          <h3 id="buoc9" className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Bước 9: Đăng ký vay chính thức</h3>
          <p className="mb-4">
            Sau khi Jeff trả kết quả, bạn chọn một hoặc nhiều đơn vị để <strong className="text-blue-700">đăng ký vay chính thức</strong>. Khi bấm vào, Jeff sẽ đưa bạn đến trang web của đơn vị cho vay đó. Lúc này, bạn sẽ phải nhập lại các thông tin cá nhân.
            <br />
            <strong className="text-red-700">Lưu ý:</strong> Việc nhập lại thông tin là bước đăng ký vay chính thức với đơn vị cho vay bạn đã chọn. Các bước trước chỉ là để Jeff giúp bạn tìm kiếm và sàng lọc các đơn vị phù hợp.
          </p>
        </section>

        <section id="loi-khuyen" className="mb-8 p-6 bg-teal-50 border-l-4 border-teal-400 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Lời khuyên để tăng tỉ lệ duyệt hồ sơ</h2>
          <p className="mb-4">
            Theo kinh nghiệm, bạn nên <strong className="text-teal-700">đăng ký tất cả các gợi ý mà Jeff đưa ra</strong>. Điều này sẽ giúp bạn tăng tỷ lệ duyệt hồ sơ lên mức cao nhất, vì mỗi đơn vị có thể có các tiêu chí xét duyệt khác nhau.
          </p>
          <div className="mt-8 text-center">
            <a href="https://riofin.asia/moVpO20" target="_blank" rel="nofollow noreferrer" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-75 animate-bounce">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              Bắt đầu so sánh khoản vay trên Jeff.vn
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
