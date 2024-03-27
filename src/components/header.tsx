import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";
import { PageMeta } from "@/lib/types";
import { getPageTitle } from "@/app/_internal/apiUtil";

export default function Header({ meta }: { meta: PageMeta }) {
  return (
    <header className="w-full z-40 bg-background px-8 lg:px-12">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/"
            scroll={false}
            className="items-center space-x-2 flex text-sm md:text-lg lg:text-xl font-bold text-foreground hover:text-primary"
          >
            {getPageTitle(meta)}
          </Link>
        </div>
        <nav className="flex space-x-5 lg:space-x-8">
          <Link href="/" scroll={false} className="hover:text-primary">
            Home
          </Link>

          {meta.blogEnabled && (
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
          )}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
