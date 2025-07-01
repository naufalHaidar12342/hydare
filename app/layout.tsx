import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import { IBMPlexMono } from "./fonts/IBMPlexMono";
import { BebasNeue } from "./fonts/BebasNeue";
import SmoothScrollingProvider from "./helpers/smooth-scrolling-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hydare",
	description:
		"One-man studio based in Venetië van Java. Making your dream website comes true, one at a time.",
	metadataBase: new URL("https://hydare.vercel.app"),
	robots: {
		index: true,
		follow: true,
		nocache: true,
	},
	authors: [{ name: "Naufal Haidar Rauf", url: "https://hydiary.my.id" }],
	keywords: [
		"Next.js 14",
		"Website Development",
		"Freelance",
		"Independent studio",
		"React",
	],
	creator: "Naufal Haidar Rauf",
	publisher: "Hydare",
	openGraph: {
		title: "Hydare",
		description: `One-man studio based in Venetië van Java. Making your dream website comes true, one at a time.`,
		url: "https://hydare.vercel.app",
		siteName: "Hydare",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
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
