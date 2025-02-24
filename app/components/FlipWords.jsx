"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import classMerging from "../helpers/class-merging";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
export default function FlipWords({ words, duration = 3000, className }) {
	const [currentWordIndex, setCurrentWordIndex] = useState(words[0]);
	const [isFlipping, setIsFlipping] = useState(false);

	// thanks for the fix Julian - https://github.com/Julian-AT
	const startFlipping = useCallback(() => {
		const word = words[words.indexOf(currentWordIndex) + 1] || words[0];
		setCurrentWordIndex(word);
		setIsFlipping(true);
	}, [currentWordIndex, words]);

	useEffect(() => {
		if (!isFlipping) {
			setTimeout(() => {
				startFlipping();
			}, duration);
		}
	}),
		[isFlipping, duration, startFlipping];

	return (
		<AnimatePresence
			onExitComplete={() => {
				setIsFlipping(false);
			}}
		>
			<motion.div
				initial={{
					opacity: 0,
					y: 10,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 10,
				}}
				exit={{
					opacity: 0,
					y: -40,
					x: 40,
					filter: "blur(10px)",
					scale: 2,
					position: "absolute",
				}}
				className={classMerging(
					"inline-block relative text-left text-waikawa-gray-300 px-0",
					className
				)}
				key={currentWordIndex}
			>
				{currentWordIndex.split(" ").map((word, index) => (
					<motion.span
						key={word + index}
						initial={{
							opacity: 0,
							y: 10,
							filters: "blur(10px)",
						}}
						animate={{
							opacity: 1,
							y: 0,
							filters: "blur(0px)",
						}}
						transition={{
							delay: index * 0.3,
							duration: 0.3,
						}}
						className="inline-block whitespace-nowrap"
					>
						{word.split("").map((letter, letterIndex) => (
							<motion.span
								key={word + letterIndex}
								initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
								animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
								transition={{
									delay: index * 0.3 + letterIndex * 0.05,
									duration: 0.2,
								}}
								className="inline-block"
							>
								{letter}
							</motion.span>
						))}
						<span className="inline-block">&nbsp;</span>
					</motion.span>
				))}
			</motion.div>
		</AnimatePresence>
	);
}
