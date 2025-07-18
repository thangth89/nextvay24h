import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DanhSachTin, { Article } from "@/components/DanhSachTin";

const PER_PAGE = 6;

// Cập nhật type để params là Promise
type Props = {
  params: Promise<{ pageNum: string }>;
};

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "src/data/news.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const newsList: Article[] = JSON.parse(raw);
  const totalPages = Math.ceil(newsList.length / PER_PAGE);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    pageNum: `${i + 1}`,
  }));
}

// Cập nhật generateMetadata để await params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pageNum } = await params; // Await params
  const page = parseInt(pageNum);
  
  return {
    title: `Tin tức vay tiền online - Trang ${page}`,
    description: `Danh sách bài viết vay tiền, tài chính - Trang ${page}`,
    alternates: {
      canonical: `https://vay24h.pro.vn/tin-tuc/trang/${page}`,
    },
  };
}

// Cập nhật Page component để await params
export default async function Page({ params }: Props) {
  const { pageNum } = await params; // Await params
  const page = parseInt(pageNum);
  
  if (isNaN(page) || page < 1) return notFound();
  
  const filePath = path.join(process.cwd(), "src/data/news.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const newsList: Article[] = JSON.parse(raw);
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
