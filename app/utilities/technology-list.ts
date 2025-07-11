import {
	IconBrandNextjs,
	IconPalette,
	IconBrandFigma,
	IconBrandTailwind,
	IconBrandVercel,
	IconBrandGit,
	IconBrandTypescript,
	IconBrandVscode,
	IconBrandGithub,
} from "@tabler/icons-react";

export type Technologies = {
	technologyName: string;
	technologyIcon: React.ComponentType<any>;
	technologyDescription: string;
};

export default function technologyList(): Technologies[] {
	return [
		{
			technologyName: "Visual Studio Code",
			technologyIcon: IconBrandVscode,
			technologyDescription:
				"A powerful and popular code editor with a rich ecosystem of extensions, perfect for web development.",
		},
		{
			technologyName: "Next.js",
			technologyIcon: IconBrandNextjs,
			technologyDescription:
				"A React framework for building server-rendered applications with ease.",
		},
		{
			technologyName: "Figma",
			technologyIcon: IconBrandFigma,
			technologyDescription:
				"A collaborative interface design tool for creating and prototyping UI/UX designs.",
		},
		{
			technologyName: "Tailwind CSS",
			technologyIcon: IconBrandTailwind,
			technologyDescription:
				"A utility-first CSS framework for rapid UI development with a focus on responsiveness and customization.",
		},
		{
			technologyName: "Vercel",
			technologyIcon: IconBrandVercel,
			technologyDescription:
				"A cloud platform for static sites and Serverless Functions, optimized for Next.js applications.",
		},
		{
			technologyName: "Git",
			technologyIcon: IconBrandGit,
			technologyDescription:
				"A distributed version control system for tracking changes in source code during software development.",
		},
		{
			technologyName: "GitHub",
			technologyIcon: IconBrandGithub,
			technologyDescription:
				"A web-based platform for version control and collaboration, allowing developers to host and review code, manage projects, and build software together.",
		},
		{
			technologyName: "TypeScript",
			technologyIcon: IconBrandTypescript,
			technologyDescription:
				"A superset of JavaScript that adds static types, enabling developers to catch errors early and improve code quality.",
		},
	];
}
