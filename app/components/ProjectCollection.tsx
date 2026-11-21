import { ViewTransition } from "react";
import { fetchVideoProjects } from "../utilities/api/fetchVideoProjects";
import { fetchWebsiteProjects } from "../utilities/api/fetchWebsiteProjects copy";
import { IconExternalLink } from '@tabler/icons-react';

type ProjectType = "video-editing" | "websites";

// YouTube watch links cannot be used directly in an iframe, so extract the video ID
// and turn it into a privacy-enhanced embed URL.
function getYouTubeEmbedUrl(videoUrl: string): string | null {
	let url: URL;
	try {
		url = new URL(videoUrl);
	} catch {
		return null;
	}

	const host = url.hostname.toLowerCase();
	const isYouTubeHost = [
		"youtube.com",
		"www.youtube.com",
		"m.youtube.com",
		"youtu.be",
	].includes(host);

	if (!isYouTubeHost) return null;

	const videoId =
		host === "youtu.be"
			? url.pathname.split("/").filter(Boolean)[0]
			: url.searchParams.get("v") ??
				url.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1];

	return videoId
		? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`
		: null;
}

export async function ProjectCollection({
	projectType,
}: {
	projectType: ProjectType;
}) {
	// Fetch the selected category and map both API shapes to one card format.
	const projects =
		projectType === "websites"
			? (await fetchWebsiteProjects()).data.websiteProjects.map((project) => ({
					title: project.websiteName,
					url: project.websiteLink,
          description: project.websiteDescription,
					client: project.websiteClient,
				}))
			: (await fetchVideoProjects()).data.videoProjects.map((project) => ({
          title: project.videoTitle,
          thumbnail: project.videoThumbnail.url,
					url: project.videoUrl,
					description: project.videoDescription,
					client: project.videoClient,
				}));

	return (
		// Changing the key tells React to crossfade this content when the URL tab changes.
		<ViewTransition
			key={projectType}
			name="project-collection"
			share="auto"
			enter="auto"
			default="none"
		>
			<div className="mt-4 grid gap-5 md:grid-cols-2">
				{projects.map((project) => {
					const embedUrl =
						projectType === "video-editing"
							? getYouTubeEmbedUrl(project.url)
							: null;

					return (
						<article
							key={`${project.client.clientName}-${project.title}`}
							className="rounded-xl border-2 border-waikawa-gray-700 p-5"
						>
							<h4 className="text-2xl font-semibold">{project.title}</h4>
							{/* Only video projects get a player; website projects have no video URL. */}
							{projectType === "video-editing" && (
								<div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg bg-obsidian">
									{embedUrl ? (
										<iframe
											src={embedUrl}
											title={`YouTube video: ${project.title}`}
											className="absolute inset-0 h-full w-full border-0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											referrerPolicy="strict-origin-when-cross-origin"
											allowFullScreen
											loading="lazy"
										/>
									) : (
										<p className="p-4">
											This video can’t be embedded. Use the project link below
											to watch it on YouTube.
										</p>
									)}
								</div>
							)}
							<p className="mt-3">{project.description}</p>
							<p className="mt-3 text-waikawa-gray-300">
								Client: {project.client.clientName}
							</p>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4 inline-flex items-center gap-x-1 underline decoration-waikawa-gray-300"
							>
								View project <IconExternalLink/>
							</a>
						</article>
					);
				})}
			</div>
		</ViewTransition>
	);
}
