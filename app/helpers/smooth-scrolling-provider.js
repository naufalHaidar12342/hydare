"use client";
import { ReactNode, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
export default function SmoothScrollingProvider({ children }) {
	const lenisRef = useRef(null);
	return (
		<ReactLenis
			root
			ref={lenisRef}
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
