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

export default function ServicesCard({
	serviceIcon = <IconBrandNextjs />,
	serviceName = "Website Development",
	serviceDescription = "Design and develop your website from scratch",
}: {
	serviceIcon?: ReactNode;
	serviceName?: string;
	serviceDescription?: string;
}) {
	const ROTATION_RANGE = 32.5;
	const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

	const ref = useRef<HTMLDivElement | null>(null);

	const x_Axis = useMotionValue(0);
	const y_Axis = useMotionValue(0);

	const xSpring = useSpring(x_Axis);
	const ySpring = useSpring(y_Axis);

	const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

	const handleMouseMove = (
		events: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (!ref.current) return [0, 0];

		const clientRectangle = ref.current.getBoundingClientRect();

		const cardWidth = clientRectangle.width;
		const cardHeight = clientRectangle.height;

		const mouseX = (events.clientX - clientRectangle.left) * ROTATION_RANGE;
		const mouseY = (events.clientY - clientRectangle.top) * ROTATION_RANGE;

		const rotationX = (mouseY / cardHeight - HALF_ROTATION_RANGE) * -1;
		const rotationY = mouseX / cardWidth - HALF_ROTATION_RANGE;

		x_Axis.set(rotationX);
		y_Axis.set(rotationY);
	};

	const handleMouseLeave = () => {
		x_Axis.set(0);
		y_Axis.set(0);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transform }}
			className="relative w-full bg-waikawa-gray-300 rounded-2xl p-2 transform-3d"
		>
			<div className="h-full flex flex-col p-5 rounded-xl bg-gradient-to-br from-obsidian via-waikawa-gray-950 to-obsidian transform-3d translate-z-[75px]">
				{serviceIcon}
				<div className="flex flex-col mt-3">
					<h3 className="text-xl font-semibold">{serviceName}</h3>
					<p>{serviceDescription}</p>
				</div>
			</div>
		</motion.div>
	);
}
