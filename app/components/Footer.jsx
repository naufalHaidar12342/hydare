import { IconBrandGithub } from "@tabler/icons-react";
export default function Footer() {
	return (
		<footer className="flex flex-col items-center">
			<span className="">Made with ❤️ in Semarang, 2025. </span>
			<a
				href="https://github.com/naufalHaidar12342"
				target="_blank"
				className="inline-flex underline decoration-waikawa-gray-300"
			>
				<IconBrandGithub size={24} /> naufalHaidar12342
			</a>
		</footer>
	);
}
