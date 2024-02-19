"use client";
import { Social } from "@/lib/types";
import { useTheme } from "next-themes";
import { SocialIcon } from "react-social-icons";

export default function SocialIcons({ socials }: { socials: Social[] }) {
  const { theme } = useTheme();

  return (
    <div className="px-2 py-1">
      {socials.map((social) => (
        <SocialIcon
          key={social.id}
          url={social.socialLink}
          style={{ width: 30, height: 30 }}
          bgColor="transparent"
          fgColor={theme === "dark" ? "white" : "gray"}
          className="hover:bg-secondary rounded-3xl"
          target="_blank"
        />
      ))}
    </div>
  );
}
