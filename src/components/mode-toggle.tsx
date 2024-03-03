"use client";

import { useTheme } from "next-themes";
import { Icons } from "./icons";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const [currTheme, setCurrTheme] = useState<string | undefined>(undefined);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "system") setCurrTheme(systemTheme);
    else setCurrTheme(theme);
  }, [theme, systemTheme]);

  return (
    <>
      <div className="flex items-center">
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
