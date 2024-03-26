/* eslint-disable @next/next/no-img-element */
import {
  FILES_SERVER,
  fetchArticleCard,
  fetchPageMetaOrThrow,
} from "@/app/_internal/apiUtil";
import { Icons } from "@/components/icons";
import { headers } from "next/headers";
import { ImageResponse } from "next/og";

export const contentType = "image/png";

export default async function ArticleOGImage({
  params,
}: {
  params: { postId: string; title?: string };
}) {
  const postId = parseInt(params.postId);
  if (isNaN(postId)) return null;
  const articleMeta = await fetchArticleCard(postId);
  const { personal: profile } = await fetchPageMetaOrThrow();

  return new ImageResponse(
    (
      <>
        {articleMeta.thumbnail ? (
          <>
            <img
              src={
                articleMeta.thumbnail.isUnsplash
                  ? articleMeta.thumbnail.image + "&w=1200&h=630"
                  : articleMeta.thumbnail.image
              }
              alt="Article Cover"
              className="object-cover w-full h-full"
            />
          </>
        ) : (
          <div tw="w-full h-[100vh] flex flex-col justify-center bg-black border-t-[15px] border-red-600 text-white">
            <div tw="flex flex-col items-center text-4xl pt-8">
              {headers().get("host")}
            </div>
            <div tw="flex flex-1 flex-col justify-center items-center px-36">
              <span tw="text-7xl">{articleMeta.title}</span>
            </div>
            <div tw="flex flex-row justify-between px-10 py-6">
              <div tw="flex flex-row text-gray-300 justify-start items-center">
                {profile.profilePicture && (
                  <img
                    src={`${FILES_SERVER}${profile.profilePicture}`}
                    tw="w-18 h-18 rounded-full flex mr-4"
                    style={{ objectFit: "cover" }}
                    alt="Avatar"
                  />
                )}
                <div tw="flex flex-col mt-2 text-3xl">
                  <span tw="inline-block font-semibold text-5xl">
                    {profile.profile.firstName} {profile.profile.lastName}
                  </span>
                  <span tw="inline-block">
                    {new Date(articleMeta.createdAt).toDateString()} •{" "}
                    {Math.ceil(articleMeta.wordCount / 180)} min read
                  </span>
                </div>
              </div>

              <div tw="flex flex-row">
                <Icons.logoWithSymbol width={180} tw="flex flex-row" />
              </div>
            </div>
          </div>
        )}
      </>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
