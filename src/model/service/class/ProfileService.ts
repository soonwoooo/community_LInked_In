import axios, { AxiosResponse } from "axios";
import {
  ProfileServiceInterface,
  ProfileTitleData,
  ExperienceData,
  EducationData,
} from "../interface/ProfileServiceInterface";
import { Profile } from "@/model/entity/profile/Profile";

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

  async getExperience(): Promise<Profile> {
    const response: AxiosResponse<ExperienceData> = await axios.get(
      `${this.apiUrl}/Experience.json`
    );

    console.log("모델 Experience : ", response);
    console.log("모델 Experience Type: ", typeof response);

    const result = new Profile(
      response.data.id,
      response.data.message,
      response.data.category
      // response.data.data
    );

    return result;
  }

  async getEducation(): Promise<Profile> {
    const response: AxiosResponse<EducationData> = await axios.get(
      `${this.apiUrl}/Education.json`
    );

    const result = new Profile(
      response.data.id,
      response.data.message,
      response.data.category,
      response.data.data
    );

    return result;
  }
}
