import { fetchPageOrThrow } from "@/app/_internal/apiUtil";
import ChronarkProfile from "./template-sections/profile-section";
import Particles from "./template-components/particles";
import DefaultEducation from "../default-template/template-sections/education-section";
import ChronarkHeader from "./template-sections/personal-header";
import DefaultExperience from "../default-template/template-sections/experience-section";
import DefaultSkills from "../default-template/template-sections/skills-section";
import DefaultProjects from "../default-template/template-sections/projects-section";
import DefaultContact from "../default-template/template-sections/contact-section";
import "./template.css";
export default async function ChronarkPersonal() {
  const page = await fetchPageOrThrow();
  const {
    profile,
    profilePicture: avatar,
    resume,
    socials,
    education,
    experiences,
    skills,
    projects,
  } = page.personal;

  return (
    <>
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in w-screen"
        quantity={150}
      />
      <ChronarkHeader page={page} />
      <ChronarkProfile profile={profile} resume={resume} socials={socials} />
      <DefaultEducation education={education} />
      <DefaultExperience experiences={experiences} />
      <DefaultSkills skills={skills} />
      <DefaultProjects projects={projects} />
      <DefaultContact socials={socials} email={profile.email} />
    </>
  );
}
