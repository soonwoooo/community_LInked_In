import { ProfileService } from "@/model/service/ProfileService";
import {
  ProfileTitleData,
  ExperienceData,
  EducationData,
} from "@/model/service/model/ProfileServiceInterface";

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

  async getProfileExperience(): Promise<ExperienceData> {
    try {
      const getProfile = new ProfileService();
      const response = await getProfile.getExperience();

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  async getProfileEducation(): Promise<EducationData> {
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

export default UserProfileViewModel;
