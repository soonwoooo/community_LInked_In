export interface ProfileTitleData {
  profileImage: string;
  name: string;
  location: string;
  jobDescription: string;
  connections: number;
}

export interface ExperienceData {
  imgSrc: string;
  title: string;
  titleSub: string;
  periodStart: number;
  periodEnd: number;
  detail: string;
  id: number;
  workSpace: string;
}

export interface ApiResponse {
  message: string;
  category: string;
  data: ExperienceData[];
}
