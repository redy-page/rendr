import { Education } from "@/lib/types";

export default function EducationElement({ element }: { element: Education }) {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
      <h3 className="text-xl font-semibold tracki">
        {element.degree}, {element.major}
      </h3>
      <p className="font-semibold">{element.school.name}</p>
      <time className="text-xs tracki uppercase text-muted-foreground">
        {element.endMonth && element.endMonth} {element.endYear}
      </time>
      <p className="mt-3 whitespace-pre-line text-left break-normal text-sm">
        {element.description}
      </p>
    </div>
  );
}
