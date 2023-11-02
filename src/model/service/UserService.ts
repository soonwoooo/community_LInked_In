import axios from "axios";

class UserService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = "http://172.30.1.28:3000"; // URL을 하드 코딩
  }

  async signUp(email: string, password: string): Promise<any> {
    return axios.post(`${this.apiUrl}/user/signup`, {
      email: email,
      password: password,
    });
  }

  async login(email: string, password: string): Promise<any> {
    return axios.post(`${this.apiUrl}/user/login`, {
      email: email,
      password: password,
    });
  }
}

export default UserService;
