import UserService from "@/model/service/UserService";

class SignUpViewModel {
  private email: string;
  private password: string;
  private passwordCheck: string;

  constructor(email: string, password: string, passwordCheck: string) {
    this.email = email;
    this.password = password;
    this.passwordCheck = passwordCheck;
  }

  isEmailValid(): boolean {
    const emailRegex: RegExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return emailRegex.test(this.email);
  }

  isPasswordValid(): boolean {
    const pwRegex: RegExp =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,20}$/;
    return pwRegex.test(this.password);
  }

  doPasswordsMatch(): boolean {
    return this.password === this.passwordCheck;
  }

  async showAlert(): Promise<any> {
    if (!this.isEmailValid()) {
      alert("이메일이 유효하지 않습니다.");
    } else if (!this.isPasswordValid()) {
      alert("비밀번호가 유효하지 않습니다.");
    } else if (!this.doPasswordsMatch()) {
      alert("비밀번호 확인이 일치하지 않습니다.");
    } else {
      try {
        const postSignUp = new UserService();
        const response = await postSignUp.signUp(this.email, this.password);
        return "success";
      } catch (error) {
        console.log("중복된 이메일");
        return "duplicated";
      }
    }
  }
}
export default SignUpViewModel;
