"use client";
import { motion } from "motion/react";

export default function LinksReveal({
	children,
	urlString = "#",
}: {
	children: string;
	urlString: string;
}) {
	const DURATION = 0.25; // seconds
	const STAGGER = 0.025; // seconds

	return (
		<motion.a
			initial="initial"
			whileHover={"hovered"}
			href={urlString}
			target="_blank"
			className="relative block overflow-hidden whitespace-nowrap text-xl uppercase leading-[0.75]"
		>
			<div>
				{children.split("").map((char, index) => (
					<motion.span
						key={index}
						variants={{
							initial: {
								y: 0,
							},
							hovered: {
								y: "-100%",
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: index * STAGGER,
						}}
						className="inline-block"
					>
						{char}
					</motion.span>
				))}
			</div>
			<div className="absolute inset-0">
				{children.split("").map((char, index) => (
					<motion.span
						key={index}
						variants={{
							initial: {
								y: "100%",
							},
							hovered: {
								y: 0,
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: index * STAGGER,
						}}
						className="inline-block"
					>
						{char}
					</motion.span>
				))}
			</div>
		</motion.a>
	);
}
