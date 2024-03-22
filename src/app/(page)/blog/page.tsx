import {
  fetchArticleCards,
  fetchPageMetaOrThrow,
} from "@/app/_internal/apiUtil";
import ArticleItem from "@/components/blog/article-item";
import ArticleTags from "@/components/blog/article-tags";
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
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const PAGE = searchParams?.page ? parseInt(searchParams.page) : 1;
  const TAG = searchParams?.tag ?? undefined;
  if (isNaN(PAGE) || PAGE === 0) return notFound();
  const PAGE_SIZE = 9;
  const posts = await fetchArticleCards(PAGE, PAGE_SIZE, TAG);
  if (PAGE !== 1 && PAGE > posts.totalPages) return notFound();
  const { personal: profile } = await fetchPageMetaOrThrow();
  return (
    <>
      <section className="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 mx-auto">
        <div className="mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl max-w-2xl font-bold md:text-4xl md:leading-tight mx-auto">
            {profile.profile.firstName + "'s"} Blog
          </h2>
        </div>
        <div className="grid mx-auto m-8">
          <ArticleTags activeTag={TAG} />
        </div>

        {posts.content.length == 0 && (
          <div className="flex flex-col justify-center items-center max-w-md text-center m-auto">
            <h2 className="mb-8 text-center font-extrabold text-xl">
              No Posts yet!
            </h2>
          </div>
        )}
        <div
          className={cn(
            "grid sm:grid-cols-2 gap-8",
            posts.content?.length > 2 && "lg:grid-cols-3"
          )}
        >
          {posts.content && posts.content.length > 0 && (
            <>
              {posts.content.map((card) => (
                <ArticleItem
                  key={card.id}
                  card={card}
                  profile={{
                    name: `${profile.profile.firstName} ${profile.profile.lastName}`,
                    picture: profile.profilePicture,
                  }}
                />
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
                      href={`/blog/${
                        PAGE - 1 == 1 ? "" : "?page=" + (PAGE - 1)
                      }`}
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
                    <PaginationLink
                      href={`/blog/${
                        PAGE - 1 == 1 ? "" : "?page=" + (PAGE - 1)
                      }`}
                    >
                      {PAGE - 1}
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
                    <PaginationLink href={`/blog/?page=${PAGE + 1}`}>
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
                    <PaginationNext href={`/blog/?page=${PAGE + 1}`} />
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
