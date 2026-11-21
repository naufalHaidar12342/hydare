import { ViewTransition } from "react";
import technologyList from "../utilities/technology-list";

type ProjectType = "video-editing" | "websites";
export async function TechnologyCollection({ projectType }: { projectType: ProjectType }) {
  const techs = projectType === "websites" ? (
    technologyList().filter((technology) => technology.technologyCategory.includes(projectType))
  ) : (
      technologyList().filter((technology)=>technology.technologyCategory.includes(projectType))

  )

  return (
    <ViewTransition
      key={projectType}
      name="technology-collection"
      share={"auto"}
      enter={"auto"}
      default={"none"}
    >
      <div className="mt-4 columns-1 sm:columns-2 lg:columns-3 gap-5">
        {techs.map((technology) => (
          <div key={technology.technologyName} className="inline-block mb-5 w-full break-inside-avoid p-4 rounded-2xl border-2 border-waikawa-gray-300">
            <h3 className="font-semibold text-2xl font-(family-name:--font-bebas-neue) tracking-widest">{technology.technologyName}</h3>
            <p className="mt-2">{technology.technologyUsage}</p>
            <a href={technology.technologyLink} target="_blank" className="mt-6 inline-block font-medium ">Check tools</a>
          </div>
        ))}
      </div>

    </ViewTransition>

  )
}
