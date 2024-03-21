import { PageTemplates } from "@/lib/enums";
import {
  Article,
  ArticleCard,
  ArticleTagCount,
  Page,
  Pageable,
  PersonalProfile,
} from "@/lib/types";
import { notFound } from "next/navigation";

export const API_URL_SERVER = process.env.NEXT_INTERNAL_API_URL;

export const FILES_SERVER = process.env.NEXT_PUBLIC_FILES;

const getDomain = () => "jmadupalli.redy.page";

export const customFetchGet = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 300 },
  });
  if (res.status == 404) return notFound();
  if (!res.ok) {
    throw new Error("Something went wrong, Please try again");
  }
  return res.json();
};

export const fetchPageOrThrow = async () => {
  const page = await customFetchGet<Page>(`${API_URL_SERVER}${getDomain()}`);
  if (!page.enabled) return notFound();
  return page;
};

export const getPageType = async () => {
  const page = await fetchPageOrThrow();
  return page.type;
};

export const getPageTemplate = async () => {
  const page = await fetchPageOrThrow();
  return page.template as PageTemplates;
};

export const getProfile = async () => {
  const page = await fetchPageOrThrow();
  return {
    profile: page.personal.profile,
    resume: page.personal.resume,
    avatar: page.personal.profilePicture,
  };
};

export const getProfileName = async () => {
  const profile = await getProfile();
  return `${profile.profile.firstName} ${profile.profile.lastName}`;
};

export const getSocials = async () => {
  const page = await fetchPageOrThrow();
  return page.personal.socials;
};

export const getEducation = async () => {
  const page = await fetchPageOrThrow();
  return page.personal.education;
};

export const getExperience = async () => {
  const page = await fetchPageOrThrow();
  return page.personal.experiences;
};

export const getProjects = async () => {
  const page = await fetchPageOrThrow();
  return page.personal.projects;
};

export const getSkills = async () => {
  const page = await fetchPageOrThrow();
  return page.personal.skills;
};

export const getContact = async () => {
  const page = await fetchPageOrThrow();
  return { email: page.personal.profile.email, socials: page.personal.socials };
};

export const fetchArticleCards = async (
  page: number,
  size: number,
  tag?: string
): Promise<Pageable<ArticleCard>> => {
  return customFetchGet<Pageable<ArticleCard>>(
    `${API_URL_SERVER}${getDomain()}/post?page=${page - 1}&size=${size}${
      tag !== undefined ? `&tag=${tag}` : ""
    }`
  );
};

export const fetchArticleCard = async (
  postId: number
): Promise<ArticleCard> => {
  return customFetchGet<ArticleCard>(
    `${API_URL_SERVER}${getDomain()}/post/${postId}/meta`
  );
};

export const fetchArticle = async (postId: number): Promise<Article> => {
  return customFetchGet<Article>(
    `${API_URL_SERVER}${getDomain()}/post/${postId}`
  );
};

export const fetchProfileForPage = async (): Promise<PersonalProfile> => {
  return customFetchGet<PersonalProfile>(
    `${API_URL_SERVER}${getDomain()}/profile`
  );
};

export const fetchArticleTagCounts = async (): Promise<ArticleTagCount[]> => {
  return customFetchGet<ArticleTagCount[]>(
    `${API_URL_SERVER}${getDomain()}/post/tags`
  );
};
