import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from 'next/image'

type Article = {
  title: string;
  image: string;
  slug: string;
  excerpt: string;
};

const PER_PAGE = 6;

const pageButton = {
  padding: "6px 12px",
  borderRadius: 5,
  border: "1px solid #ccc",
  textDecoration: "none",
  fontSize: "14px"
};

// ✅ Sửa type Props cho Next.js 15+
type Props = {
  params: Promise<{
    pageNum: string;
  }>;
};

// ✅ Sửa generateMetadata với await params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pageNum } = await params; // Thêm await
  const pageNumber = parseInt(pageNum);
  return {
    title: `Tin tức vay online- thẻ tín dụng - Trang ${pageNumber}`,
    description: `Tổng hợp bài viết tài chính, vay tiền online uy tín, hướng dẫn mở thẻ tín dụng - Trang ${pageNumber}`,
    alternates: {
      canonical: `https://vay24h.pro.vn/tin-tuc/trang/${pageNumber}`,
    },
  };
}

// ✅ Tạo static params cho từng trang
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "src", "data", "news.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const newsList: Article[] = JSON.parse(raw);

  const totalPages = Math.ceil(newsList.length / PER_PAGE);

  return Array.from({ length: totalPages }, (_, i) => ({
    pageNum: `${i + 1}`,
  }));
}

// ✅ Sửa component chính với async và await params
export default async function TinTucPage({ params }: Props) {
  const { pageNum } = await params; // Thêm await
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
    <div style={{ flex: 3 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>DANH SÁCH TIN TỨC</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 20
      }}>
        {articles.map((post, idx) => (
          <a href={post.slug} style={{ textDecoration: "none", color: "inherit" }} key={idx}>
            <div style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              overflow: "hidden",
              background: "#fff",
              height: 250,
              display: "flex",
              flexDirection: "column"
            }}>
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: 140,
                flexShrink: 0
              }}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  style={{ 
                    objectFit: "cover"
                  }} 
                />
              </div>
              <div style={{ 
                padding: 10,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 4
              }}>
                <h3 style={{ 
                  fontSize: 14, 
                  fontWeight: "bold", 
                  textDecoration: "none", 
                  color: "#000",
                  lineHeight: 1.2,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  margin: 0,
                  padding: 0
                }}>
                  {post.title}
                </h3>
                <p style={{ 
                  fontSize: 13, 
                  color: "#555",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  margin: 0,
                  padding: 0
                }}>
                  {post.excerpt}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* PHÂN TRANG */}
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 10 }}>
        {page > 1 && (
          <a href={`/tin-tuc/trang/${page - 1}`} style={pageButton}>← Trước</a>
        )}
        {[...Array(totalPages)].map((_, i) => (
          <a
            key={i}
            href={`/tin-tuc/trang/${i + 1}`}
            style={{
              ...pageButton,
              backgroundColor: page === i + 1 ? "#0d7a5f" : "#eee",
              color: page === i + 1 ? "#fff" : "#000"
            }}
          >
            {i + 1}
          </a>
        ))}
        {page < totalPages && (
          <a href={`/tin-tuc/trang/${page + 1}`} style={pageButton}>Sau →</a>
        )}
      </div>
    </div>
  );
}