import axios, { AxiosResponse } from "axios";
import { ApiResponse, ProfileTitleData } from "./model/ProfileServiceModel";

export class ProfileService implements ProfileService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "/data"; // 새로운 URL로 변경
  }

  async getTitle(): Promise<ProfileTitleData> {
    const response: AxiosResponse<ProfileTitleData> = await axios.get(
      `${this.apiUrl}/ProfileTitle.json`
    );
    return response.data;
  }

  async getCarrer(): Promise<ApiResponse> {
    const response: AxiosResponse<ApiResponse> = await axios.get(
      `${this.apiUrl}/Career.json`
    );
    return response.data;
  }
}
