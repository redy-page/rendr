/* eslint-disable @next/next/no-img-element */
import { FILES_SERVER } from "@/app/_internal/apiUtil";
import { ArticleThumbnail } from "@/lib/types";

export default function ArticleCover({
  thumbnail,
}: {
  thumbnail: ArticleThumbnail | undefined;
}) {
  return (
    thumbnail && (
      <>
        {" "}
        <img
          className="w-full object-cover rounded-xl aspect-[1.91/1]"
          src={
            thumbnail.isUnsplash
              ? thumbnail.image + "&w=1080"
              : FILES_SERVER + thumbnail.image
          }
          alt="Thumbnail"
        />
        {thumbnail.isUnsplash && (
          <p className="text-center text-xs text-muted-foreground pt-1.5">
            Photo by{" "}
            <a
              href={`${thumbnail.photoByLink}?utm_source=redy&utm_medium=referral`}
              target="_blank"
              className="underline"
            >
              {thumbnail.photoBy}
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/?utm_source=redy&utm_medium=referral"
              target="_blank"
              className="underline"
            >
              Unsplash
            </a>
          </p>
        )}
      </>
    )
  );
}
