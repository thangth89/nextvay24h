"use client";

import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anh Lê Thanh Tùng",
      age: "26 tuổi",
      location: "TP.HCM",
      avatar: "/avatar/1.webp", // Thay đường dẫn ảnh của bạn
      rating: 5,
      content: "Nhờ biết đến web tư vấn vay24h.pro.vn, mình đã vay thành công 5 triệu tại jeff chỉ cần CMND. Chỉ cần ngồi tại nhà, đăng ký vay online, mình đã nhận tiền chuyển về tài khoản chỉ sau 30 phút"
    },
    {
      id: 2,
      name: "Chị Hương Ly",
      age: "29 tuổi",
      location: "Hà Nội",
      avatar: "/avatar/2.webp", // Thay đường dẫn ảnh của bạn
      rating: 5,
      content: "Cảm ơn dịch vụ vay24h.pro.vn đã hỗ trợ tôi vay online số tiền 10 triệu đồng tại VAYVND với lãi suất 0% cho khoản vay đầu tiên, thanh toán khoản vay cực kỳ dễ dàng nữa. Vote 5 sao nhé!"
    },
    {
      id: 3,
      name: "Bạn Thảo My",
      age: "Sinh viên năm 1",
      location: "",
      avatar: "/avatar/3.webp", // Thay đường dẫn ảnh của bạn
      rating: 5,
      content: "Tôi là sinh viên vừa bước chân vào Đại học, đang cần tiền để đóng học phí nhưng lại không thể vay Ngân hàng do chưa đi làm. Được bạn bè giới thiệu tôi biết đến vay24h.pro.vn, nơi đây đã giúp tôi tiếp cận các gói vay dành cho sinh viên tại VÌ MÂY MÂN thật nhanh chóng."
    },
    {
      id: 4,
      name: "Chị Hương Ly",
      age: "35 tuổi",
      location: "Huế",
      avatar: "/avatar/4.webp", // Thay đường dẫn ảnh của bạn
      rating: 5,
      content: "Lần đầu biết đến hình thức vay tiền online, tôi không nghĩ là mình được giải ngân vay vốn nhanh đến thế. Với DONG247, tôi chỉ cần chụp ảnh căn cước, bằng vài thao tác luôn chạm trên điện thoại tôi đã có ngay 7 triệu đồng trong tài khoản. Thật tuyệt vời!"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-8 rounded-xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            CẢM NHẬN CỦA KHÁCH HÀNG KHI VAY TIỀN ONLINE TẠI VAY24H.PRO.VN
          </h2>
          <p className="text-gray-600 text-lg">
            Chúng tôi hy vọng mang lại trải nghiệm tốt nhất cho từng khách hàng.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                {/* Avatar and Info */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 rounded-full mb-3 overflow-hidden border-4 border-orange-200">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback nếu ảnh không tải được
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>
                      {testimonial.name.split(' ')[1]?.charAt(0) || testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-center">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center">
                    ({testimonial.age}{testimonial.location && `, ${testimonial.location}`})
                  </p>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="text-4xl text-orange-200 absolute -top-2 -left-2">&quot;</div>
                  <p className="text-gray-700 text-sm leading-relaxed italic pl-4">
                    {testimonial.content}
                  </p>
                  <div className="text-4xl text-orange-200 absolute -bottom-2 -right-2 rotate-180">&quot;</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <Link href="/vay-tien-nhanh" aria-label="Đăng ký vay tiền online ngay"> 💰 VAY TIỀN NGAY </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;