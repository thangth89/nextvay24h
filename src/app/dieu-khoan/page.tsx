

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng – vay24h.pro.vn",
  description:
    "Vui lòng đọc kỹ điều khoản sử dụng trước khi truy cập và sử dụng dịch vụ vay tài chính tại vay24h.pro.vn. Cam kết tuân thủ pháp luật và bảo mật thông tin.",
};

export default function TermsPage() {
  return (
 <div className="text-sm text-gray-700 leading-relaxed mt-2" style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.6, marginTop: 8 }}>
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-6">
        Điều khoản sử dụng – Vay24h.pro.vn
      </h1>

      <section id="intro" className="mb-6">
        <p className="leading-relaxed">
          Chào mừng bạn đến với <strong>vay24h.pro.vn</strong> – cổng thông tin tổng hợp vay tiền online uy tín
          và mở thẻ tín dụng miễn phí tại Việt Nam. Trước khi sử dụng, vui lòng đọc kỹ các{" "}
          <em>Điều khoản sử dụng</em> dưới đây. Việc bạn tiếp tục truy cập hoặc sử dụng dịch vụ đồng nghĩa với
          việc bạn đã hiểu rõ và đồng ý tuân thủ toàn bộ quy định.
        </p>
      </section>

      <section id="pham-vi" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Phạm vi áp dụng</h2>
        <p className="leading-relaxed">
          Áp dụng cho tất cả cá nhân, tổ chức truy cập và sử dụng dịch vụ tư vấn vay vốn, so sánh lãi suất và
          mở thẻ tín dụng trên Vay24h.pro.vn. Mọi nội dung trên website đều tuân thủ pháp luật Việt Nam và
          thuần phong mỹ tục.
        </p>
      </section>

      <section id="quyen-nghia-vu" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Quyền và nghĩa vụ người dùng</h2>
        <p className="font-semibold">Quyền của bạn:</p>
        <ul className="list-disc list-inside mb-2">
          <li>Truy cập, so sánh lãi suất vay tín chấp, vay mua nhà, vay mua xe.</li>
          <li>Mở thẻ tín dụng miễn phí và nhận tư vấn chuyên sâu.</li>
        </ul>
        <p className="font-semibold">Nghĩa vụ của bạn:</p>
        <ul className="list-disc list-inside">
          <li>Cung cấp thông tin cá nhân chính xác, đầy đủ và cập nhật.</li>
          <li>Bảo mật tài khoản và không chia sẻ cho bên thứ ba.</li>
          <li>Tuân thủ quy định pháp luật và chuẩn mực đạo đức khi sử dụng dịch vụ.</li>
        </ul>
      </section>

      <section id="quyen-vay24h" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Quyền của vay24h.pro.vn</h2>
        <ul className="list-disc list-inside">
          <li>Thay đổi, bổ sung hoặc ngưng cung cấp dịch vụ mà không cần báo trước.</li>
          <li>Vô hiệu hóa tài khoản, tên đăng nhập hoặc mật khẩu khi phát hiện vi phạm.</li>
          <li>Loại bỏ, chỉnh sửa hoặc từ chối đăng tải nội dung không phù hợp.</li>
        </ul>
      </section>

      <section id="so-huu-tri-tue" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Sở hữu trí tuệ</h2>
        <p className="leading-relaxed">
          Toàn bộ nội dung, hình ảnh, dữ liệu trên Vay24h.pro.vn là tài sản bản quyền của chúng tôi. Bạn chỉ
          được phép sử dụng cho mục đích cá nhân, không thương mại và không được sao chép, phân phối hay tái
          xuất bản dưới mọi hình thức khi chưa có sự cho phép.
        </p>
      </section>

      <section id="mien-tru-phap-ly" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Từ chối trách nhiệm & Miễn trừ bảo đảm</h2>
        <p className="leading-relaxed">
          Vay24h.pro.vn không trực tiếp cho vay mà chỉ kết nối người dùng với đối tác ngân hàng và công ty tài
          chính đã thẩm định. Chúng tôi không chịu trách nhiệm về mọi rủi ro hoặc khiếu nại phát sinh do quyết
          định vay vốn hoặc mở thẻ tín dụng của bạn.
        </p>
      </section>

      <section id="giai-quyet-tranh-chap" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Giải quyết tranh chấp</h2>
        <p className="leading-relaxed">
          Mọi tranh chấp liên quan đến Điều khoản sử dụng này sẽ được giải quyết theo pháp luật Việt Nam và tại
          tòa án có thẩm quyền.
        </p>
      </section>

      <section id="cap-nhat" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Cập nhật điều khoản</h2>
        <p className="leading-relaxed">
          vay24h.pro.vn có thể cập nhật Điều khoản sử dụng theo từng thời kỳ. Mỗi thay đổi sẽ được công bố tại
          trang này; việc bạn tiếp tục sử dụng dịch vụ đồng nghĩa với việc bạn chấp thuận điều khoản mới.
        </p>
      </section>
    </article>
 </div>
  );
}
