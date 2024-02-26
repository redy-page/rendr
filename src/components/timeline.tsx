import { Education, Experience, TimelineProps } from "@/lib/types";
import EducationElement from "./timeline-education";
import ExperienceElement from "./timeline-experience";

export default function Timeline({ type, elements }: TimelineProps) {
  const education =
    type === "Education" ? (elements as Education[]) : undefined;
  const experiences =
    type === "Experience" ? (elements as Experience[]) : undefined;
  return (
    <div className="max-w-5xl px-4 py-12 mx-auto">
      <div className="grid gap-4 mx-4 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-3">
          <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
            <h3 className="text-3xl font-semibold">{type}</h3>
          </div>
        </div>
        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-secondary">
            {education &&
              education.map((edu) => (
                <EducationElement key={edu.id} element={edu} />
              ))}
            {experiences &&
              experiences.map((exp) => (
                <ExperienceElement key={exp.id} element={exp} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
