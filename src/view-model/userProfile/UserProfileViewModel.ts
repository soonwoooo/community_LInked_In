import { ProfileService } from "@/model/service/ProfileService";
import {
  ApiResponse,
  ProfileTitleData,
} from "@/model/service/model/ProfileServiceModel";

class UserProfileViewModel {
  async getProfileTitleData(): Promise<ProfileTitleData> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getTitle();

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  async getProfileCareerData(): Promise<ApiResponse> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getCarrer();

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }
}

export default UserProfileViewModel;
