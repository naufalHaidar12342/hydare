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

export default function SplideProjects({ projects }) {
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
			{projects.map((project, index) => (
				<SplideSlide key={index} className="p-1 h-full">
					<div className="flex flex-col grow">
						<h3 className="text-2xl font-bold">{project.projectName}</h3>
						<p className="mt-2">{project.description}</p>
						<Link
							href={`${project.previewURL}`}
							className="mt-4 gap-x-1 flex items-center justify-center md:justify-start bg-waikawa-gray-300 text-obsidian text-lg font-bold p-3 md:w-fit rounded-xl"
						>
							Live view
							<IconExternalLink size={24} />
						</Link>
					</div>
				</SplideSlide>
			))}
		</Splide>
	);
}
