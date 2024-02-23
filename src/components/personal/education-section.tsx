import { getEducation } from "@/app/_internal/apiUtil";
import Timeline from "../timeline";

export default async function EducationSection() {
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
          <div className=" flex flex-1 flex-col items-center justify-center">
            <Timeline type="Education" elements={education} />
          </div>
        </section>
        <span className="mt-1 w-[50%] mx-auto block border-t" />
      </>
    )
  );
}
