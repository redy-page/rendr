"use client";

import { useTheme } from "next-themes";
import { Icons } from "./icons";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
