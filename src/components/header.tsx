"use client";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { Link as ScrollLink } from "react-scroll";
import { Page } from "@/lib/types";
import { isArrNotEmpty } from "@/lib/utils";

export default function Header({
  profileName,
  page,
}: {
  profileName: string;
  page: Page;
}) {
  return (
    <header className="w-full z-40 bg-background px-8 lg:px-12 md:fixed">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/"
            className="items-center space-x-2 flex text-sm md:text-lg lg:text-xl font-bold text-foreground hover:text-primary"
          >
            {profileName}
          </Link>
        </div>
        <nav className="flex md:space-x-5 lg:space-x-8">
          <div className="md:flex md:space-x-5 lg:space-x-8 hidden">
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
          </div>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
