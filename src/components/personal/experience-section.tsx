import { getExperience } from "@/app/_internal/apiUtil";
import Timeline from "../timeline";
import { sortExperiences } from "@/lib/utils";

export default async function ExperienceSection() {
  let experiences = await getExperience();
  experiences = sortExperiences(experiences);
  return (
    experiences &&
    experiences.length > 0 && (
      <>
        <section
          id="experience"
          className="min-h-screen flex flex-row justify-center items-center md:pt-20 py-8"
        >
          <Timeline type="Experience" elements={experiences} />
        </section>
        <span className="mt-1 w-[50%] mx-auto block border-t" />
      </>
    )
  );
}
