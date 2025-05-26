import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ vay24h.pro.vn – Hợp tác & hỗ trợ dịch vụ tài chính trực tuyến",
  description:
    "Liên hệ vay24h.pro.vn để hợp tác quảng cáo, truyền thông hoặc được tư vấn dịch vụ vay tài chính trực tuyến. Email: vay24@outlook.com.vn",
};

export default function ContactPage() {
  return (
<div style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.6, marginTop: 8,backgroundColor: "#fff", borderRadius: "8px"}}>
    <article className="max-w-2xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-6">
        Liên hệ với vay24h.pro.vn
      </h1>

      <p className="text-base leading-relaxed mb-6">
        Nếu bạn có nhu cầu <strong>đặt quảng cáo</strong>, hợp tác truyền thông hoặc cần được hỗ trợ về{" "}
        <strong>dịch vụ vay tài chính trực tuyến</strong>, hãy liên hệ với chúng tôi qua địa chỉ email bên dưới:
      </p>

      <p className="text-base leading-relaxed mb-6">
        <strong>Email:</strong>{" "}
        <a href="mailto:vay24@outlook.com.vn" className="text-blue-600 underline">
          vay24@outlook.com.vn
        </a>
      </p>

      <p className="text-base leading-relaxed">
        <strong>vay24h.pro.vn</strong> luôn sẵn sàng đồng hành cùng bạn, mang đến những giải pháp tài chính hiệu
        quả và uy tín.
      </p>
    </article>
  </div>
  );
}
