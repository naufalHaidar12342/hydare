"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import classMerging from "../helpers/class-merging";
import Link from "next/link";
export default function ProjectsSlides({
	projects,
	direction = "left",
	speed = "normal",
	className,
}) {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		container: containerRef,
		offset: [0, 1],
	});

	// Determine speed based on prop
	let animationDuration = 0;
	if (speed === "fast") {
		animationDuration = 0.6;
	} else if (speed === "normal") {
		animationDuration = 0.4;
	} else {
		animationDuration = 0.2;
	}

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

	// Duplicate items for the infinite effect
	const duplicatedItems = [...projects, ...projects];

	return (
		<div
			ref={containerRef}
			className={classMerging("relative overflow-hidden ", className)}
		>
			<motion.div style={{ x }} className="flex w-max">
				{duplicatedItems.map((item, index) => (
					<div
						key={index}
						className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] mr-4"
						style={{
							background:
								"linear-gradient(180deg, var(--slate-800), var(--slate-900)",
						}}
					>
						<div>
							<div
								aria-hidden="true"
								className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
							></div>
							<h3 className="text-2xl">{item.projectName}</h3>
							<p className="text-sm text-slate-300">{item.description}</p>
							<Link
								href={`${item.previewURL}`}
								className="inline-flex bg-waikawa-gray-300 text-obsidian p-3 rounded-xl"
							>
								Live view {"->"}
							</Link>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
}
