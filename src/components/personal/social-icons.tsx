"use client";
import { Social } from "@/lib/types";
import { SocialIcon } from "react-social-icons";

export default function SocialIcons({
  socials,
  iconSize = 30,
}: {
  socials: Social[];
  iconSize?: number;
}) {
  return (
    <>
      <div className="px-2 py-1">
        {socials.map((social) => (
          <SocialIcon
            key={social.id}
            url={social.socialLink}
            style={{ width: iconSize, height: iconSize }}
            bgColor="transparent"
            fgColor={"gray"}
            className="hover:bg-secondary rounded-full"
            target="_blank"
          />
        ))}
      </div>
    </>
  );
}
