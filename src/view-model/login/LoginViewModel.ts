import UserService from "@/model/service/UserService";

class LoginViewModel {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  async showAlert(): Promise<any> {
    if (this.email === "") {
      alert("이메일을 입력해주세요");
    } else if (this.email === "") {
      alert("비밀번호를 입력해주세요");
    } else {
      try {
        const postLogin = new UserService();
        const response = await postLogin.login(this.email, this.password);
        return "success";
      } catch (error) {
        return "wrong";
      }
    }
  }
}

export default LoginViewModel;
