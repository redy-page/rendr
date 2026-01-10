"use client";
import { Social } from "@/lib/types";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

export default function SocialIcons({ socials }: { socials: Social[] }) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!socials || socials.length === 0 || !mounted) return <></>;

  return (
    <>
      <span className="mt-1 w-[40%] mx-auto block border-t" />
      <div className="px-2 py-1">
        {socials.map((social) => (
          <SocialIcon
            key={social.id}
            url={social.socialLink}
            style={{ width: 30, height: 30 }}
            bgColor="transparent"
            fgColor={theme === "dark" ? "white" : "gray"}
            className="hover:bg-secondary rounded-full"
            target="_blank"
          />
        ))}
      </div>
    </>
  );
}
