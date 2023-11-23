import { UserService } from "@/model/service/class/UserService";

export class UserViewModel {
  static async SignUp(
    email: string,
    password: string,
    passwordCheck: string,
    name: string
  ) {
    const emailRegex: RegExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const pwRegex: RegExp =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,20}$/;
    const nameRegex: RegExp = /^.+$/;
    if (!emailRegex.test(email)) {
      return "emailNotPerfect";
    } else if (!pwRegex.test(password)) {
      return "passwordNotPerfect";
    } else if (password !== passwordCheck) {
      return "passwordNotMatch";
    } else if (!nameRegex.test(name)) {
      return "nameNotPerfect";
    } else {
      try {
        const response = await UserService.SignUp(email, password, name);
        if (response.status >= 200 && response.status < 300) {
          return "success";
        }
      } catch (error) {
        return "duplicated";
      }
    }
  }

  static async CreateProfile() {
    try {
      const response = await UserService.CreateProfile();
      if (response.status >= 200 && response.status < 300) {
        return response.status;
      }
    } catch (error) {
      return "wrong";
    }
  }

  static async CheckProfileId() {
    try {
      const response = await UserService.CheckProfileId();
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    } catch (error) {
      return "notExist";
    }
  }

  static async Login(email: string, password: string) {
    if (email === "") {
      return "emailEmpty";
    } else if (password === "") {
      return "passwordEmpty";
    } else {
      try {
        const response = await UserService.Login(email, password);
        if (response.status >= 200 && response.status < 300) {
          return response.data;
        }
      } catch (error) {
        return "wrong";
      }
    }
  }
}
export default UserViewModel;
