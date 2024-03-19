/* eslint-disable @next/next/no-img-element */
import { FILES_SERVER } from "@/app/_internal/apiUtil";
import { ArticleCard } from "@/lib/types";
import { headers } from "next/headers";
import { Icons } from "../icons";

export default function ArticleThumbnail({
  articleMeta,
}: {
  articleMeta: ArticleCard;
}) {
  return (
    <>
      {articleMeta.thumbnail ? (
        <img
          className="w-full object-cover rounded-xl aspect-[1.91/1]"
          src={
            articleMeta.thumbnail.isUnsplash
              ? articleMeta.thumbnail.image + "&w=600"
              : FILES_SERVER + articleMeta.thumbnail.image
          }
          alt="Thumbnail"
        />
      ) : (
        <div className="w-full h-full flex flex-col rounded-xl justify-center bg-secondary border-t-[5px] border-red-600 p-2 md:p-4">
          <div className="flex flex-col items-start text-xs">
            {headers().get("host")}
          </div>
          <div className="flex flex-1 flex-col justify-center items-center px-8 lg:px-12 py-2">
            <span className="text-xs md:text-base xl:text-xl font-semibold">
              {articleMeta.title}
            </span>
          </div>
          <div className="flex flex-row justify-between items-center px-4 py-1"></div>

          <div className="flex justify-end">
            <Icons.logoWithSymbol width={50} className="flex flex-row" />
          </div>
        </div>
      )}
    </>
  );
}
