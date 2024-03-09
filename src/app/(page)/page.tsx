import { PageTypes } from "@/lib/enums";
import { getPageType } from "../_internal/apiUtil";
import PersonalPage from "@/components/personal/personal-page";

export default async function Home() {
  const pageType = await getPageType();
  return <>{pageType == PageTypes.PERSONAL && <PersonalPage />}</>;
}
