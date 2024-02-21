import { Page } from "@/lib/types";
import { notFound } from "next/navigation";

export const API_URL_SERVER = process.env.NEXT_INTERNAL_API_URL;

export const fetchPage = async (domain: string): Promise<Page> => {
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

export const fetchPageOrThrow = async (domain: string) => {
  const page = await fetchPage(domain);
  if (!page.enabled) return notFound();
  return page;
};

export const getProfile = async (domain: string) => {
  const page = await fetchPageOrThrow(domain);
  return { profile: page.personal.profile, resume: page.personal.resume };
};

export const getProfileName = async (domain: string) => {
  const profile = await getProfile(domain);
  return `${profile.profile.firstName} ${profile.profile.lastName}`;
};

export const getSocials = async (domain: string) => {
  const page = await fetchPageOrThrow(domain);
  return page.personal.socials;
};

export const getEducation = async (domain: string) => {
  const page = await fetchPageOrThrow(domain);
  return page.personal.education;
};

export const getExperience = async (domain: string) => {
  const page = await fetchPageOrThrow(domain);
  return page.personal.experiences;
};

export const getProjects = async (domain: string) => {
  const page = await fetchPageOrThrow(domain);
  return page.personal.projects;
};

export const getSkills = async (domain: string) => {
  const page = await fetchPageOrThrow(domain);
  return page.personal.skills;
};

export const getContact = async (domain: string) => {
  const page = await fetchPageOrThrow(domain);
  return { email: page.personal.profile.email, socials: page.personal.socials };
};
