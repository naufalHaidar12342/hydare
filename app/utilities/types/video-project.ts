export interface VideoProject {
  videoTitle: string
  videoThumbnail: {
    url:string
  }
  videoUrl: string
  videoDescription: string
  videoClient: {
    clientName: string
    clientDescription:string
  }
}

export interface VideoProjectResponse<TItem = VideoProject>{
  data: {
    videoProjects:TItem[]
  }
}
