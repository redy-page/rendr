import { PageTemplates } from "@/lib/enums";
import DefaultPersonal from "./default-template/default-personal";
import ChronarkPersonal from "./chronark-template/chronark-personal";

export const PersonalTemplates = {
  [PageTemplates.P_DEFAULT]: <DefaultPersonal />,
  [PageTemplates.P_CHRONARK]: <ChronarkPersonal />,
};
