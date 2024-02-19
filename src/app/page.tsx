import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center space-y-6 pb-8 md:pb-12 lg:pb-32 lg:pt-16">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          href=""
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          Follow along on Linkedin
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl">
          Digital Presence For Everyone
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Create instant, stunning personal websites. No more waiting, no more
          hassle—just a swift and intuitive experience tailored for you. Are you
          ready to make your mark online?
        </p>
        <div className="space-x-4">
          <Link href="/register" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
