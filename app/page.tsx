import FlipWords from "./components/FlipWords";
import Link from "next/link";
import { heroWordsList } from "./utilities/hero-words-list";
import { projectsPortfolio } from "./utilities/projects-portfolio";
import SplideProjects from "./components/SplideProjects";
import { Suspense } from "react";
import ServicesCard from "./components/ServicesCard";
import { servicesList } from "./utilities/services-list";
import { IconLink } from "@tabler/icons-react";

export default function Home() {
	return (
		<section className="min-h-lvh flex flex-col py-10 px-8 max-md:gap-y-10 font-[family-name:var(--font-ibm-plex-mono)]">
			<div
				className="h-dvh w-full flex flex-col justify-center gap-y-3"
				aria-label="Hero section"
			>
				<h1 className="flex flex-col font-medium max-md:text-5xl md:text-6xl">
					<span>Making your</span>
					<FlipWords words={heroWordsList} />
					<span>comes true, one at a time.</span>
				</h1>
				<div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
					<Link
						href="/#hydare"
						className="md:w-fit p-3 rounded-xl text-xl font-semibold bg-waikawa-gray-300 text-obsidian"
					>
						Learn More
					</Link>
					<Link
						href="/#hire-us"
						className="md:w-fit p-3 rounded-xl text-xl font-semibold border-2 border-waikawa-gray-300 text-foreground"
					>
						Hire Us
					</Link>
				</div>
			</div>
			<div className="w-full flex flex-col" id="hydare">
				<h2 className="text-5xl font-normal font-[family-name:var(--font-bebas-neue)]">
					Hydare
				</h2>
				<p className="text-2xl">
					One-man studio based in {""}
					<a
						href="https://en.wikipedia.org/wiki/Semarang"
						target="_blank"
						className="underline decoration-waikawa-gray-300 font-medium"
					>
						Venetië van Java
					</a>{" "}
					, focusing on creating website to our various clients
				</p>
				<Suspense fallback={<div>Loading our projects...</div>}>
					<SplideProjects projects={projectsPortfolio} />
				</Suspense>
			</div>
			<div className="max-md:mt-8 w-full flex flex-col" id="hydare-services">
				<h3 className="text-4xl font-normal font-[family-name:var(--font-bebas-neue)]">
					Our Services
				</h3>
				<div className="grid max-md:grid-cols-1 md:max-lg:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
					{servicesList.map((item) => (
						<ServicesCard
							key={`Service index for "${item.serviceName}"`}
							serviceName={item.serviceName}
							serviceIcon={<item.serviceIcon size={48} />}
							serviceDescription={item.serviceDescription}
						/>
					))}
				</div>
			</div>
			<div className="mt-8 flex flex-col" id="hire-us">
				<h2 className="text-5xl font-normal font-[family-name:var(--font-bebas-neue)]">
					Hire Us
				</h2>
				<div className="flex flex-col font-bold">
					<a
						href="https://www.sribu.com/id/users/nhweb12342"
						target="_blank"
						className="inline-flex gap-x-2 items-center underline decoration-waikawa-gray-400"
					>
						<IconLink />
						Sribu (previously Sribulancer)
					</a>
					<a
						href="mailto:business.hydare@proton.me"
						target="_blank"
						className="inline-flex gap-x-2 items-center underline decoration-waikawa-gray-400"
					>
						<IconLink />
						business.hydare@proton.me
					</a>
				</div>
			</div>
		</section>
	);
}
