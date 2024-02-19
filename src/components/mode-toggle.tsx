"use client";

import { useTheme } from "next-themes";
import { Icons } from "./icons";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "light" && (
        <Icons.moon
          onClick={() => setTheme("dark")}
          className="hover:text-primary cursor-pointer"
        />
      )}
      {theme === "dark" && (
        <Icons.sun
          onClick={() => setTheme("light")}
          className="hover:text-primary cursor-pointer"
        />
      )}
    </>
  );
}
