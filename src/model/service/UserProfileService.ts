import axios from "axios";

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

export class UserProfileService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "/data"; // 새로운 URL로 변경
  }

  async getTitle(): Promise<any> {
    const response = axios.get(`${this.apiUrl}/ProfileTitle.json`);
    return response;
  }

  async getCarrer(): Promise<any> {
    const response = axios.get(`${this.apiUrl}/Career.json`);
    return response;
  }
}
