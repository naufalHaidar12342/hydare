"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or only core styles
// import "@splidejs/react-splide/css/core";
import Link from "next/link";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";

export default function SplideProjects({ projects }) {
	return (
		<Splide
			aria-label="Slides of projects"
			options={{
				type: "loop",
				direction: "ltr",
				autoplay: true,
				arrows: false,
			}}
			className="my-4"
		>
			{projects.map((project, index) => (
				<SplideSlide key={index} className="">
					<div className="flex flex-col p-4">
						<h3 className="text-2xl font-bold">{project.projectName}</h3>
						<p className="">{project.description}</p>
						<Link
							href={`${project.previewURL}`}
							className="mt-4 mr-2 inline-flex bg-waikawa-gray-300 text-obsidian font-bold p-3 md:w-fit rounded-xl"
						>
							Live view
							<IconArrowNarrowRight size={24} />
						</Link>
					</div>
				</SplideSlide>
			))}
		</Splide>
	);
}
