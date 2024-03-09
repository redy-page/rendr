import DefaultContact from "./template-sections/contact-section";
import DefaultEducation from "./template-sections/education-section";
import DefaultExperience from "./template-sections/experience-section";
import DefaultProfile from "./template-sections/profile-section";
import DefaultProjects from "./template-sections/projects-section";
import DefaultSkills from "./template-sections/skills-section";

export default function DefaultPersonal() {
  return (
    <>
      <DefaultProfile />
      <DefaultEducation />
      <DefaultExperience />
      <DefaultSkills />
      <DefaultProjects />
      <DefaultContact />
    </>
  );
}
