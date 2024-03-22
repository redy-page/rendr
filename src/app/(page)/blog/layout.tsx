import { fetchPageMetaOrThrow } from "@/app/_internal/apiUtil";
import BlogProfile from "@/components/blog/blog-profile";
import Header from "@/components/header";

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageMeta = await fetchPageMetaOrThrow();
  return (
    <>
      <Header meta={pageMeta} />
      <div className="flex min-h-screen flex-row">
        <main className="flex-1">{children}</main>
        <BlogProfile profile={pageMeta.personal} />
      </div>
    </>
  );
}
