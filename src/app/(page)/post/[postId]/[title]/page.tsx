import {
  FILES_SERVER,
  fetchArticle,
  fetchProfileForPage,
} from "@/app/_internal/apiUtil";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { Icons } from "@/components/icons";
import ArticleCover from "@/components/blog/article-cover";

type Props = {
  params: { postId: string; title: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postId = parseInt(params.postId);
  if (isNaN(postId)) return notFound();
  const post = await fetchArticle(postId);

  return {
    title: post.title,
    openGraph: {
      title: post.title,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const postId = parseInt(params.postId);
  if (isNaN(postId)) return notFound();
  const post = await fetchArticle(postId);
  const profile = await fetchProfileForPage();

  const { content } = await compileMDX({
    source: post.content,
    options: {
      mdxOptions: {
        /* @ts-ignore: rehypeHighlight */
        rehypePlugins: [rehypeHighlight],
        format: "mdx",
      },
    },
  });

  return (
    <>
      <div className="max-w-4xl px-6 pt-6 lg:pt-10 pb-12 lg:px-8 mx-auto">
        <div className="mx-auto">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-5">
              <h2 className="max-w-4xl text-2xl font-bold md:text-4xl dark:text-white text-center mx-auto">
                {post.title}
              </h2>
              <div className="flex justify-center items-center px-5">
                <div className="flex-shrink-0 mr-1">
                  <Avatar className="w-10 h-10">
                    {false ? (
                      <Image
                        src={FILES_SERVER + profile.profilePicture}
                        width={40}
                        height={40}
                        alt="Avatar"
                      />
                    ) : (
                      <Icons.user className="w-10 h-10" />
                    )}
                  </Avatar>
                </div>
                <div>
                  <ul className="text-sm text-gray-500">
                    <li className="font-semibold text-gray-800 dark:text-gray-200 inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:before:bg-gray-600">
                      {profile.profile.firstName} {profile.profile.lastName}
                    </li>
                    <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                      {new Date(post.createdAt).toLocaleDateString("en-us", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </li>
                    <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                      <Icons.reader className="inline mr-1 mb-1" />
                      {Math.ceil(post.wordCount / 180)} min read
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <ArticleCover thumbnail={post.thumbnail} />
            </div>
            <div className="post-md-content px-2 text-lg max-w-3xl mx-auto">
              {content}
            </div>

            <div>
              {post.postTags.map((tag) => (
                <p
                  key={tag.id}
                  className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-secondary"
                >
                  {tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-6 inset-x-0 text-center">
        <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-gray-800">
          <div className="flex items-center gap-x-1.5">
            <div className="hs-tooltip inline-block">
              <button
                type="button"
                className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <Icons.heart />
                {post.likeCount}
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black"
                  role="tooltip"
                >
                  Like
                </span>
              </button>
            </div>

            <div className="block h-3 border-e border-gray-300 mx-3 dark:border-gray-600"></div>

            <div className="hs-tooltip inline-block">
              <button
                type="button"
                className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <Icons.reader />
                16
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black"
                  role="tooltip"
                >
                  Comment
                </span>
              </button>
            </div>

            <div className="block h-3 border-e border-gray-300 mx-3 dark:border-gray-600"></div>

            <div className="hs-dropdown relative inline-flex">
              <button
                type="button"
                id="blog-article-share-dropdown"
                className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <Icons.share />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
