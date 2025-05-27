import Accordion from "@/components/Accordion";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Cột bên trái */}
      <div style={{ flex: 2 }}>
        <section
          style={{
          background: "#d1f5d3",
    	  padding: 20,
    	  borderRadius: 8,
     	  display: "flex", // ✅ tạo 2 cột ngang hàng
    	  gap: "20px",
       	  alignItems: "center",
    	  flexWrap: "wrap", // ✅ hỗ trợ responsive khi màn nhỏ
  	 }}
         > 
  {/* Cột trái: nội dung chữ */}
  <div style={{ flex: 1, minWidth: "280px" }}>
    <h2 style={{ color: "#007000", fontSize: "36px" }}>VAY TIỀN ONLINE NHANH 24/7<br />CHỈ CẦN CMND</h2>
    <ul style={{ color: "#000000" }}>
      <li>✅ Vay tiền online 24/7 tại nhà với thủ tục đơn giản.</li>
      <li>✅ Lãi suất 0% cho khoản vay đầu.</li>
      <li>✅ Hỗ trợ hạn mức vay từ 1 triệu – 500 triệu chỉ cần CMND</li>
      <li>✅ Không gọi thẩm định người thân.</li>
    </ul>
  </div>

{/* Cột phải: ảnh */}
<div style={{ flex: 1, minWidth: "280px", textAlign: "center", overflow: "hidden", borderRadius: "12px" }}>
  <Image
  src="/vay.webp"
  alt="Vay tiền online"
  style={{ width: "100%", height: "auto", display: "block" }}
  />
</div>

        </section>

        <section style={{ marginTop: 30}}>
          <h3 style={{textAlign: "center" }}>MẸO HƯỚNG DẪN VAY TIỀN ONLINE NHANH VÀ MỞ THẺ TÍN DỤNG ONLINE MIỄN PHÍ</h3>
          <Accordion title="📌 HƯỚNG DẪN ĐĂNG KÍ VAY ONLINE NHANH TỶ LỆ DUYỆT CAO">
                        <h2 ><strong>💸 Mẹo Đăng Ký Vay Tiền Online Hiệu Quả 2025 Cho Người Mới – Hướng Dẫn Chi Tiết</strong></h2>
			<p>Vay tiền online 2025 đang là xu hướng phổ biến nhờ quy trình đơn giản, duyệt nhanh và không cần gặp mặt. Tuy nhiên, để <strong>tăng tỷ lệ xét duyệt</strong> thành công, người mới cần nắm rõ một vài mẹo quan trọng dưới đây.</p>
			<h2><strong>✅ 1. Đăng ký vay tại nhiều đơn vị cùng lúc</strong></h2>
			<ul>
  			 <li>Tăng khả năng được duyệt và nhận tiền nhanh chóng.</li>
  			 <li>Giúp bạn so sánh và chọn lựa được gói vay phù hợp nhất.</li>
			 </ul>
			 <p><em>Lưu ý: Ưu tiên chọn các đơn vị <strong>vay tiền uy tín</strong> được đề xuất bởi những website tài chính lớn, như <strong>vay24h.pro.vn</strong>.</em></p>
			<h2><strong>✅ 2. Không làm công ty? Bạn vẫn đăng ký vay được</strong></h2>
			<p>Nếu bạn là freelancer, kinh doanh online hoặc làm việc tự do, vẫn có thể điền thông tin như sau:</p>
			<ul>
  			 <li>Nhập tên công ty bất kỳ (nhưng đừng quá &quot;giả tạo&quot;).</li>
  			 <li>Dùng số điện thoại giả định, như tổng đài công ty.</li>
			</ul>
			<p><em><strong>Mẹo:</strong> Hãy chọn thông tin trông hợp lý và có logic để hồ sơ không bị nghi ngờ.</em></p>
			<h2><strong>✅ 3. Tạo email tạm thời nếu chưa có</strong></h2>
			<p>Một số công ty tài chính yêu cầu mail khi đăng ký vay. Nếu chưa có thì cũng đừng lo, hãy nhập mail theo mẹo bên dưới:</p>
			<blockquote><strong>[Tên không dấu][Năm sinh]@gmail.com</strong></blockquote>
			<p>Ví dụ: <code>huyhung1991@gmail.com</code></p>
			<p><em>→ Đảm bảo địa chỉ email trông chuyên nghiệp để tăng độ tin cậy khi vay tiền online.</em></p>
			<h2><strong>✅ 4. Khai báo mức thu nhập hợp lý</strong></h2>
			<p>Dù thu nhập thực tế thấp, bạn vẫn có thể khai từ <strong>8 – 10 triệu đồng/tháng</strong>. Hầu hết vay tiền online hiện nay <strong>vay tiền không cần chứng minh thu nhập</strong>.</p>
			<h2><strong>✅ 5. Sử dụng SIM chính chủ từ nhà mạng lớn</strong></h2>
			<ul>
  			 <li>Viettel</li>
  	   		 <li>Mobifone</li>
  			 <li>Vinaphone</li>
			</ul>
	                <p>Dùng SIM chính chủ giúp xác minh danh tính nhanh hơn, tránh rủi ro bị từ chối hồ sơ do thông tin không khớp.</p>
			<h2><strong>📱 Hướng dẫn khi mở link từ TikTok, Zalo, Facebook...</strong></h2>
			<p>Nếu bạn đang dùng điện thoại và mở website qua TikTok, Zalo, Facebook... có thể gặp lỗi như không gửi được form. Để khắc phục:</p>
			<ol>
  			 <li>Nhấn biểu tượng <strong>ba chấm (...)</strong> ở góc trên bên phải ứng dụng.</li>
  			 <li>Chọn <strong>“Mở bằng trình duyệt”</strong> (Chrome, Safari...)</li>
			</ol>
                         <p>👉 Cách này giúp website hoạt động đầy đủ tính năng, dễ đăng ký vay tiền hơn.</p>
	
          		 <p><strong>📸 Hướng dẫn mở bằng hình ảnh (áp dụng khi vào từ TikTok, Zalo...):</strong></p>
                         <Image loading="lazy" src="/huongdan.webp" width={800} height={500} style={{ width: "100%", height: "auto", margin: "20px 0" }} alt="Logo"/>
			<p><strong>✅ Mẹo cuối cùng:</strong> Luôn kiểm tra kỹ thông tin trước khi gửi. Ưu tiên chọn <strong>đơn vị cho vay online uy tín</strong> có đánh giá tốt từ cộng đồng!</p>
        		<Link href="/vay-tien-nhanh">💰 Vay Online Ngay</Link>
          		 
			
	  </Accordion>


          <Accordion title="📌 HƯỚNG DẪN MỞ THẺ TÍN DỤNG ONLINE MIỄN PHÍ">
                     <h2><strong>💳 Hướng Dẫn Mở Thẻ Tín Dụng Online Dễ Duyệt Cho Người Mới (2025)</strong></h2>
                     <p>Bạn muốn chi tiêu trước, trả tiền sau mà không cần vay nóng? <strong>Thẻ tín dụng</strong> là công cụ tài chính giúp bạn thanh toán linh hoạt, được nhiều ngân hàng hỗ trợ đăng ký dễ dàng – đặc biệt là hình thức mở online. Dưới đây là <strong>hướng dẫn chi tiết từ A-Z</strong> giúp bạn hiểu rõ và mở thẻ tín dụng thành công ngay từ lần đầu.</p>
 		     <h2><strong>1. Thẻ tín dụng là gì?</strong></h2>
                     <p>Thẻ tín dụng (<em>Credit Card</em>) là loại thẻ ngân hàng cho phép bạn <strong>chi tiêu trước – trả sau</strong> trong hạn mức được cấp. Có thể dùng để thanh toán online, cà thẻ khi mua sắm hoặc rút tiền mặt (có phí).</p>
                     <h2><strong>2. Điều kiện mở thẻ tín dụng</strong></h2>
                     <ul>
    			<li>Độ tuổi: Từ 18 tuổi trở lên</li>
    			<li>Thu nhập ổn định (tối thiểu từ 4–6 triệu/tháng)</li>
    			<li>CMND/CCCD và hộ khẩu hoặc KT3</li>
    			<li>Bảng lương và sao kê tài khoản 3 tháng gần nhất</li>
    			<li>Hợp đồng lao động (trong một số trường hợp)</li>
  		     </ul>
  		     <p><em>Lưu ý:</em> Một số ngân hàng <strong>cho phép mở thẻ không cần chứng minh thu nhập</strong> nếu bạn có thẻ tín dụng cũ, tài sản đảm bảo, hoặc mở thẻ đồng thương hiệu.</p>
                     <h2><strong>3. Quy trình mở thẻ tín dụng</strong></h2>
             	     <h3><strong>Cách 1: Mở trực tiếp tại ngân hàng</strong></h3>
  		     <ul>
    			<li>Mang giấy tờ đến chi nhánh ngân hàng</li>
    			<li>Điền mẫu đơn đăng ký mở thẻ tín dụng</li>
    			<li>Chờ thẩm định hồ sơ và xác minh</li>
    			<li>Nhận thẻ sau 5–7 ngày làm việc</li>
  		     </ul>
		     <h3><strong>Cách 2: Mở thẻ tín dụng online (rất nhanh & tiện)</strong></h3>
  		     <ul>
    			<li>Truy cập website ngân hàng hoặc trang tổng hợp (ví dụ: <strong>vay24h.pro.vn</strong>)</li>
    			<li>Điền thông tin cá nhân, tải lên giấy tờ</li>
    			<li>Chờ xác nhận qua điện thoại hoặc email</li>
  		     </ul>
   		     <p><strong>Ưu điểm:</strong> Đăng ký nhanh, thường có <strong>ưu đãi hoàn tiền</strong>, <strong>miễn phí thường niên</strong>.</p>
		     <h2><strong>4. Những lưu ý khi mở thẻ tín dụng</strong></h2>
  		     <ul>
    			<li>Chọn hạn mức phù hợp với thu nhập để tránh nợ xấu</li>
    			<li>Đọc kỹ các khoản phí: thường niên, lãi suất chậm trả, rút tiền mặt</li>
    			<li>Luôn thanh toán đúng hạn để tránh bị tính lãi</li>
    			<li>Không chia sẻ thông tin thẻ với người lạ</li>
  		    </ul>
		    <h2><strong>5. Gợi ý ngân hàng dễ mở thẻ tín dụng</strong></h2>
  		    <ul>
    			<li><strong>HSBCBank</strong>: Ưu đãi hoàn tiền lớn</li>
    			<li><strong>VPBank</strong>: Trả góp lãi suất 0%</li>
    			<li><strong>VPBank</strong>: Nhiều ưu đãi khi mở thẻ tín dụng</li>
    			<li><strong>TPBank</strong>: Duyệt online, thủ tục đơn giản</li>
   		    </ul>
    		    <h2><strong>6. Ưu đãi phổ biến khi mở thẻ</strong></h2>
  		    <ul>
    			<li>Miễn phí thường niên năm đầu</li>
    			<li>Hoàn tiền, tích điểm, tặng voucher mua sắm</li>
    			<li>Trả góp 0% tại đối tác</li>
    			<li>Ưu đãi khi thanh toán online, ăn uống, du lịch</li>
  		    </ul>
    		    <Link href="/the-tin-dung">✨ Mở Thẻ Tín Dụng Miễn Phí Ngay</Link>
          </Accordion>
        </section>
       
       <section style={{ marginTop: 30}}>
          <h3 style={{textAlign: "center" }}>VAY TIỀN ONLINE CHUYỂN KHOẢN 24/7 CẦN LƯU Ý GÌ?</h3>
          <p style={{textAlign: "center" }}>Dưới đây là các câu hỏi thường gặp của khách hàng khi sử dụng dịch vụ vay tiền online</p>

          <Accordion title="📌 Vay online có an toàn không?">
	  <p>Vay tiền online là hình thức vay an toàn và tiện lợi, bạn không cần thế chấp tài sản nhưng vẫn có thể vay được tiền ngay trong ngày. Tuy nhiên bạn cần chọn những đơn vị cho vay uy tín mà chúng tôi đã giúp bạn sàng lọc để tránh mắc bẫy tín dụng đen với lãi suất cắt cổ.</p>
	  </Accordion>

          <Accordion title="📌 Tôi nhận tiền vay onlien bằng cách nào?">
	  <p>Tiền sẽ được chuyển khoản trực tiếp vào tài khoản ngân hàng của bạn sau khi hồ sơ được duyệt thành công.</p>
          </Accordion>

          <Accordion title="📌 Tôi thanh toán trả nợ gốc, lãi khi vay tiền online bằng cách nào?">
	  <p> Bạn có thể thanh toán qua Internet Banking, ví điện tử hoặc ra trực tiếp ngân hàng theo hướng dẫn của bên cho vay.</p>
          </Accordion>

         <Accordion title="📌 Vay tiền online lãi suất 0% là có thật hay không?">
	 <p> Đúng vậy, nhiều đơn vị hỗ trợ khoản vay đầu tiên với lãi suất 0% dành cho khách hàng mới.</p>
         </Accordion>

        <Accordion title="📌 Tôi có thể vay cùng lúc nhiều đơn vị cho vay online được không?">
	<p>Bạn hoàn toàn có thể đăng ký vay ở nhiều đơn vị khác nhau để tăng cơ hội được giải ngân nhanh chóng.</p>
        </Accordion>

        </section>
      </div>

    </div>
  );
}

