import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Experience, Project } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const monthsToNumber = new Map<string, string>(
  Object.entries({
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  })
);

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const sortExperiences = (experience: Experience[]) => {
  const previousJobs = experience.filter((exp) => !exp.current);
  const currentJobs = experience.filter((exp) => exp.current);
  currentJobs.sort(
    (a, b) =>
      Number(b.stYear + "" + monthsToNumber.get(b.stMonth)) -
      Number(a.stYear + "" + monthsToNumber.get(a.stMonth))
  );
  previousJobs.sort(
    (a, b) =>
      Number(b.endYear + "" + monthsToNumber.get(b.endMonth)) -
      Number(a.endYear + "" + monthsToNumber.get(a.endMonth))
  );
  return [...currentJobs, ...previousJobs];
};

export const sortProjects = (projects: Project[]) => {
  const currYear = new Date().getFullYear();
  projects.sort(
    (a, b) =>
      Number(
        (b.year ?? currYear) + "" + monthsToNumber.get(b.month ?? "December")
      ) -
      Number(
        (a.year ?? currYear) + "" + monthsToNumber.get(a.month ?? "December")
      )
  );
  return projects;
};

export const isArrNotEmpty = (arr: any[]) => {
  return arr && arr.length > 0;
};

export const makeTitlePretty = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
    .replace(/-$/, "");
};
