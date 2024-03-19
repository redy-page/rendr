import { FILES_SERVER } from "@/app/_internal/apiUtil";
import { ArticleCard, PersonalProfile } from "@/lib/types";
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
          src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
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
