import axios, { AxiosResponse } from "axios";
import {
  UserServiceModel,
  UserResponse,
} from "../interface/UserServiceInterface";

class UserService implements UserServiceModel {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "http://172.30.1.28:3000";
  }

  async signUp(email: string, password: string): Promise<UserResponse> {
    const response: AxiosResponse<UserResponse> = await axios.post(
      `${this.apiUrl}/user/signup`,
      {
        email,
        password,
      }
    );
    return response.data;
  }

  async login(email: string, password: string): Promise<UserResponse> {
    const response: AxiosResponse<UserResponse> = await axios.post(
      `${this.apiUrl}/user/login`,
      {
        email,
        password,
      }
    );
    return response.data;
  }
}

export default UserService;
