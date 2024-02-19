import Link from "next/link";
import ModeToggle from "./mode-toggle";

export default function Header() {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/"
            className="items-center space-x-2 flex text-sm md:text-lg lg:text-xl"
          >
            Name here
          </Link>
        </div>
        <nav>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
