import {
	IconBrandNextjs,
	IconPalette,
	IconBlockquote,
} from "@tabler/icons-react";
export const servicesList = [
	{
		serviceName: "Slicing Design",
		serviceIcon: <IconPalette size={48} />,
		serviceDescription:
			"Implementing your website design (preferrably design file in Figma) to a real website",
	},
	{
		serviceName: "Full Website Development",
		serviceIcon: <IconBrandNextjs size={48} />,
		serviceDescription:
			"Designing website from wireframing with Figma, implement/slicing with Next.js, all the way to deploying to hosting provider",
	},
	{
		serviceName: "Content Entries",
		serviceIcon: <IconBlockquote size={48} />,
		serviceDescription:
			"Helping you to add content to your website using Headless CMS (Hygraph, Contentful CMS, etc)",
	},
];
