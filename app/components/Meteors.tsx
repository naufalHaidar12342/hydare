"use client";
import classMerging from "../helpers/class-merging";
import { motion } from "motion/react";

export default function Meteors({
	numbersOfMeteor,
	className,
}: {
	numbersOfMeteor?: number;
	className?: string;
}) {
	const meteors = new Array(numbersOfMeteor || 20).fill(true);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{/* Adding underscore as prefix for "element"
			 * since we don't need to access the value of "element"
			 * reference: https://www.linkedin.com/pulse/underscore-javascripts-map-secret-placeholder-you-might-bello-jppuf/ */}
			{meteors.map((_element, index) => {
				const meteorCount = numbersOfMeteor || 20;

				// Calculate position to evenly distribute meteors across container width
				const position = index * (800 / meteorCount); // Spread across 800px range

				return (
					<div
						key={"meteor number " + index}
						className={classMerging(
							"animate-meteor-effect absolute h-0.5 w-0.5 rotate-45 rounded-[9999px] bg-waikawa-gray-400 shadow-[0_0_0_1px_#ffffff10]",
							"before:absolute before:top-1/2 before:h-px before:w-12.5 before:-translate-y-[50%] before:transform before:bg-linear-to-r before:from-waikawa-gray-600 before:to-transparent before:content-['']",
							className,
						)}
						style={{
							top: "-10px",
							left: position + "px",
							animationDelay: Math.random() * 5 + "s", // Random delay between 0-5s
							animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s", // Keep some randomness in duration
						}}
					></div>
				);
			})}
		</motion.div>
	);
}
