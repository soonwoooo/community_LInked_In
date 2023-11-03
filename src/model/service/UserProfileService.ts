import axios, { AxiosResponse } from "axios";
import {
  ApiResponse,
  ExperienceData,
  ProfileTitleData,
} from "./model/UserProfileService";

export class UserProfileService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "/data"; // 새로운 URL로 변경
  }

  async getTitle(): Promise<ProfileTitleData> {
    const response = await axios.get<ProfileTitleData>(
      `${this.apiUrl}/ProfileTitle.json`
    );
    return response.data;
  }

  async getCarrer(): Promise<ApiResponse> {
    const response = await axios.get<ApiResponse>(`${this.apiUrl}/Career.json`);
    return response.data;
  }
}
