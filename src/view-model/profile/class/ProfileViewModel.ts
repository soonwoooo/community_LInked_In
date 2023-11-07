import { Profile } from "@/model/entity/profile/Profile";
import { ProfileService } from "@/model/service/class/ProfileService";
import { ProfileViewModelInterface } from "../interface/ProfileViewModelInterface";
import { ProfileTitleData } from "../interface/ProfileViewModelInterface";

class ProfileViewModel implements ProfileViewModelInterface {
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

  async getProfileExperience(): Promise<Profile> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getExperience();
      console.log("modelView :", response);
      console.log("modelView 타입:", typeof response);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  async getProfileEducation(): Promise<Profile> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getEducation();
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }
}

export default ProfileViewModel;
