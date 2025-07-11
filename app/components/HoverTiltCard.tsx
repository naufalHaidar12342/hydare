"use client";
import { IconBrandNextjs } from "@tabler/icons-react";
import React, { ReactNode, useRef } from "react";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "motion/react";

/* Tilt Card references:
 * (Tom Is Loading - YouTube) https://youtu.be/-PBw8mv9ZYc?si=mZ7UZM-Kwb0eiIFK
 * https://www.hover.dev/components/cards */

export default function HoverTiltCard({
	accessoryIcon = <IconBrandNextjs />,
	cardTitle = "Ttile Card",
	cardContent = "This part will be the description of the card. Feel free to write anything you want here.",
}: {
	accessoryIcon?: ReactNode;
	cardTitle?: string;
	cardContent?: string;
}) {
	const ROTATION_RANGE = 32.5;
	const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

	const cardRef = useRef<HTMLDivElement | null>(null);

	const x_Axis = useMotionValue(0);
	const y_Axis = useMotionValue(0);

	const xAxisSpringAnimation = useSpring(x_Axis);
	const yAxisSpringAnimation = useSpring(y_Axis);

	const motionTransform = useMotionTemplate`rotateX(${xAxisSpringAnimation}deg) rotateY(${yAxisSpringAnimation}deg)`;

	const handleMouseMove = (
		events: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (!cardRef.current) return [0, 0];

		const cardSizeAndPosition = cardRef.current.getBoundingClientRect();

		const cardWidth = cardSizeAndPosition.width;
		const cardHeight = cardSizeAndPosition.height;

		const mousePositionX_Axis =
			(events.clientX - cardSizeAndPosition.left) * ROTATION_RANGE;
		const mousePositionOnY_Axis =
			(events.clientY - cardSizeAndPosition.top) * ROTATION_RANGE;

		const rotationX =
			(mousePositionOnY_Axis / cardHeight - HALF_ROTATION_RANGE) * -1;
		const rotationY = mousePositionX_Axis / cardWidth - HALF_ROTATION_RANGE;

		x_Axis.set(rotationX);
		y_Axis.set(rotationY);
	};

	const handleMouseLeave = () => {
		x_Axis.set(0);
		y_Axis.set(0);
	};

	return (
		<motion.div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transform: motionTransform }}
			className="relative w-full bg-waikawa-gray-300 rounded-2xl p-2 transform-3d"
		>
			<div className="h-full flex flex-col p-5 rounded-xl bg-gradient-to-br from-obsidian via-waikawa-gray-950 to-obsidian transform-3d translate-z-[75px]">
				{accessoryIcon}
				<div className="flex flex-col mt-3">
					<h3 className="text-xl uppercase font-semibold font-[family-name:var(--font-ibm-plex-mono)]">
						{cardTitle}
					</h3>
					<p className="mt-2">{cardContent}</p>
				</div>
			</div>
		</motion.div>
	);
}
