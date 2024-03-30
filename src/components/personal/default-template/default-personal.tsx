import { fetchPageOrThrow } from "@/app/_internal/apiUtil";
import DefaultContact from "./template-sections/contact-section";
import DefaultEducation from "./template-sections/education-section";
import DefaultExperience from "./template-sections/experience-section";
import DefaultPersonalHeader from "./template-sections/personal-header";
import DefaultProfile from "./template-sections/profile-section";
import DefaultProjects from "./template-sections/projects-section";
import DefaultSkills from "./template-sections/skills-section";

export default async function DefaultPersonal() {
  const page = await fetchPageOrThrow();
  const { resume, education, experiences, skills, projects } = page.personal;

  return (
    <>
      <DefaultPersonalHeader page={page} />
      <DefaultProfile profile={page.profile} resume={resume} />
      <DefaultEducation education={education} />
      <DefaultExperience experiences={experiences} />
      <DefaultSkills skills={skills} />
      <DefaultProjects projects={projects} />
      <DefaultContact
        socials={page.profile?.socials}
        email={page.profile?.email}
      />
    </>
  );
}
