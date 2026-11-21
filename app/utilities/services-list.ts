import {
	IconBrandNextjs,
	IconPalette,
	IconBlockquote,
	IconGlobe,
	IconWorldWww,
  IconWriting,
	IconKeyframes
} from "@tabler/icons-react";

export type Services = {
	serviceName: string;
	serviceIcon: React.ComponentType<any>;
	serviceDescription: string;
};

export default function servicesList(): Services[] {
	return [
		{
			serviceName: "Video editing",
			serviceIcon: IconKeyframes,
			serviceDescription:
				"Helping you make compilation of funny, silly, epic moments, and more, using provided video (typically from live stream).",
		},
		{
			serviceName: "Full Website Development",
			serviceIcon: IconWorldWww,
			serviceDescription:
				"I will help designing your website, from rough design, making wireframe, implementing the design with code, and deploying it on hosting provider of your choosing",
		},


	];
}
