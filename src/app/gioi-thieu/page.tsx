import { Metadata } from "next";

export const metadata: Metadata = {
  title: "vay24h.pro.vn – Vay online & mở thẻ tín dụng miễn phí uy tín",
  description: "So sánh lãi suất, mở thẻ tín dụng miễn phí, tư vấn vay online nhanh chóng & an toàn tại vay24h.pro.vn – Kết nối tài chính thông minh 2025.",
};

export default function Vay24hPage() {
  return (
 <div className="text-sm text-gray-700 leading-relaxed mt-2" style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.6, marginTop: 8 }}>
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-6">
        vay24h.pro.vn – Cổng thông tin vay online & mở thẻ tín dụng miễn phí uy tín
      </h1>

      <p className="text-base leading-relaxed mb-6">
        Bạn đang tìm kiếm giải pháp tài chính nhanh chóng, thủ tục đơn giản và mức lãi suất cạnh tranh?{" "}
        <strong>Vay24h.pro.vn</strong> chính là điểm đến lý tưởng dành cho bạn. Ra mắt năm 2025,
        vay24h.pro.vn chuyên tổng hợp và so sánh các gói vay tín chấp, vay mua nhà, vay mua xe và dịch vụ mở
        thẻ tín dụng hoàn toàn miễn phí từ các ngân hàng và công ty tài chính uy tín hàng đầu. Chúng tôi không
        trực tiếp cho vay, mà kết nối bạn với các đối tác đã được thẩm định kỹ lưỡng, giúp bạn yên tâm về độ
        tin cậy và minh bạch.
      </p>

      <section id="dichvu" className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Dịch vụ của chúng tôi</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>So sánh lãi suất vay:</strong> Vay tín chấp, vay mua nhà, vay mua xe – tìm gói vay phù hợp
            với nhu cầu và khả năng tài chính của bạn.
          </li>
          <li>
            <strong>Mở thẻ tín dụng miễn phí:</strong> Tiếp cận ưu đãi hoàn tiền, tích lũy điểm thưởng và nâng
            cao tiện ích thanh toán không dùng tiền mặt.
          </li>
          <li>
            <strong>Tư vấn chuyên sâu:</strong> Kết nối trực tiếp với đội ngũ tư vấn viên giàu kinh nghiệm, sẵn
            sàng giải đáp thắc mắc về thủ tục, hồ sơ và điều kiện vay.
          </li>
        </ul>
      </section>

      <section id="visao" className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Vì sao chọn vay24h.pro.vn?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Tổng hợp đa dạng:</strong> Các sản phẩm vay và thẻ tín dụng từ các ngân hàng Top 10 và công
            ty tài chính uy tín.
          </li>
          <li>
            <strong>Cập nhật liên tục:</strong> Thông tin lãi suất, khuyến mãi, ưu đãi thẻ được làm mới mỗi ngày.
          </li>
          <li>
            <strong>An toàn & bảo mật:</strong> Mọi dữ liệu cá nhân của bạn được bảo vệ tuyệt đối, tuân thủ quy
            định bảo mật tài chính.
          </li>
        </ul>
      </section>

      <p className="text-base leading-relaxed">
        Đừng để thủ tục rườm rà hay lãi suất “ẩn” làm bạn chùn bước. Hãy truy cập{" "}
        <strong>vay24h.pro.vn</strong> ngay hôm nay để so sánh, lựa chọn giải pháp vay vốn và mở thẻ tín dụng tối
        ưu nhất. Hiện thực hóa kế hoạch an cư, đầu tư hay chi tiêu hàng ngày chỉ với vài cú click!
      </p>
    </article>
</div>
  );
}
