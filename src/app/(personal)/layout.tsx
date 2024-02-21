import Header from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { getProfile, getProfileName } from "../_internal/apiUtil";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const domain = "jmadupalli.redy.page";

  const { profile } = await getProfile(domain);

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
  const domain = "jmadupalli.redy.page";
  const profileName = await getProfileName(domain);

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header profileName={profileName} />
        <main className="flex-1">{children}</main>
        <SiteFooter profileName={profileName} />
      </div>
    </>
  );
}
