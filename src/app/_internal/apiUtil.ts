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

export const getProfile = async (domain: string) => {
  const page = await fetchPage(domain);
  if (!page.enabled) return notFound();

  return page.personal.profile;
};

export const getProfileName = async (domain: string) => {
  const profile = await getProfile(domain);
  return `${profile.firstName} ${profile.lastName}`;
};

export const getSocials = async (domain: string) => {
  const page = await fetchPage(domain);
  if (!page.enabled) return notFound();

  return page.personal.socials;
};
