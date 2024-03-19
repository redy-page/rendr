/* eslint-disable @next/next/no-img-element */
import { FILES_SERVER, fetchProfileForPage } from "@/app/_internal/apiUtil";
import { ArticleCard } from "@/lib/types";
import { makeTitlePretty } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Icons } from "../icons";

export default async function ArticleItem({ card }: { card: ArticleCard }) {
  const profile = await fetchProfileForPage();

  const readCalculation = () => Math.ceil(card.wordCount / 180);

  const createdAt = new Date(card.createdAt);
  return (
    <>
      <Link
        className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-gray-400 dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href={`/post/${card.id}/${makeTitlePretty(card.title)}`}
      >
        <div className="aspect-[1.91/1]">
          <img
            className="w-full object-cover rounded-xl aspect-[1.91/1]"
            src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            alt="Thumbnail"
          />
        </div>
        <div className="my-5">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 dark:group-hover:text-white group-hover:text-black">
            {card.title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="my-1">
              {card.postTags.map((tag) => (
                <p
                  key={tag.id}
                  className="inline-flex items-center mr-1 py-1.5 px-3 rounded-md text-xs font-medium bg-secondary"
                >
                  {tag.name}
                </p>
              ))}
            </div>
            <div className="flex text-sm text-muted-foreground">
              {createdAt.toLocaleDateString("en-us", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            {card.description.replace(/[^\w ]/g, " ")}...
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-x-3">
          <div className="flex items-center">
            <Avatar className="w-8 h-8">
              {profile.profilePicture ? (
                <Image
                  src={FILES_SERVER + profile.profilePicture}
                  width={32}
                  height={32}
                  alt="Avatar"
                />
              ) : (
                <Icons.user className="w-8 h-8" />
              )}
            </Avatar>
            <div>
              <h5 className="ml-2 text-sm text-muted-foreground font-semibold">
                {profile.profile.firstName} {profile.profile.lastName}
              </h5>
            </div>
          </div>
          <div className="flex text-xs text-muted-foreground items-center">
            <Icons.reader className="mr-1" /> {readCalculation()} min read
          </div>
        </div>
      </Link>
    </>
  );
}
