import fs from "fs/promises"; // Thay đổi để sử dụng Promise API của fs
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DanhSachTin, { Article } from "@/components/DanhSachTin";

const PER_PAGE = 6;

// Định nghĩa kiểu Props của bạn là chính xác.
type Props = {
  params: { pageNum: string };
};

// Hàm để đọc dữ liệu tin tức, đảm bảo tính nhất quán
async function getNewsList(): Promise<Article[]> {
  const filePath = path.join(process.cwd(), "src/data/news.json");
  try {
    // Sử dụng fs.promises.readFile cho hoạt động bất đồng bộ
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Failed to read news data:", error);
    // Xử lý lỗi nếu file không tồn tại hoặc có vấn đề khi đọc
    // Bạn có thể chọn trả về một mảng rỗng hoặc ném lỗi để next/navigation bắt
    return []; // Hoặc throw error;
  }
}

export async function generateStaticParams() {
  const newsList = await getNewsList(); // Đảm bảo đọc dữ liệu bất đồng bộ
  const totalPages = Math.ceil(newsList.length / PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    pageNum: `${i + 1}`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = parseInt(params.pageNum);
  return {
    title: `Tin tức vay tiền online - Trang ${page}`,
    description: `Danh sách bài viết vay tiền, tài chính - Trang ${page}`,
    alternates: {
      canonical: `https://vay24h.pro.vn/tin-tuc/trang/${page}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const page = parseInt(params.pageNum);
  if (isNaN(page) || page < 1) return notFound();

  const newsList = await getNewsList(); // Sử dụng hàm đọc dữ liệu bất đồng bộ đã định nghĩa

  // Xử lý trường hợp không có dữ liệu (file không tồn tại hoặc lỗi đọc)
  if (!newsList || newsList.length === 0) {
    return notFound();
  }

  const totalPages = Math.ceil(newsList.length / PER_PAGE);
  if (page > totalPages) return notFound();

  const start = (page - 1) * PER_PAGE;
  const articles = newsList.slice(start, start + PER_PAGE);

  return (
    <DanhSachTin
      articles={articles}
      currentPage={page}
      totalPages={totalPages}
    />
  );
}
