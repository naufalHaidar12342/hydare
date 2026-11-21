import FlipWords from "./components/FlipWords";
import Link from "next/link";
import { heroWordsList } from "./utilities/hero-words-list";
import projectsPortfolio from "./utilities/projects-portfolio";
import { Suspense } from "react";
import servicesList from "./utilities/services-list";
import { IconLink } from "@tabler/icons-react";
import Meteors from "./components/Meteors";
import contactList from "./utilities/contact-list";
import LinksReveal from "./components/LinksReveal";
import HoverTiltCard from "./components/HoverTiltCard";
import technologyList from "./utilities/technology-list";
import { col } from "motion/react-m";
import { ProjectCollection } from "./components/ProjectCollection";
import { TechnologyCollection } from "./components/TechnologyCollection";

export default async function Home({ searchParams }: { searchParams: Promise<{ project_type?:string | undefined}>}) {
	const fetchedProjects = projectsPortfolio();
	const fetchedServices = servicesList();
	const fetchedContacts = contactList();
  const fetchedTechStack = technologyList();

  // The selected tab lives in the URL, so links can be shared or bookmarked.
  const {project_type} = await searchParams
  // Use video editing when no valid tab has been selected yet.
  const projectType = project_type === "websites" ? "websites" : "video-editing"

	return (
		<section className="min-h-lvh flex flex-col py-10 px-8 max-md:gap-y-10 font-(family-name:--font-ibm-plex-mono)">
			<div
				className="relative h-dvh w-full flex flex-col justify-center gap-y-3"
				aria-label="Hero section"
			>
				<Meteors numbersOfMeteor={40} />
				<h1 className="relative z-10 flex flex-col font-medium max-md:text-5xl md:text-6xl">
					<span>Making your</span>
					<FlipWords words={heroWordsList} />
					<span>comes true, one at a time.</span>
				</h1>
				<div className="relative z-10 mt-6 flex flex-col gap-y-4 md:flex-row md:gap-x-4">
					<Link
						href="/#hydare"
						className="md:w-fit p-3 rounded-xl text-xl font-semibold bg-waikawa-gray-300 text-obsidian"
					>
						Learn More
					</Link>
					<Link
						href="/#hire-me"
						className="md:w-fit p-3 rounded-xl text-xl font-semibold border-2 border-waikawa-gray-300 text-foreground"
					>
						Hire Me
					</Link>
				</div>
			</div>
			<div className="w-full flex flex-col" id="hydare">
				<div className="max-lg:hidden lg:relative lg:flex lg:h-40 lg:items-center lg:motion-reduce:hidden">
					<Meteors numbersOfMeteor={50} />
				</div>
				<h2 className="text-5xl font-normal font-(family-name:--font-bebas-neue)">
					Hydare
				</h2>
				<p className="text-2xl">
					One-man studio based in {""}
					<a
						href="https://en.wikipedia.org/wiki/Semarang"
						target="_blank"
						className="underline decoration-waikawa-gray-300 font-medium"
					>
						Venetië van Java
					</a>{" "}
					, focusing on creating website to various clients.
        </p>
				<p className="mt-2">Update (November 2026): I am open for video editing (clipping, video scrubbing) !</p>
      </div>
      <div className="max-md:mt-8 mt-5 w-full flex flex-col" id="showcase">
        <h3 className="text-4xl font-normal tracking-wider font-(family-name:--font-bebas-neue)">
          Showcase
        </h3>

        <div role="tablist" aria-label="Project categories" className="flex gap-x-6">
          <Link
            href="/?project_type=video-editing"
            scroll={false}
            role="tab"
            id="video-editing-tab"
            aria-controls="project-panel"
            aria-selected={projectType === "video-editing"}
            className={`rounded-lg px-3 py-2 ${
              projectType === "video-editing"
                ? "bg-waikawa-gray-300 text-obsidian"
                : "text-foreground underline decoration-waikawa-gray-500"
            }`}
          >
            Video editing
          </Link>
          <Link
            href="/?project_type=websites"
            scroll={false}
            role="tab"
            id="websites-tab"
            aria-controls="project-panel"
            aria-selected={projectType === "websites"}
            className={`rounded-lg px-3 py-2 ${
              projectType === "websites"
                ? "bg-waikawa-gray-300 text-obsidian"
                : "text-foreground underline decoration-waikawa-gray-500"
            }`}
          >
            Websites
          </Link>
        </div>

        <section
          id="project-panel"
          role="tabpanel"
          aria-labelledby={projectType === "websites" ? "websites-tab" : "video-editing-tab"}
          tabIndex={0}
        >
          <ProjectCollection projectType={projectType}/>

        </section>
			</div>
			<div className="max-md:mt-8 mt-5 w-full flex flex-col" id="hydare-services">
				<h3 className="text-4xl font-normal tracking-wider font-(family-name:--font-bebas-neue)">
					My Services
				</h3>
				<div className="grid max-md:grid-cols-1 md:max-lg:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
					{fetchedServices.map((item) => (
						<HoverTiltCard
							key={`Service index for "${item.serviceName}"`}
							cardTitle={item.serviceName}
							accessoryIcon={<item.serviceIcon size={48} />}
							cardContent={item.serviceDescription}
						/>
					))}
				</div>
			</div>
			<div className="mt-8 w-full flex flex-col" id="hydare-tech-stack">
				<h3 className="text-4xl uppercase tracking-wider font-(family-name:--font-bebas-neue)">
					Techs
				</h3>
				<div role="tablist" aria-label="Technology categories" className="flex gap-x-6">
          <Link
            href="/?project_type=video-editing"
            scroll={false}
            role="tab"
            id="video-editing-technology-tab"
            aria-controls="technology-panel"
            aria-selected={projectType === "video-editing"}
            className={`rounded-lg px-3 py-2 ${
              projectType === "video-editing"
                ? "bg-waikawa-gray-300 text-obsidian"
                : "text-foreground underline decoration-waikawa-gray-500"
            }`}
          >
            For video editing
          </Link>
          <Link
            href="/?project_type=websites"
            scroll={false}
            role="tab"
            id="websites-technology-tab"
            aria-controls="technology-panel"
            aria-selected={projectType === "websites"}
            className={`rounded-lg px-3 py-2 ${
              projectType === "websites"
                ? "bg-waikawa-gray-300 text-obsidian"
                : "text-foreground underline decoration-waikawa-gray-500"
            }`}
          >
            For websites
          </Link>
        </div>
        <section
          id="technology-panel"
          role="tabpanel"
          aria-labelledby={projectType === "websites" ? "websites-technology-tab" : "video-editing-technology-tab"}
          tabIndex={0}
        >
          <TechnologyCollection projectType={projectType} />

        </section>
			</div>
			<div className="mt-8 flex flex-col" id="hire-me">
				<h2 className="text-5xl font-normal tracking-wider font-(family-name:--font-bebas-neue)">
					Hire Me
				</h2>
				<div className="mt-3 flex flex-col gap-3 ">
					{fetchedContacts.map((contact) => (
						<LinksReveal
							urlString={contact.contactUrl}
							key={contact.contactName}
						>
							{contact.contactName}
						</LinksReveal>
					))}
				</div>
			</div>
		</section>
	);
}
