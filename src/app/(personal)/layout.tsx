import Header from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { fetchPageOrThrow, getProfile } from "../_internal/apiUtil";
import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("host");

  const { profile } = await getProfile();

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
      title: `${profile.firstName} ${profile.lastName} - ${profile.headline}`,
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
  const page = await fetchPageOrThrow();
  const profileName = `${page.personal.profile.firstName} ${page.personal.profile.lastName}`;

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header profileName={profileName} page={page} />
        <main className="flex-1">{children}</main>
        <SiteFooter profileName={profileName} />
      </div>
    </>
  );
}
