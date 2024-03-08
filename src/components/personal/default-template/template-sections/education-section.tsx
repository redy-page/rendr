import { getEducation } from "@/app/_internal/apiUtil";
import Timeline from "../../../timeline";

export default async function DefaultEducation() {
  const education = await getEducation();
  education.sort((a, b) => b.endYear - a.endYear);
  return (
    education &&
    education.length > 0 && (
      <>
        <section
          id="education"
          className="min-h-screen flex flex-col justify-center items-center md:pt-20 py-8"
        >
          <Timeline type="Education" elements={education} />
        </section>
        <span className="mt-1 w-[50%] mx-auto block border-t" />
      </>
    )
  );
}
