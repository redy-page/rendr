import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn(className)}>
      <div className="w-full m-auto text-center text-muted-foreground py-8">
        <p className="mb-6">&copy;{year} name</p>
        <a href="https://redy.page" target="_blank">
          <Icons.logoWithSymbol width={100} className="m-auto" />
        </a>
        <p className="text-sm my-2">
          Powered by{" "}
          <a href="https://redy.page" target="_blank" className="underline">
            redy
          </a>{" "}
          - Empowering Your Digital Presence
        </p>
      </div>
    </footer>
  );
}
