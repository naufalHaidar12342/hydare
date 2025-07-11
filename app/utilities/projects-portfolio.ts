export type Projects = {
	projectName: string;
	description: string;
	previewURL: string;
	projectImageUrl: string;
};

export default function projectsPortfolio(): Projects[] {
	/* if we don't have image for the project, use favicon.ico instead
	 * for the the image url */
	return [
		{
			projectName: "Jadwal Salat Kota Semarang",
			description:
				"A simple website to show the Moslem prayer schedule in Semarang",
			previewURL: "https://salat-kotasemarang.vercel.app",
			projectImageUrl: "/images/jadwal-salat-kota-semarang.png",
		},
		{
			projectName: "Pink.iy Bouquet & Gift Shop",
			description:
				"Digital product catalog for small business that provides bouquet and knick-knacks for its customers",
			previewURL: "https://pinkiy-bouquet.vercel.app",
			projectImageUrl: "/favicon.ico",
		},
		{
			projectName: "alimanbulus.net",
			description:
				"Institutional profile for a local Islamic boarding school in Purworejo, Central Java",
			previewURL: "https://alimanbulus.net",
			projectImageUrl: "/images/alimanbulusdotnet.png",
		},
		{
			projectName: "pcnamegen",
			description:
				"Name generator for your computer to make it look like average computer name",
			previewURL: "https://pcnamegen.vercel.app",
			projectImageUrl: "/favicon.ico",
		},
		{
			projectName: "UKM Menik Jaya",
			description:
				"Company profile for a local micro business, UKM Menik Jaya, that produces all-natural drinks",
			previewURL: "https://umkm-organik.vercel.app",
			projectImageUrl: "/favicon.ico",
		},
		{
			projectName: "Hydare Notes",
			description: `Note-taking app built with Vite (React template), Tailwind CSS, and next-themes.`,
			previewURL: "https://react-notes-hydare.vercel.app",
			projectImageUrl: "/images/react-notes-hydare.png",
		},
		{
			projectName: "Hydare Bookshelf",
			description: `Simple app that acts as digital bookshelf that lets you add, edit, and remove books. `,
			previewURL: "https://bookshelf-app-hydare.vercel.app",
			projectImageUrl: "/favicon.ico",
		},
	];
}
