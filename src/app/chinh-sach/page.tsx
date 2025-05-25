

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách bảo mật – vay24h.pro.vn",
  description:
    "Tìm hiểu cách vay24h.pro.vn thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn. Cam kết minh bạch, an toàn và tuân thủ pháp luật Việt Nam.",
};

export default function PrivacyPolicyPage() {
  return (
 <div className="text-sm text-gray-700 leading-relaxed mt-2" style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.6, marginTop: 8 }}>
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-6">
        Chính sách bảo mật – vay24h.pro.vn
      </h1>

      <section className="mb-6">
        <p className="leading-relaxed">
          Tại <strong>vay24h.pro.vn</strong>, chúng tôi cam kết cung cấp các giải pháp tài chính an toàn,
          minh bạch và uy tín. Việc bảo vệ <strong>thông tin cá nhân</strong> của khách hàng là một phần quan
          trọng trong cam kết của chúng tôi.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Mục đích thu thập thông tin</h2>
        <ul className="list-disc list-inside leading-relaxed">
          <li>Cung cấp dịch vụ và hỗ trợ tài chính phù hợp.</li>
          <li>Cải thiện trải nghiệm người dùng.</li>
          <li>Tư vấn sản phẩm, gửi ưu đãi, chăm sóc khách hàng.</li>
          <li>Tuân thủ quy định của pháp luật Việt Nam.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Phạm vi thu thập thông tin</h2>
        <ul className="list-disc list-inside leading-relaxed">
          <li>Họ tên, email, số điện thoại, địa chỉ liên hệ.</li>
          <li>Thông tin giao dịch tài chính và nhu cầu vay vốn.</li>
          <li>Thông tin thiết bị: địa chỉ IP, loại trình duyệt, thời gian truy cập, v.v.</li>
        </ul>
        <p className="mt-2">Mọi thông tin chỉ được thu thập khi có sự đồng ý hoặc theo quy định pháp luật.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Sử dụng thông tin cá nhân</h2>
        <ul className="list-disc list-inside leading-relaxed">
          <li>Cung cấp dịch vụ tài chính, kết nối với đối tác ngân hàng.</li>
          <li>Gửi thông báo, chương trình ưu đãi hoặc khuyến mãi nếu khách hàng đã đồng ý nhận.</li>
          <li>Chia sẻ với bên thứ ba trong phạm vi cần thiết để thực hiện dịch vụ.</li>
        </ul>
        <p className="mt-2">
          Chúng tôi cam kết không sử dụng thông tin vào mục đích trái pháp luật hoặc chia sẻ không đúng cam
          kết.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Bảo mật và lưu trữ thông tin</h2>
        <ul className="list-disc list-inside leading-relaxed">
          <li>Mã hóa dữ liệu và kiểm soát truy cập.</li>
          <li>Lưu trữ trong hệ thống nội bộ hoặc đối tác đáng tin cậy.</li>
          <li>Xoá bỏ thông tin khi không còn cần thiết hoặc theo yêu cầu của pháp luật.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Quyền của khách hàng</h2>
        <ul className="list-disc list-inside leading-relaxed">
          <li>Yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân.</li>
          <li>Từ chối nhận thông tin quảng cáo bất kỳ lúc nào.</li>
          <li>Nhận thông tin về việc sử dụng dữ liệu cá nhân theo yêu cầu.</li>
        </ul>
        <p className="mt-2">Mọi yêu cầu sẽ được xử lý theo quy trình bảo mật và quy định của pháp luật.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Cam kết bảo mật</h2>
        <ul className="list-disc list-inside leading-relaxed">
          <li>Không mua bán hoặc trao đổi thông tin cá nhân khách hàng.</li>
          <li>Áp dụng các tiêu chuẩn bảo mật phù hợp với tính chất thông tin.</li>
          <li>Đội ngũ chuyên trách đảm bảo thực hiện chính sách bảo mật nghiêm ngặt.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Thay đổi chính sách</h2>
        <p className="leading-relaxed">
          Chính sách bảo mật có thể được cập nhật định kỳ. Thông tin cập nhật sẽ được đăng tải tại{" "}
          <strong>vay24h.pro.vn</strong>. Việc tiếp tục sử dụng dịch vụ sau khi cập nhật đồng nghĩa với việc
          bạn đồng ý với nội dung thay đổi.
        </p>
      </section>
    </article>
</div>
  );
}
