import {
	IconBrandNextjs,
	IconPalette,
	IconBlockquote,
	IconGlobe,
	IconWorldWww,
	IconWriting,
} from "@tabler/icons-react";

export type Services = {
	serviceName: string;
	serviceIcon: React.ComponentType<any>;
	serviceDescription: string;
};

export default function servicesList(): Services[] {
	return [
		{
			serviceName: "Slicing Design",
			serviceIcon: IconPalette,
			serviceDescription:
				"Implementing your website design (preferrably design file in Figma) to a real website",
		},
		{
			serviceName: "Full Website Development",
			serviceIcon: IconWorldWww,
			serviceDescription:
				"Designing website from wireframing with Figma, implement/slicing with Next.js, all the way to deploying to hosting provider",
		},
		{
			serviceName: "Content Entries",
			serviceIcon: IconBlockquote,
			serviceDescription:
				"Helping you to add content to your website using Headless CMS (Hygraph, Contentful CMS, etc)",
		},
		{
			serviceName: "Documentation",
			serviceIcon: IconWriting,
			serviceDescription:
				"Providing documentation for your website, so you can maintain your website by yourself",
		},
	];
}
