import BlogProfile from "@/components/blog/blog-profile";

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex min-h-screen flex-row">
        <main className="flex-1">{children}</main>
        <BlogProfile />
      </div>
    </>
  );
}
