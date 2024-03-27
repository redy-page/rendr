import { fetchPageOrThrow } from "@/app/_internal/apiUtil";
import ChronarkProfile from "./template-sections/profile-section";
import Particles from "./template-components/particles";
import DefaultEducation from "../default-template/template-sections/education-section";
import ChronarkHeader from "./template-sections/personal-header";

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
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <ChronarkHeader page={page} />
      <ChronarkProfile profile={profile} resume={resume} socials={socials} />
      <DefaultEducation education={education} />
    </>
  );
}
