import { PersonalTemplates } from "./template-index";
import { getPageTemplate } from "@/app/_internal/apiUtil";

export default async function PersonalPage() {
  const pageTemplate = await getPageTemplate();
  return <>{PersonalTemplates[pageTemplate]}</>;
}
