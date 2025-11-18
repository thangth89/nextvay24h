import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

/* ===========================
   Kiểu dữ liệu cho 1 bài viết
   =========================== */
type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content?: string;
};

/* ===========================
   Đọc dữ liệu tin tức
   =========================== */
function getNewsData(): NewsArticle[] {
  const filePath = path.join(process.cwd(), "src/data/news.json");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as NewsArticle[];
}

/* ============================================================
   1. generateStaticParams – giúp Next.js build đúng từng bài
   ============================================================ */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const articles = getNewsData();

  return articles.map((item) => ({
    // đảm bảo slug sạch, chỉ còn đoạn cuối
    slug: item.slug.replace("/tin-tuc/", "").replace(/^\//, ""),
  }));
}

/* ============================================================
   2. Metadata cho từng bài – Canonical chuẩn SEO
   ============================================================ */
type PageParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: PageParams
): Promise<Metadata> {
  const articles = getNewsData();
  const slug = params.slug;

  const article = articles.find(
    (item) => item.slug.replace("/tin-tuc/", "").replace(/^\//, "") === slug
  );

  if (!article) return {};

  const canonicalUrl = `https://vay24h.pro.vn/tin-tuc/${slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: `https://vay24h.pro.vn${article.image}`,
          width: 800,
          height: 450,
          alt: article.title,
        },
      ],
    },
  };
}

/* ============================================================
   3. Page Component – Render nội dung bài viết
   ============================================================ */
export default async function Page({ params }: PageParams) {
  const articles = getNewsData();
  const slug = params.slug;

  const article = articles.find(
    (item) => item.slug.replace("/tin-tuc/", "").replace(/^\//, "") === slug
  );

  if (!article) {
    notFound();
  }

  const canonicalUrl = `https://vay24h.pro.vn/tin-tuc/${slug}`;

  // Tạo JSON-LD Article Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `https://vay24h.pro.vn${article.image}`,
    author: {
      "@type": "Organization",
      name: "Vay24h.pro.vn",
    },
    publisher: {
      "@type": "Organization",
      name: "Vay24h.pro.vn",
      logo: {
        "@type": "ImageObject",
        url: "https://vay24h.pro.vn/logovay.webp",
      },
    },
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {article.title}
      </h1>

      <Image
        src={article.image}
        width={800}
        height={450}
        alt={article.title}
        className="rounded-lg shadow mb-6 w-full h-auto"
        priority
      />

      {/* Nội dung bài viết — nếu bạn lưu HTML trong news.json */}
      {article.content ? (
        <div
          className="prose prose-lg max-w-none"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      ) : (
        <p className="text-gray-600 italic">
          *Bài viết đang được cập nhật nội dung chi tiết…*
        </p>
      )}
    </article>
  );
}
