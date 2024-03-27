import { Linkify } from "@/lib/helpers";
import { Experience } from "@/lib/types";

export default function ExperienceElement({
  element,
}: {
  element: Experience;
}) {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
      <h3 className="md:text-xl font-semibold tracki">{element.position}</h3>
      <p className="font-semibold text-sm md:text-base">
        {element.company.name} - {element.location}
      </p>
      <time className="text-xs tracki uppercase text-muted-foreground">
        {`${element.stMonth} ${element.stYear}` +
          " - " +
          (element.current
            ? "Present"
            : `${element.endMonth} ${element.endYear}`)}
      </time>
      <p className="mt-3 whitespace-pre-line text-left break-normal text-sm max-w-lg">
        <Linkify>{element.description}</Linkify>
      </p>
    </div>
  );
}
