import { PageTemplates, PageTypes } from "../enums";

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;

export type Page = {
  id: number;
  type: PageTypes;
  domain: string;
  enabled: boolean;
  template: string;
  profile: PageProfile;
  personal: PersonalPage;
  blogEnabled: boolean;
};

export type PageMeta = Omit<Page, "personal">;

export type PersonalPage = {
  id: number;
  resume: string | null;
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
};

export type PageProfile = {
  id: number;
  email: string;
  pageTitle: string;
  pagePicture: string;
  headline: string;
  about: string;
  socials: Social[];
};

export type School = {
  id: number;
  name: string;
};

export type Education = {
  id: number;
  school: School;
  major: string;
  degree: string;
  endMonth: string;
  endYear: number;
  description: string;
};

export type ExpType = "Internship" | "Part-Time" | "Full-Time" | "Contract";

export type Company = {
  id: number;
  name: string;
};

export type Experience = {
  id: number;
  company: Company;
  position: string;
  location: string;
  exType: ExpType;
  stMonth: string;
  stYear: number;
  endMonth: string;
  endYear: number;
  description: string;
  current: boolean;
};

export type Project = {
  id: number;
  name: string;
  link: string;
  description: string;
  month: string;
  year: number;
  thumbnail: string | null;
};

export type Skill = {
  id: number;
  category: string;
  skillList: string;
};

export type Social = {
  id: number;
  socialLink: string;
};

export type TimelineProps = {
  type: "Experience" | "Education";
  elements: Experience[] | Education[];
};

export type Pageable<T> = {
  content: T[];
  totalPages: number;
  totalElements: number;
};

export type ArticleTag = {
  name: string;
};

export type PersonalProfile = {
  id: number;
  profile: Profile;
  profilePicture: string;
  socials: Social[];
};

export type ArticleAuthor = {
  firstName: string;
  lastName: string;
  profilePicture: string;
};

export type ArticleCard = {
  id: number;
  title: string;
  pageId: number;
  thumbnail: ArticleThumbnail | undefined;
  wordCount: number;
  description: string;
  user: ArticleAuthor;
  postTags: ArticleTag[];
  createdAt: number;
  updatedAt: number;
};

export type ArticleThumbnail = {
  image: string;
  photoBy: string;
  photoByLink: string;
  isUnsplash: boolean;
};

export type Article = ArticleCard & {
  content: string;
  likeCount: number;
};

export type ArticleTagCount = ArticleTag & {
  count: number;
};
