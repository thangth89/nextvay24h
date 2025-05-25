'use client';
import Link from 'next/link';
import { FeaturedArticle } from '../types/article';
import Image from 'next/image';

interface ArticleItemProps {
  article: FeaturedArticle;
}

export default function ArticleItem({ article }: ArticleItemProps) {
  return (
    <li style={{ marginBottom: "12px" }}>
      <Link 
        href={article.slug} 
        style={{ 
          display: "flex", 
          gap: "10px", 
          textDecoration: "none",
          color: "inherit"
        }}
      >
        <Image
  src={article.thumbnail}
  alt={article.alt}
  width={60}
  height={60}
  style={{ 
    objectFit: "cover",
    borderRadius: "4px",
    transition: "opacity 0.2s"
  }}
/>
        <span
          style={{ 
            fontSize: "14px", 
            color: "#0b2239", 
            lineHeight: "1.4",
            display: "flex",
            alignItems: "center",
            transition: "color 0.2s"
          }}
        >
          {article.title}
        </span>
      </Link>
    </li>
  );
}