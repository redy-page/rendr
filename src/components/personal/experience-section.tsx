import { getEducation, getExperience } from "@/app/_internal/apiUtil";
import Timeline from "../timeline";

export default async function ExperienceSection() {
  const experiences = await getExperience("jmadupalli.redy.page");

  return (
    experiences &&
    experiences.length > 0 && (
      <>
        <section
          id="experience"
          className="min-h-screen flex flex-col justify-center items-center"
        >
          <div className=" flex flex-1 flex-col items-center justify-center pb-8">
            <Timeline type="Experience" elements={experiences} />
          </div>
        </section>
        <span className="mt-1 w-[50%] mx-auto block border-t" />
      </>
    )
  );
}
