export interface WebsiteProject {
  websiteName: string
  websiteLink: string
  websiteDescription: string
  websiteClient: {
    clientName: string
    clientDescription:string
  }
}

export interface WebsiteProjectResponse<TItem = WebsiteProject>{
  data: {
    websiteProjects:TItem[]
  }
}
