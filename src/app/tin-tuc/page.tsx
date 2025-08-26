import { Article } from "@/components/DanhSachTin";
import fs from "fs";
import path from "path";
import DanhSachTin from "@/components/DanhSachTin";

export const metadata = {
  title: "Tin tức vay tiền online",
  description: "Danh sách bài viết tài chính, vay online, thẻ tín dụng",
};

const PER_PAGE = 6;

export default async function Page() {
  const filePath = path.join(process.cwd(), "src/data/news.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const newsList: Article[] = JSON.parse(raw);
  const totalPages = Math.ceil(newsList.length / PER_PAGE);
  const articles = newsList.slice(0, PER_PAGE);
  return <DanhSachTin articles={articles} currentPage={1} totalPages={totalPages} />;
}
