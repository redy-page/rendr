import * as React from "react";
import { Icons } from "./icons";

export function SiteFooter({ pageTitle }: { pageTitle: string }) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="w-full m-auto text-center text-muted-foreground py-8">
        <p className="mb-6 text-foreground">
          &copy;{year} {pageTitle}
        </p>
        <span>
          <a href="https://redy.page" target="_blank">
            <Icons.logoWithSymbol width={100} className="m-auto inline-block" />
          </a>
        </span>
        <p className="text-xs  md:text-sm my-2">
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
