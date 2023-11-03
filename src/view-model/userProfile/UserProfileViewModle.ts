import { UserProfileService } from "@/model/service/UserProfileService";

class UserProfileViewModel {
  async getProfileTitleData(): Promise<any> {
    try {
      const getTitle = new UserProfileService();
      const response = await getTitle.getTitle();

      return response.data;
    } catch (response) {
      return "wrong";
    }
  }

  async getProfileCareerData(): Promise<any> {
    try {
      const getCarrer = new UserProfileService();
      const response = await getCarrer.getCarrer();

      return response.data;
    } catch (response) {
      return "wrong";
    }
  }
}

export default UserProfileViewModel;
