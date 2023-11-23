import axios, { AxiosResponse } from "axios";
import * as HeaderServiceInterface from "../interface/HeaderServiceInterface";
import BASE_API from "@/model/config";

export class HeaderService {
  static async getHeaderProfileTitle(): Promise<HeaderServiceInterface.HeaderProfileTitleData> {
    const profileId = localStorage.getItem("profileId");
    const token = localStorage.getItem("token");
    const response: AxiosResponse<HeaderServiceInterface.HeaderProfileTitleData> =
      await axios.get(`/profile/${profileId}`, {
        baseURL: `${BASE_API}`,
        headers: {
          Authorization: token,
        },
      });

    const result = response.data;

    return result;
  }
}
