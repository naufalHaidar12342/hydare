import { HYGRAPH_API_FALLBACK } from "../constants/hygraph-api-fallback"
import { VideoProjectResponse } from "../types/video-project"
import { WebsiteProjectResponse } from "../types/website-project"

export async function fetchWebsiteProjects():Promise<WebsiteProjectResponse> {

  /**
   * Locale settings for next feature:
   * internalization (i18n)
   */
  const localeSetting=[]
  const response = await fetch(`${process.env.HYGRAPH_API}` || HYGRAPH_API_FALLBACK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization":`Bearer ${process.env.HYGRAPH_TOKEN}`
    },
    next: {
      revalidate:600
    },
    body: JSON.stringify({
      query:`query WebsiteProjects{
        websiteProjects{
          websiteName
          websiteLink
          websiteDescription
          websiteClient{
            clientName
            clientDescription
          }
        }
      }`
    })
  }).then((res) => res.json()).catch((err) => console.error(err))
  return response as WebsiteProjectResponse

}
