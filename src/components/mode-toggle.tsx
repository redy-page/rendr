"use client";

import { useTheme } from "next-themes";
import { Icons } from "./icons";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ModeToggle({ className }: { className?: string }) {
  const [currTheme, setCurrTheme] = useState<string | undefined>(undefined);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "system") setCurrTheme(systemTheme);
    else setCurrTheme(theme);
  }, [theme, systemTheme]);

  return (
    <>
      <div className={cn("flex items-center", className)}>
        {currTheme !== "dark" && (
          <Icons.moon
            onClick={() => setTheme("dark")}
            className="hover:text-primary cursor-pointer"
          />
        )}
        {currTheme === "dark" && (
          <Icons.sun
            onClick={() => setTheme("light")}
            className="hover:text-primary cursor-pointer"
          />
        )}
      </div>
    </>
  );
}
