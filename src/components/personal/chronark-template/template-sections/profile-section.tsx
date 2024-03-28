import Link from "next/link";
import React from "react";
import Particles from "../template-components/particles";
import { Profile, Social } from "@/lib/types";
import ModeToggle from "@/components/mode-toggle";
import SocialIcons from "../../social-icons";
import { FILES_SERVER } from "@/app/_internal/apiUtil";
import { Icons } from "@/components/icons";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function ChronarkProfile({
  profile,
  socials,
  resume,
}: {
  profile: Profile;
  socials: Social[];
  resume: string | null;
}) {
  return (
    <>
      <div
        id="home"
        className="flex flex-col items-center justify-center w-full min-h-screen overflow-hidden"
      >
        {resume && (
          <p className="animate-fade-in mx-auto my-8 text-muted-foreground">
            <Link
              className="flex hover:text-primary cursor-pointer items-center"
              href={`${FILES_SERVER}${resume}`}
              target="_blank"
            >
              My Resume <Icons.extLink className="ml-1" />
            </Link>
          </p>
        )}
        <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="z-10 text-center px-5 max-w-screen text-4xl duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl  ">
          {profile.firstName} {profile.lastName}
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="my-8 text-center animate-fade-in px-4 md:px-20">
          <p className="text-muted-foreground font-semibold">
            {profile.headline}
          </p>
          <SocialIcons socials={socials} iconSize={40} />
          <h2 className="my-4 text-sm text-muted-foreground whitespace-pre-line">
            {profile.about}
          </h2>
        </div>
      </div>
    </>
  );
}
