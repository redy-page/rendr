"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { SocialIcon } from "react-social-icons";
import { useTheme } from "next-themes";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={cn(className)}>
      <div className="w-full m-auto text-center text-muted-foreground py-8">
        <p className="mb-6 text-foreground">&copy;{year} name</p>
        <a href="https://redy.page" target="_blank">
          <Icons.logoWithSymbol width={100} className="m-auto" />
        </a>
        <p className="text-xs  md:text-sm my-2">
          Powered by{" "}
          <a href="https://redy.page" target="_blank" className="underline">
            redy
          </a>{" "}
          - Empowering Your Digital Presence
        </p>

        <SocialIcon
          url="https://linkedin.com/company/redy-page"
          style={{ width: 30, height: 30 }}
          bgColor="transparent"
          fgColor={theme === "light" ? "black" : "white"}
          className="hover:bg-primary rounded-3xl"
        />
      </div>
    </footer>
  );
}
