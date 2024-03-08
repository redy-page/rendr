"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex items-center w-full h-screen p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-6xl">
            <a href="https://redy.page">
              <Icons.logo className="px-8 mb-8" />
            </a>
            <span className="sr-only">Error</span>Error
            <p className="text-2xl font-semibold">Something went wrong!</p>
          </h2>
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </div>
    </section>
  );
}
