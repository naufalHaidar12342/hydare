import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import { IBMPlexMono } from "./fonts/IBMPlexMono";
import { BebasNeue } from "./fonts/BebasNeue";
import SmoothScrollingProvider from "./helpers/smooth-scrolling-provider";

export const metadata = {
	title: "Hydare",
	description:
		"One-man studio based in Venetië van Java. Making your dream website comes true, one at a time.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth scroll-my-4">
			<body
				className={`${IBMPlexMono.variable} ${BebasNeue.variable} antialiased mx-auto max-w-(--breakpoint-lg)`}
			>
				<main className="">
					<SmoothScrollingProvider>{children}</SmoothScrollingProvider>
				</main>
				<Footer />
			</body>
		</html>
	);
}
