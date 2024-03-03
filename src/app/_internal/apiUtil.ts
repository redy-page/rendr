import { Page } from "@/lib/types";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export const API_URL_SERVER = process.env.NEXT_INTERNAL_API_URL;

export const FILES_SERVER = process.env.NEXT_PUBLIC_FILES;

export const fetchPage = async (): Promise<Page> => {
  const domain = headers().get("host");
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
