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
      <DefaultPersonalHeader page={page} />
      <DefaultProfile
        profile={profile}
        avatar={avatar}
        resume={resume}
        socials={socials}
      />
      <DefaultEducation education={education} />
      <DefaultExperience experiences={experiences} />
      <DefaultSkills skills={skills} />
      <DefaultProjects projects={projects} />
      <DefaultContact socials={socials} email={profile.email} />
    </>
  );
}
