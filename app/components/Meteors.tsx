"use client";
import { useEffect, useState } from "react";
import classMerging from "../helpers/class-merging";
import { motion } from "motion/react";

export default function Meteors({
	numbersOfMeteor = 20,
	className,
}: {
	numbersOfMeteor?: number;
	className?: string;
}) {
	const meteorCount = numbersOfMeteor || 20;
	const [timings, setTimings] = useState<{ delay: number; duration: number }[]>(
		[],
	);

	// Generate randomness after mount so server and client render the same initial styles.
	useEffect(() => {
		setTimings(
			Array.from({ length: meteorCount }, () => ({
				delay: Math.random() * 5,
				duration: Math.floor(Math.random() * 5) + 5,
			})),
		);
	}, [meteorCount]);

	return (
		// Break out of the content's max-width and cover the viewport.
		<motion.div
			className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{/* Adding underscore as prefix for "element"
			 * since we don't need to access the value of "element"
			 * reference: https://www.linkedin.com/pulse/underscore-javascripts-map-secret-placeholder-you-might-bello-jppuf/ */}
			{Array.from({ length: meteorCount }, (_element, index) => {
				// Percentages keep the distribution responsive to the viewport width.
				const position = (index / meteorCount) * 100;
				const timing = timings[index];

				return (
					<div
						key={"meteor number " + index}
						className={classMerging(
							"animate-meteor-effect absolute h-0.5 w-0.5 rotate-45 rounded-[9999px] bg-waikawa-gray-400 shadow-[0_0_0_1px_#ffffff10]",
							"before:absolute before:top-1/2 before:h-px before:w-12.5 before:translate-y-[-50%] before:transform before:bg-linear-to-r before:from-waikawa-gray-600 before:to-transparent before:content-['']",
							className,
						)}
						style={{
							top: "-10px",
							left: `${position}%`,
							animationDelay: `${timing?.delay ?? 0}s`,
							animationDuration: `${timing?.duration ?? 5}s`,
						}}
					/>
				);
			})}
		</motion.div>
	);
}
