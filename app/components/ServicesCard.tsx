import { IconBrandNextjs } from "@tabler/icons-react";
import { ReactNode } from "react";
export default function ServicesCard({
	serviceIcon = <IconBrandNextjs />,
	serviceName = "Website Development",
	serviceDescription = "Design and develop your website from scratch",
}: {
	serviceIcon?: ReactNode;
	serviceName?: string;
	serviceDescription?: string;
}) {
	return (
		<div className="flex flex-col p-5 rounded-2xl border-4 border-foreground hover:border-waikawa-gray-300 duration-300 transition-colors bg-gradient-to-br from-obsidian via-waikawa-gray-950 to-obsidian">
			{serviceIcon}
			<div className="flex flex-col mt-3">
				<h3 className="text-xl font-semibold">{serviceName}</h3>
				<p>{serviceDescription}</p>
			</div>
		</div>
	);
}
