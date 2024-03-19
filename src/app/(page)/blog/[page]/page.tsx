import Link from "next/link";
import {
  fetchArticleCards,
  fetchProfileForPage,
} from "@/app/_internal/apiUtil";
import ArticleItem from "@/components/blog/article-item";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function ArticlesPage({
  params,
}: {
  params?: { page: string };
}) {
  const PAGE = params?.page ? parseInt(params.page) : 1;
  if (isNaN(PAGE) || PAGE === 0) return notFound();
  const SIZE = 2;
  const posts = await fetchArticleCards(PAGE, SIZE);

  if (PAGE > posts.totalPages) return notFound();
  const profile = await fetchProfileForPage();
  return (
    <>
      <section className="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            {profile.profile.firstName + "'s"} Blog
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            {/* tags here */}
          </p>
        </div>

        {posts.content.length == 0 && (
          <div className="flex flex-col justify-center items-center max-w-md text-center m-auto">
            <h2 className="mb-8 text-center font-extrabold text-5xl">
              No Posts yet!
            </h2>
          </div>
        )}
        <div className={cn("grid sm:grid-cols-2 gap-8 lg:grid-cols-3")}>
          {posts.content.length > 0 && (
            <>
              {posts.content.map((card) => (
                <ArticleItem key={card.id} card={card} />
              ))}
            </>
          )}
        </div>
        <div className="py-10 flex items-center justify-center space-y-2 text-xs sm:space-y-0 sm:space-x-3">
          {posts.totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                {PAGE > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      href={`/blog/${PAGE - 1 == 1 ? "" : PAGE - 1}`}
                    />
                  </PaginationItem>
                )}
                {PAGE - 2 >= 1 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                {PAGE - 1 >= 1 && (
                  <PaginationItem>
                    <PaginationLink href={`/blog/${PAGE - 1}`}>
                      {PAGE - 1}{" "}
                    </PaginationLink>
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    {PAGE}
                  </PaginationLink>
                </PaginationItem>

                {PAGE + 1 <= posts.totalPages && (
                  <PaginationItem>
                    <PaginationLink href={`/blog/${PAGE + 1}`}>
                      {PAGE + 1}{" "}
                    </PaginationLink>
                  </PaginationItem>
                )}
                {PAGE + 2 <= posts.totalPages && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                {PAGE < posts.totalPages && (
                  <PaginationItem>
                    <PaginationNext href={`/blog/${PAGE + 1}`} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>
    </>
  );
}
