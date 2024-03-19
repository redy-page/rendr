import { PageTemplates } from "@/lib/enums";
import {
  Article,
  ArticleCard,
  Page,
  Pageable,
  PersonalProfile,
} from "@/lib/types";
import { notFound } from "next/navigation";

export const API_URL_SERVER = process.env.NEXT_INTERNAL_API_URL;

export const FILES_SERVER = process.env.NEXT_PUBLIC_FILES;

const domain = "jmadupalli.redy.page";

export const fetchPage = async (): Promise<Page> => {
  const res = await fetch(`${API_URL_SERVER}${domain}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status == 404) return notFound();
  if (!res.ok) {
    throw new Error("Something went wrong, Please try again");
  }
  return res.json();
};

export const fetchPageOrThrow = async () => {
  const page = await fetchPage();
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
  size: number
): Promise<Pageable<ArticleCard>> => {
  const res = await fetch(
    `${API_URL_SERVER}${domain}/post?page=${page - 1}&size=${size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (res.status == 404) return notFound();
  if (!res.ok) {
    throw new Error("Something went wrong, Please try again");
  }
  return res.json();
};

export const fetchArticle = async (postId: number): Promise<Article> => {
  const res = await fetch(`${API_URL_SERVER}${domain}/post/${postId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status == 404) return notFound();
  if (!res.ok) {
    throw new Error("Something went wrong, Please try again");
  }
  return res.json();
};

export const fetchProfileForPage = async (): Promise<PersonalProfile> => {
  const res = await fetch(`${API_URL_SERVER}${domain}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status == 404) return notFound();
  if (!res.ok) {
    throw new Error("Something went wrong, Please try again");
  }
  return res.json();
};
