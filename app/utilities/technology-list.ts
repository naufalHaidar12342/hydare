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

import Image from "next/image";

export type ProjectType = "video-editing" | "websites";

export type Technologies = {
  technologyName: string;
  technologyLink: string;
  technologyUsage: string;
  technologyCategory: ProjectType[];
};

export default function technologyList(): Technologies[] {
	return [
		{
      technologyName: "Davinci Resolve 21.1 (free version)",
      technologyLink: "https://www.blackmagicdesign.com/products/davinciresolve/",
      technologyUsage:"Video editing software that I use",
      technologyCategory:["video-editing"]
		},
		{
      technologyName: "yt-dlp",
      technologyUsage:"audio and video downloader, operated from inside command line/terminal",
      technologyLink:"https://github.com/yt-dlp/yt-dlp",
      technologyCategory:["video-editing"]
    },
		{
      technologyName: "Free Download Manager (FDM)",
      technologyUsage:"App with friendly user interface to help me download audio and video. Also use yt-dlp package",
      technologyLink:"https://www.freedownloadmanager.org/",
      technologyCategory:["video-editing"]
    },
		{
      technologyName: "Google Drive",
      technologyUsage:"Cloud storage to help me share the rendered video with clients",
      technologyLink:"https://drive.google.com",
      technologyCategory:["video-editing"]
    },
		{
      technologyName: "Next.js",
      technologyUsage:"Website framework to help me focus making the website, think of it like a template that can be customized",
      technologyLink:"https://nextjs.org",
      technologyCategory:["websites"]
    },
		{
      technologyName: "Tailwind CSS",
      technologyUsage:"CSS framework so I could implement design from wireframe much faster, compared to using vanilla CSS",
      technologyLink:"https://nextjs.org",
      technologyCategory:["websites"]
    },
		{
      technologyName: "Figma",
      technologyUsage:"Design tool that is universal. I did some YouTube thumbnail design here, but mostly I use it for making the rough design for the website",
      technologyLink:"https://www.figma.com/",
      technologyCategory:["websites","video-editing"]
    },



	];
}
