'use client';

import Image from 'next/image';
import Link from 'next/link';

export type Article = {
  title: string;
  image: string;
  slug: string;
  excerpt: string;
};

type Props = {
  articles: Article[];
  currentPage: number;
  totalPages: number;
};

export default function DanhSachTin({ articles, currentPage, totalPages }: Props) {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>DANH SÁCH TIN TỨC</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 20
      }}>
        {articles.map((post, idx) => (
          <Link href={post.slug} key={idx} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              overflow: "hidden",
              background: "#fff",
              height: 250,
              display: "flex",
              flexDirection: "column"
            }}>
              <div style={{ position: 'relative', width: '100%', height: 140 }}>
                <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: 10, flex: 1 }}>
                <h3 style={{
                  fontSize: 14, fontWeight: "bold", overflow: "hidden",
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical"
                }}>
                  {post.title}
                </h3>
                <p style={{
                  fontSize: 13, color: "#555", overflow: "hidden",
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical"
                }}>
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* PHÂN TRANG */}
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 10 }}>
        {currentPage > 1 && (
          <Link href={`/tin-tuc/trang/${currentPage - 1}`} style={styleButton}>← Trước</Link>
        )}
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            key={i}
            href={`/tin-tuc/trang/${i + 1}`}
            style={{
              ...styleButton,
              backgroundColor: currentPage === i + 1 ? "#0d7a5f" : "#eee",
              color: currentPage === i + 1 ? "#fff" : "#000"
            }}
          >
            {i + 1}
          </Link>
        ))}
        {currentPage < totalPages && (
          <Link href={`/tin-tuc/trang/${currentPage + 1}`} style={styleButton}>Sau →</Link>
        )}
      </div>
    </div>
  );
}

const styleButton: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: 5,
  border: "1px solid #ccc",
  textDecoration: "none",
  fontSize: "14px"
};
