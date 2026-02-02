"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or only core styles
// import "@splidejs/react-splide/css/core";
import Link from "next/link";
import {
	IconArrowNarrowRight,
	IconArrowNarrowLeft,
	IconExternalLink,
} from "@tabler/icons-react";
import { Projects } from "../utilities/projects-portfolio";
import Image from "next/image";

export default function SplideProjects({ projects }: { projects: Projects[] }) {
	return (
		<Splide
			aria-label="Slides of projects"
			options={{
				type: "loop",
				direction: "ltr",
				autoplay: true,
				arrows: false,
				autoHeight: true,
			}}
			className="my-10"
		>
			{projects.map((project) => (
				<SplideSlide
					key={`project-${project.projectName}`}
					className="h-full md:h-150 gap-1 p-2 flex items-center"
				>
					<div className="flex flex-col grow">
						<div className="mb-3 w-full h-60 md:h-100 md:w-150 relative flex items-center justify-center overflow-hidden rounded-xl border-4 border-waikawa-gray-300">
							<Image
								src={project.projectImageUrl}
								alt={`Image for project ${project.projectName}`}
								className="transform hover:scale-105 transition-transform duration-300!"
								style={{ objectFit: "cover" }}
								fill
							/>
						</div>
						<h3 className="text-2xl font-bold">{project.projectName}</h3>
						<p className="mt-4 wrap-break-word">{project.description}</p>
						<Link
							href={`${project.previewURL}`}
							className="mt-4 gap-x-1 flex items-center justify-center md:justify-start border-2 border-waikawa-gray-300 text-lg font-bold p-3 md:w-fit rounded-xl transition-all duration-300 hover:border-dashed hover:-translate-x-1 hover:-translate-y-1 hover:rounded-lg hover:shadow-[4px_4px_0px_var(--color-waikawa-gray-600)] active:translate-x-0 active:translate-y-0 active:rounded-xl active:shadow-none"
						>
							Live View
							<IconExternalLink size={24} />
						</Link>
					</div>
				</SplideSlide>
			))}
		</Splide>
	);
}
