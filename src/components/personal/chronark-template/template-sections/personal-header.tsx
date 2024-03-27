"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { isArrNotEmpty } from "@/lib/utils";
import ModeToggle from "@/components/mode-toggle";
import { Page } from "@/lib/types";

export default function ChronarkHeader({ page }: { page: Page }) {
  return (
    <header className="hidden lg:flex w-full animate-fade-in z-40 p-8 fixed top-0 text-muted-foreground">
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <ScrollLink
            to="home"
            smooth={true}
            className="flex hover:text-primary cursor-pointer"
          >
            Home
          </ScrollLink>
          {isArrNotEmpty(page.personal.education) && (
            <ScrollLink
              to="education"
              smooth={true}
              className="flex hover:text-primary cursor-pointer"
            >
              Education
            </ScrollLink>
          )}
          {isArrNotEmpty(page.personal.experiences) && (
            <ScrollLink
              to="experience"
              smooth={true}
              className="flex hover:text-primary cursor-pointer"
            >
              Experience
            </ScrollLink>
          )}
          {isArrNotEmpty(page.personal.skills) && (
            <ScrollLink
              to="skills"
              smooth={true}
              className="flex hover:text-primary cursor-pointer"
            >
              Skills
            </ScrollLink>
          )}
          {isArrNotEmpty(page.personal.projects) && (
            <ScrollLink
              to="projects"
              smooth={true}
              className="flex hover:text-primary cursor-pointer"
            >
              Projects
            </ScrollLink>
          )}
          <ScrollLink
            to="contact"
            smooth={true}
            className="flex hover:text-primary cursor-pointer"
          >
            Contact
          </ScrollLink>
          {page.blogEnabled && (
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
          )}
          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
}
