import { getProjects } from "@/app/_internal/apiUtil";
import { sortProjects } from "@/lib/utils";
import DefaultProjectCard from "./project-card";

export default async function DefaultProjects() {
  let projects = await getProjects();
  projects = sortProjects(projects);
  return (
    projects &&
    projects.length > 0 && (
      <>
        <section
          id="projects"
          className="min-h-screen flex flex-col md:pt-20 py-8 justify-center items-center"
        >
          <div className="max-w-5xl md:px-12 mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mx-4 justify-center items-center">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
                  <h3 className="text-3xl font-semibold">Projects</h3>
                </div>
              </div>
              <div className="flex flex-row flex-1 md:px-8">
                <div className="grid gap-4">
                  {projects.map((project) => (
                    <DefaultProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="mt-1 w-[50%] mx-auto block border-t" />
      </>
    )
  );
}
