import { fetchArticleTagCounts } from "@/app/_internal/apiUtil";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default async function ArticleTags({
  activeTag,
}: {
  activeTag?: string;
}) {
  const tagCounts = await fetchArticleTagCounts();

  return (
    <>
      {tagCounts.length > 0 && (
        <>
          <p className="text-lg mb-1">Tags:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10 w-full p-4 border rounded-lg text-muted-foreground">
            {tagCounts?.map((tag, i) => (
              <Link
                key={i}
                href={
                  activeTag?.toLowerCase() === tag.name.toLowerCase()
                    ? "/blog"
                    : `/blog/?tag=${tag.name.toLowerCase()}`
                }
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  activeTag?.toLowerCase() === tag.name.toLowerCase() &&
                    "text-primary border border-primary"
                )}
              >{`${tag.name} (${tag.count})`}</Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
