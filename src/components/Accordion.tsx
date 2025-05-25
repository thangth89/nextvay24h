"use client";

import { useState } from "react";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // Style cho nội dung SEO
  const seoContentStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "10px",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "14px 20px",
          background: "none",
          border: "none",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#0a5",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {title}
        <span
          style={{
            display: "inline-block",
            transition: "transform 0.3s",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          ▶
        </span>
      </button>

      {open && (
        <div 
          style={{ 
            padding: "15px 20px", 
            backgroundColor: "#f9f9f9",
            ...seoContentStyle
          }}
          className="seo-content"
        >
          {children}
        </div>
      )}
      
      <style jsx global>{`
        .seo-content h1 { 
          font-size: 26px !important; 
          margin-bottom: 16px !important; 
          color: #2c3e50 !important; 
          font-weight: bold !important; 
        }
        .seo-content h2 { 
          font-size: 22px !important; 
          margin-bottom: 14px !important; 
          color: #2c3e50 !important; 
          font-weight: bold !important; 
        }
        .seo-content h3 { 
          font-size: 18px !important; 
          margin-bottom: 12px !important; 
          color: #34495e !important; 
          font-weight: bold !important; 
        }
        .seo-content h4 { 
          font-size: 16px !important; 
          margin-bottom: 10px !important; 
          color: #34495e !important; 
          font-weight: bold !important; 
        }
        .seo-content p { 
          font-size: 14px !important; 
          margin-bottom: 12px !important; 
          line-height: 1.6 !important; 
          color: #333 !important; 
        }
        .seo-content ul, .seo-content ol { 
          font-size: 14px !important; 
          margin-bottom: 12px !important; 
          line-height: 1.6 !important; 
        }
        .seo-content li { 
          margin-bottom: 6px !important; 
        }
        .seo-content strong { 
          font-weight: 600 !important; 
        }
        .seo-content a { 
          color: #007bff !important; 
          text-decoration: none !important; 
          font-weight: 500 !important; 
        }
        .seo-content a:hover { 
          text-decoration: underline !important; 
        }
        .seo-content blockquote { 
          background: #f8f9fa !important; 
          border-left: 4px solid #007bff !important; 
          padding: 10px 15px !important; 
          margin: 15px 0 !important; 
          font-style: italic !important; 
        }
        .seo-content code { 
          background: #f4f4f4 !important; 
          padding: 2px 6px !important; 
          border-radius: 3px !important; 
          font-family: 'Courier New', monospace !important; 
        }
        .seo-content img { 
          max-width: 100% !important; 
          height: auto !important; 
          border-radius: 8px !important; 
          margin: 10px 0 !important; 
        }
      `}</style>
    </div>
  );
}