import { Metadata } from "next";
import ArticlesPage from "./[page]/page";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <ArticlesPage />
    </>
  );
}
