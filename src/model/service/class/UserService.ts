import axios, { AxiosResponse } from "axios";
import * as UserServiceInterface from "../interface/UserServiceInterface";
import BASE_API from "@/model/config";

export class UserService {
  static async SignUp(
    email: string,
    password: string,
    name: string
  ): Promise<AxiosResponse<UserServiceInterface.SignUpServiceInterface>> {
    const response: AxiosResponse<UserServiceInterface.SignUpServiceInterface> =
      await axios.post(`${BASE_API}/user/signup`, {
        email,
        password,
        name,
      });
    return response;
  }

  static async Login(
    email: string,
    password: string
  ): Promise<AxiosResponse<UserServiceInterface.LoginServiceInterface>> {
    const response: AxiosResponse<UserServiceInterface.LoginServiceInterface> =
      await axios.post(`${BASE_API}/user/login`, {
        email,
        password,
      });
    return response;
  }

  static async CheckProfileId(): Promise<any> {
    const response: AxiosResponse<UserServiceInterface.SignUpServiceInterface> =
      await axios.get(
        `${BASE_API}/profile/profileId`,

        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

    return response;
  }

  static async CreateProfile(): Promise<any> {
    const response: AxiosResponse<UserServiceInterface.SignUpServiceInterface> =
      await axios.post(
        `${BASE_API}/profile`,
        // 요청 본문이 필요한 경우 여기에 추가
        {},
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
    return response;
  }
}
