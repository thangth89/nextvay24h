import Accordion from "@/components/Accordion";
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// SEO Metadata cho trang chủ
export const metadata: Metadata = {
  title: "Vay Tiền Online Nhanh 24/7 - Lãi Suất 0% Khoản Đầu | vay24h.pro.vn",
  description: "⭐ TOP website vay tiền online uy tín 24/7. Chỉ cần CMND, duyệt nhanh trong 5 phút. Lãi suất 0% khoản đầu, hạn mức 1-500 triệu. Mở thẻ tín dụng miễn phí.",
  keywords: "vay24h, vay tiền online, vay nhanh 24/7, vay tiền uy tín, lãi suất 0%, vay không thẩm định, vay chỉ cần cmnd, mở thẻ tín dung online, vay tiền không thế chấp",
  openGraph: {
    title: "Vay Tiền Online Nhanh 24/7 - Lãi Suất 0% Khoản Đầu",
    description: "TOP website vay tiền online uy tín 24/7. Chỉ cần CMND, duyệt nhanh trong 5 phút. Lãi suất 0% khoản đầu, hạn mức 1-500 triệu.",
    url: "https://vay24h.pro.vn",
    images: [
      {
        url: "https://vay24h.pro.vn/vay.webp",
        width: 1200,
        height: 630,
        alt: "Vay tiền online 24/7 uy tín",
      }
    ],
  },
  alternates: {
    canonical: "https://vay24h.pro.vn",
  },
};

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Cột bên trái */}
      <div style={{ flex: 2 }}>
        {/* Hero Section với Schema Markup */}
        <section
          style={{
            background: "#d1f5d3",
            padding: 20,
            borderRadius: 8,
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          itemScope
          itemType="https://schema.org/FinancialProduct"
        > 
          {/* Cột trái: nội dung chữ */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <h1 
              style={{ color: "#007000", fontSize: "28px", margin: "0 0 15px 0" }}
              itemProp="name"
            >
              VAY TIỀN ONLINE NHANH 24/7<br />CHỈ CẦN CMND
            </h1>
            
            <div itemProp="description">
              <ul style={{ color: "#000000", lineHeight: "1.6" }}>
                <li>✅ <strong>Vay tiền online 24/7</strong> tại nhà với thủ tục đơn giản.</li>
                <li>✅ <strong>Lãi suất 0%</strong> cho khoản vay đầu.</li>
                <li>✅ Hỗ trợ <strong>hạn mức vay từ 1 triệu – 500 triệu</strong> chỉ cần CMND</li>
                <li>✅ <strong>Không gọi thẩm định</strong> người thân.</li>
              </ul>
            </div>
            
            <div style={{ marginTop: "20px" }}>
              <Link 
                href="/vay-tien-nhanh"
                style={{
                  backgroundColor: "#007000",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  display: "inline-block"
                }}
                aria-label="Đăng ký vay tiền online ngay"
              >
                💰 VAY TIỀN NGAY
              </Link>
            </div>
          </div>

          {/* Cột phải: ảnh */}
          <div style={{ flex: 1, minWidth: "280px", textAlign: "center", overflow: "hidden", borderRadius: "12px" }}>
            <Image
              src="/vay.webp"
              alt="Vay tiền online nhanh 24/7 chỉ cần CMND - Lãi suất 0% khoản đầu"
              width={400}
              height={300}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
              itemProp="image"
            />
          </div>
        </section>

        {/* Main Content Section */}
        <section style={{ marginTop: 30 }}>
          <h2 style={{ textAlign: "center", color: "#007000", fontSize: "24px" }}>
            MẸO HƯỚNG DẪN VAY TIỀN ONLINE NHANH VÀ MỞ THẺ TÍN DỤNG ONLINE MIỄN PHÍ
          </h2>
          
          <article>
            <Accordion title="📌 HƯỚNG DẪN ĐĂNG KÍ VAY ONLINE NHANH TỶ LỆ DUYỆT CAO">
              <header>
                <h2><strong>💸 Mẹo Đăng Ký Vay Tiền Online Hiệu Quả 2025 Cho Người Mới – Hướng Dẫn Chi Tiết</strong></h2>
              </header>
              
              <p>
                <strong>Vay tiền online 2025</strong> đang là xu hướng phổ biến nhờ quy trình đơn giản, duyệt nhanh và không cần gặp mặt. 
                Tuy nhiên, để <strong>tăng tỷ lệ xét duyệt</strong> thành công, người mới cần nắm rõ một vài mẹo quan trọng dưới đây.
              </p>
              
              <h3><strong>✅ 1. Đăng ký vay tại nhiều đơn vị cùng lúc</strong></h3>
              <ul>
                <li>Tăng khả năng được duyệt và nhận tiền nhanh chóng.</li>
                <li>Giúp bạn so sánh và chọn lựa được gói vay phù hợp nhất.</li>
              </ul>
              <p><em>Lưu ý: Ưu tiên chọn các đơn vị <strong>vay tiền uy tín</strong> được đề xuất bởi những website tài chính lớn, như <strong>vay24h.pro.vn</strong>.</em></p>
              
              <h3><strong>✅ 2. Không làm công ty? Bạn vẫn đăng ký vay được</strong></h3>
              <p>Nếu bạn là freelancer, kinh doanh online hoặc làm việc tự do, vẫn có thể điền thông tin như sau:</p>
              <ul>
                <li>Nhập tên công ty bất kỳ (nhưng đừng quá &quot;giả tạo&quot;).</li>
                <li>Dùng số điện thoại giả định, như tổng đài công ty.</li>
              </ul>
              <p><em><strong>Mẹo:</strong> Hãy chọn thông tin trông hợp lý và có logic để hồ sơ không bị nghi ngờ.</em></p>
              
              <h3><strong>✅ 3. Tạo email tạm thời nếu chưa có</strong></h3>
              <p>Một số công ty tài chính yêu cầu mail khi đăng ký vay. Nếu chưa có thì cũng đừng lo, hãy nhập mail theo mẹo bên dưới:</p>
              <blockquote><strong>[Tên không dấu][Năm sinh]@gmail.com</strong></blockquote>
              <p>Ví dụ: <code>huyhung1991@gmail.com</code></p>
              <p><em>→ Đảm bảo địa chỉ email trông chuyên nghiệp để tăng độ tin cậy khi vay tiền online.</em></p>
              
              <h3><strong>✅ 4. Khai báo mức thu nhập hợp lý</strong></h3>
              <p>Dù thu nhập thực tế thấp, bạn vẫn có thể khai từ <strong>8 – 10 triệu đồng/tháng</strong>. Hầu hết vay tiền online hiện nay <strong>vay tiền không cần chứng minh thu nhập</strong>.</p>
              
              <h3><strong>✅ 5. Sử dụng SIM chính chủ từ nhà mạng lớn</strong></h3>
              <ul>
                <li>Viettel</li>
                <li>Mobifone</li>
                <li>Vinaphone</li>
              </ul>
              <p>Dùng SIM chính chủ giúp xác minh danh tính nhanh hơn, tránh rủi ro bị từ chối hồ sơ do thông tin không khớp.</p>
              
              <h3><strong>📱 Hướng dẫn khi mở link từ TikTok, Zalo, Facebook...</strong></h3>
              <p>Nếu bạn đang dùng điện thoại và mở website qua TikTok, Zalo, Facebook... có thể gặp lỗi như không gửi được form. Để khắc phục:</p>
              <ol>
                <li>Nhấn biểu tượng <strong>ba chấm (...)</strong> ở góc trên bên phải ứng dụng.</li>
                <li>Chọn <strong>&quot;Mở bằng trình duyệt&quot;</strong> (Chrome, Safari...)</li>
              </ol>
              <p>👉 Cách này giúp website hoạt động đầy đủ tính năng, dễ đăng ký vay tiền hơn.</p>
              
              <p><strong>📸 Hướng dẫn mở bằng hình ảnh (áp dụng khi vào từ TikTok, Zalo...):</strong></p>
              <Image 
                src="/huongdan.webp" 
                width={800} 
                height={500} 
                style={{ width: "100%", height: "auto", margin: "20px 0" }} 
                alt="Hướng dẫn mở website vay tiền từ TikTok, Zalo, Facebook"
              />
              
              <p><strong>✅ Mẹo cuối cùng:</strong> Luôn kiểm tra kỹ thông tin trước khi gửi. Ưu tiên chọn <strong>đơn vị cho vay online uy tín</strong> có đánh giá tốt từ cộng đồng!</p>
              
              <Link 
                href="/vay-tien-nhanh"
                style={{
                  backgroundColor: "#007000",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  display: "inline-block",
                  marginTop: "15px"
                }}
              >
                💰 Vay Online Ngay
              </Link>
            </Accordion>

            <Accordion title="📌 HƯỚNG DẪN MỞ THẺ TÍN DỤNG ONLINE MIỄN PHÍ">
              <header>
                <h2><strong>💳 Hướng Dẫn Mở Thẻ Tín Dụng Online Dễ Duyệt Cho Người Mới (2025)</strong></h2>
              </header>
              
              <p>Bạn muốn chi tiêu trước, trả tiền sau mà không cần vay nóng? <strong>Thẻ tín dụng</strong> là công cụ tài chính giúp bạn thanh toán linh hoạt, được nhiều ngân hàng hỗ trợ đăng ký dễ dàng – đặc biệt là hình thức mở online. Dưới đây là <strong>hướng dẫn chi tiết từ A-Z</strong> giúp bạn hiểu rõ và mở thẻ tín dụng thành công ngay từ lần đầu.</p>
              
              <h3><strong>1. Thẻ tín dụng là gì?</strong></h3>
              <p>Thẻ tín dụng (<em>Credit Card</em>) là loại thẻ ngân hàng cho phép bạn <strong>chi tiêu trước – trả sau</strong> trong hạn mức được cấp. Có thể dùng để thanh toán online, cà thẻ khi mua sắm hoặc rút tiền mặt (có phí).</p>
              
              <h3><strong>2. Điều kiện mở thẻ tín dụng</strong></h3>
              <ul>
                <li>Độ tuổi: Từ 18 tuổi trở lên</li>
                <li>Thu nhập ổn định (tối thiểu từ 4–6 triệu/tháng)</li>
                <li>CMND/CCCD và hộ khẩu hoặc KT3</li>
                <li>Bảng lương và sao kê tài khoản 3 tháng gần nhất</li>
                <li>Hợp đồng lao động (trong một số trường hợp)</li>
              </ul>
              <p><em>Lưu ý:</em> Một số ngân hàng <strong>cho phép mở thẻ không cần chứng minh thu nhập</strong> nếu bạn có thẻ tín dụng cũ, tài sản đảm bảo, hoặc mở thẻ đồng thương hiệu.</p>
              
              <h3><strong>3. Quy trình mở thẻ tín dụng</strong></h3>
              <h4><strong>Cách 1: Mở trực tiếp tại ngân hàng</strong></h4>
              <ul>
                <li>Mang giấy tờ đến chi nhánh ngân hàng</li>
                <li>Điền mẫu đơn đăng ký mở thẻ tín dụng</li>
                <li>Chờ thẩm định hồ sơ và xác minh</li>
                <li>Nhận thẻ sau 5–7 ngày làm việc</li>
              </ul>
              
              <h4><strong>Cách 2: Mở thẻ tín dụng online (rất nhanh & tiện)</strong></h4>
              <ul>
                <li>Truy cập website ngân hàng hoặc trang tổng hợp (ví dụ: <strong>vay24h.pro.vn</strong>)</li>
                <li>Điền thông tin cá nhân, tải lên giấy tờ</li>
                <li>Chờ xác nhận qua điện thoại hoặc email</li>
              </ul>
              <p><strong>Ưu điểm:</strong> Đăng ký nhanh, thường có <strong>ưu đãi hoàn tiền</strong>, <strong>miễn phí thường niên</strong>.</p>
              
              <h3><strong>4. Những lưu ý khi mở thẻ tín dụng</strong></h3>
              <ul>
                <li>Chọn hạn mức phù hợp với thu nhập để tránh nợ xấu</li>
                <li>Đọc kỹ các khoản phí: thường niên, lãi suất chậm trả, rút tiền mặt</li>
                <li>Luôn thanh toán đúng hạn để tránh bị tính lãi</li>
                <li>Không chia sẻ thông tin thẻ với người lạ</li>
              </ul>
              
              <h3><strong>5. Gợi ý ngân hàng dễ mở thẻ tín dụng</strong></h3>
              <ul>
                <li><strong>Cake</strong>: Nhiểu ưu đãi</li>
                <li><strong>VPBank</strong>: Trả góp lãi suất 0%</li>
                <li><strong>TPBank</strong>: Duyệt online, thủ tục đơn giản</li>
              </ul>
              
              <h3><strong>6. Ưu đãi phổ biến khi mở thẻ</strong></h3>
              <ul>
                <li>Miễn phí thường niên năm đầu</li>
                <li>Hoàn tiền, tích điểm, tặng voucher mua sắm</li>
                <li>Trả góp 0% tại đối tác</li>
                <li>Ưu đãi khi thanh toán online, ăn uống, du lịch</li>
              </ul>
              
              <Link 
                href="/the-tin-dung"
                style={{
                  backgroundColor: "#007000",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  display: "inline-block",
                  marginTop: "15px"
                }}
              >
                ✨ Mở Thẻ Tín Dụng Miễn Phí Ngay
              </Link>
            </Accordion>
          </article>
        </section>
       
        {/* FAQ Section */}
        <section style={{ marginTop: 30 }}>
          <h2 style={{ textAlign: "center", color: "#007000", fontSize: "24px" }}>
            VAY TIỀN ONLINE CHUYỂN KHOẢN 24/7 CẦN LƯU Ý GÌ?
          </h2>
          <p style={{ textAlign: "center", marginBottom: "25px" }}>
            Dưới đây là các câu hỏi thường gặp của khách hàng khi sử dụng dịch vụ vay tiền online
          </p>

          <div itemScope itemType="https://schema.org/FAQPage">
            <Accordion title="📌 Vay online có an toàn không?">
              <div itemScope itemType="https://schema.org/Question">
                <h3 itemProp="name" style={{ display: "none" }}>Vay online có an toàn không?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">
                    <strong>Vay tiền online</strong> là hình thức vay an toàn và tiện lợi, bạn không cần thế chấp tài sản nhưng vẫn có thể vay được tiền ngay trong ngày. 
                    Tuy nhiên bạn cần chọn những <strong>đơn vị cho vay uy tín</strong> mà chúng tôi đã giúp bạn sàng lọc để tránh mắc bẫy tín dụng đen với lãi suất cắt cổ.
                  </p>
                </div>
              </div>
            </Accordion>

            <Accordion title="📌 Tôi nhận tiền vay online bằng cách nào?">
              <div itemScope itemType="https://schema.org/Question">
                <h3 itemProp="name" style={{ display: "none" }}>Tôi nhận tiền vay online bằng cách nào?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">
                    Tiền sẽ được <strong>chuyển khoản trực tiếp</strong> vào tài khoản ngân hàng của bạn sau khi hồ sơ được duyệt thành công. 
                    Thời gian nhận tiền thường từ 5-15 phút sau khi được phê duyệt.
                  </p>
                </div>
              </div>
            </Accordion>

            <Accordion title="📌 Tôi thanh toán trả nợ gốc, lãi khi vay tiền online bằng cách nào?">
              <div itemScope itemType="https://schema.org/Question">
                <h3 itemProp="name" style={{ display: "none" }}>Thanh toán trả nợ vay online như thế nào?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">
                    Bạn có thể thanh toán qua <strong>Internet Banking</strong>, <strong>ví điện tử</strong> hoặc ra trực tiếp ngân hàng theo hướng dẫn của bên cho vay. 
                    Hầu hết các đơn vị đều hỗ trợ nhiều hình thức thanh toán tiện lợi.
                  </p>
                </div>
              </div>
            </Accordion>

            <Accordion title="📌 Vay tiền online lãi suất 0% là có thật hay không?">
              <div itemScope itemType="https://schema.org/Question">
                <h3 itemProp="name" style={{ display: "none" }}>Vay tiền online lãi suất 0% có thật không?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">
                    Đúng vậy, nhiều đơn vị hỗ trợ <strong>khoản vay đầu tiên với lãi suất 0%</strong> dành cho khách hàng mới. 
                    Đây là chương trình khuyến mãi để thu hút khách hàng, bạn nên tận dụng cơ hội này.
                  </p>
                </div>
              </div>
            </Accordion>

            <Accordion title="📌 Tôi có thể vay cùng lúc nhiều đơn vị cho vay online được không?">
              <div itemScope itemType="https://schema.org/Question">
                <h3 itemProp="name" style={{ display: "none" }}>Có thể vay nhiều đơn vị cùng lúc không?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">
                    Bạn hoàn toàn có thể <strong>đăng ký vay ở nhiều đơn vị khác nhau</strong> để tăng cơ hội được giải ngân nhanh chóng. 
                    Tuy nhiên, hãy cân nhắc khả năng trả nợ của mình trước khi vay nhiều nơi.
                  </p>
                </div>
              </div>
            </Accordion>
          </div>
        </section>

        {/* Call to Action Section */}
        <section 
          style={{ 
            marginTop: 40, 
            padding: 30, 
            backgroundColor: "#f8f9fa", 
            borderRadius: 10, 
            textAlign: "center" 
          }}
        >
          <h2 style={{ color: "#007000", marginBottom: "15px" }}>
            SẴN SÀNG VAY TIỀN ONLINE NGAY HÔM NAY?
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "25px" }}>
            Hàng nghìn khách hàng đã tin tưởng và sử dụng dịch vụ qua vay24h.pro.vn
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link 
              href="/vay-tien-nhanh"
              style={{
                backgroundColor: "#007000",
                color: "white",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              💰 VAY TIỀN NGAY
            </Link>
            <Link 
              href="/the-tin-dung"
              style={{
                backgroundColor: "#0066cc",
                color: "white",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              💳 MỞ THẺ TÍN DỤNG
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}