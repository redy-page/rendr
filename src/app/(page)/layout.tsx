import { SiteFooter } from "@/components/site-footer";
import { fetchPageMetaOrThrow } from "../_internal/apiUtil";
import { Metadata } from "next";
import { headers } from "next/headers";
import { getPageTitle } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("host");

  const { profile: pageProfile } = await fetchPageMetaOrThrow();

  return {
    title: {
      template: `%s | ${pageProfile.pageTitle}`,
      default: `${pageProfile.pageTitle} - ${pageProfile.headline}`,
    },
    description: pageProfile.about,
    publisher: "redy.page",
    generator: "redy.page",
    metadataBase: new URL("https://" + domain),
    openGraph: {
      title: {
        template: `%s | ${pageProfile.pageTitle}`,
        default: `${pageProfile.pageTitle} - ${pageProfile.headline}`,
      },
      description: pageProfile.about,
      url: "https://" + domain,
      type: "website",
    },
  };
}

export default async function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageMeta = await fetchPageMetaOrThrow();

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        <SiteFooter pageTitle={getPageTitle(pageMeta)} />
      </div>
    </>
  );
}
