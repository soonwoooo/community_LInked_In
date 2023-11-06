import axios, { AxiosResponse } from "axios";
import {
  ProfileServiceInterface,
  ProfileTitleData,
  ExperienceData,
  EducationData,
} from "./model/ProfileServiceInterface";
import { Profile } from "../entity/profile/Profile";

export class ProfileService implements ProfileServiceInterface {
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

  async getExperience(): Promise<ExperienceData> {
    const response: AxiosResponse<ExperienceData> = await axios.get(
      `${this.apiUrl}/Experience.json`
    );
    return response.data;
  }

  async getEducation(): Promise<EducationData> {
    const response: AxiosResponse<EducationData> = await axios.get(
      `${this.apiUrl}/Education.json`
    );

    const result = new Profile(
      response.data.id,
      response.data.message,
      response.data.category,
      response.data.data
      // 여기에 경력 데이터를 추가할 수 있음
    );

    return result;
  }
}
