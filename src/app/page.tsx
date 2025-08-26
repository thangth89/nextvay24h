import { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

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
};

export default function Home() {
  return <HomeClient />;

}
