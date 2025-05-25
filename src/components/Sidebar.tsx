'use client';
import ArticleItem from './ArticleItem';
import { featuredArticles } from '../data/featuredArticles';

export default function Sidebar() {
  return (
    <aside
      style={{
        flex: 1,
        minWidth: "280px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}
    >
      <h2 style={{ 
        fontSize: "18px", 
        marginBottom: "15px",
        color: "#0b2239",
        fontWeight: "600"
      }}>
        BÀI VIẾT NỔI BẬT
      </h2>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        {featuredArticles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
    </aside>
  );
}