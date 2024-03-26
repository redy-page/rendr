import { SiteFooter } from "@/components/site-footer";
import { fetchPageMetaOrThrow, getPageTitle } from "../_internal/apiUtil";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const domain = "jmadupalli.redy.page";

  const { personal } = await fetchPageMetaOrThrow();
  const profile = personal.profile;

  return {
    title: {
      template: `%s | ${profile.firstName} ${profile.lastName}`,
      default: `${profile.firstName} ${profile.lastName} - ${profile.headline}`,
    },
    description: profile.about,
    authors: [{ name: `${profile.firstName} ${profile.lastName}` }],
    publisher: "redy.page",
    generator: "redy.page",
    metadataBase: new URL("https://" + domain),
    openGraph: {
      title: {
        template: `%s | ${profile.firstName} ${profile.lastName}`,
        default: `${profile.firstName} ${profile.lastName} - ${profile.headline}`,
      },
      description: profile.about,
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
