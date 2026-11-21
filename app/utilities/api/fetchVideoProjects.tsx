import { HYGRAPH_API_FALLBACK } from "../constants/hygraph-api-fallback"
import { VideoProjectResponse } from "../types/video-project"

export async function fetchVideoProjects():Promise<VideoProjectResponse> {

  /**
   * Locale settings for next feature:
   * internalization (i18n)
   */
  const localeSetting=[]
  const response = await fetch(`${process.env.HYGRAPH_API}` || HYGRAPH_API_FALLBACK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${process.env.HYGRAPH_TOKEN}`
    },
    next: {
      revalidate:600
    },
    body: JSON.stringify({
      query:`query VideoProjects{
        videoProjects{
          videoTitle
          videoThumbnail{
            url
          }
          videoUrl
          videoDescription
          videoClient{
            clientName
            clientDescription
          }
        }
      }`
    })
  }).then((res) => res.json()).catch((err) => console.error(err))
  return response as VideoProjectResponse

}
