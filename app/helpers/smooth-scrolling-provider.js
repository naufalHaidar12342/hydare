"use client";
import { useRef } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
export default function SmoothScrollingProvider({ children }) {
	const lenisRef = useRef(null);
	return (
		<ReactLenis
			ref={lenisRef}
			root
			options={{
				lerp: 0.1,
				duration: 1.5,
				smoothWheel: true,
			}}
		>
			{children}
		</ReactLenis>
	);
}
