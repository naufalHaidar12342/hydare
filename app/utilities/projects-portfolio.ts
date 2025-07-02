export type Projects = {
	projectName: string;
	description: string;
	previewURL: string;
};

export default function projectsPortfolio(): Projects[] {
	return [
		{
			projectName: "Jadwal Salat Kota Semarang",
			description:
				"A simple website to show the Moslem prayer schedule in Semarang",
			previewURL: "https://salat-kotasemarang.vercel.app",
		},
		{
			projectName: "Pink.iy Bouquet & Gift Shop",
			description:
				"Digital product catalog for small business that provides bouquet and knick-knacks for its customers",
			previewURL: "https://pinkiy-bouquet.vercel.app",
		},
		{
			projectName: "alimanbulus.net",
			description:
				"Institutional profile for a local Islamic boarding school in Purworejo, Central Java",
			previewURL: "https://alimanbulus.net",
		},
		{
			projectName: "pcnamegen",
			description:
				"Name generator for your computer to make it look like average computer name",
			previewURL: "https://pcnamegen.vercel.app",
		},
		{
			projectName: "UKM Menik Jaya",
			description:
				"Company profile for a local micro business, UKM Menik Jaya, that produces all-natural drinks",
			previewURL: "https://umkm-organik.vercel.app",
		},
		{
			projectName: "Hydare Notes",
			description: `Note-taking app built with Vite (React template), Tailwind CSS, and next-themes.`,
			previewURL: "https://react-notes-hydare.vercel.app",
		},
		{
			projectName: "Hydare Bookshelf",
			description: `Simple app that acts as digital bookshelf that lets you add, edit, and remove books. `,
			previewURL: "https://bookshelf-app-hydare.vercel.app",
		},
	];
}
