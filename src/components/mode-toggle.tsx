"use client";

import { useTheme } from "next-themes";
import { Icons } from "./icons";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [currTheme, setCurrTheme] = useState<string | undefined>(undefined);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme, systemTheme);
    if (theme === "system") setCurrTheme(systemTheme);
    else setCurrTheme(theme);
    setMounted(true);
  }, [theme, systemTheme]);

  return (
    <>
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
    </>
  );
}
