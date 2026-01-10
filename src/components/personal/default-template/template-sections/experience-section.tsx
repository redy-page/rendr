import Timeline from "../../../timeline";
import { sortExperiences } from "@/lib/utils";
import { Experience } from "@/lib/types";

export default async function DefaultExperience({
  experiences,
}: {
  experiences: Experience[];
}) {
  experiences = sortExperiences(experiences);
  return (
    experiences &&
    experiences.length > 0 && (
      <>
        <section
          id="experience"
          className="min-h-screen flex flex-col justify-center items-center md:pt-20 py-8"
        >
          <Timeline type="Experience" elements={experiences} />
        </section>
        <span className="mt-1 w-[50%] mx-auto block border-t" />
      </>
    )
  );
}
