import { Icons } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <section className="flex items-center w-full h-screen p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-6xl">
              <a href="https://redy.page">
                <Icons.logo className="px-16" />
              </a>
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold">
              Sorry, we {"couldn't"} find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
