import * as ProfileViewModelInterface from "../interface/ProfileViewModelInterface";
import { ProfileService } from "@/model/service/class/ProfileService";

export class ProfileViewModel {
  static getProfileTitleData(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileTitleInterface> {
    try {
      const response = ProfileService.getTitle(id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static getProjectsData(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileProjectsInterface[]> {
    try {
      const response = ProfileService.getProjects(id);
      return response;
    } catch (error) {
      console.error("Error getting profile projects data:", error);
      throw error;
    }
  }

  static getProfileExperience(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileExperienceInterface[]> {
    try {
      const response = ProfileService.getExperience(id);
      return response;
    } catch (error) {
      console.error("Error getting profile experience data:", error);
      throw error;
    }
  }

  static getProfileEducation(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileEducationInterface[]> {
    try {
      const response = ProfileService.getEducation(id);
      return response;
    } catch (error) {
      console.error("Error getting profile education data:", error);
      throw error;
    }
  }

  static putProfileTitle(userInfo: any): Promise<any> {
    try {
      const response = ProfileService.putTitle(userInfo);
      return response;
    } catch (error) {
      console.error("Error putting profile title data:", error);
      throw error;
    }
  }

  static makeProject(userInfo: any): Promise<number> {
    try {
      const response = ProfileService.makeProject(userInfo);
      return response;
    } catch (error) {
      console.error("Error making profile project data:", error);
      throw error;
    }
  }

  static removeProject(id: number): Promise<number> {
    try {
      const response = ProfileService.removeProject(id);
      return response;
    } catch (error) {
      console.error("Error removing profile project data:", error);
      throw error;
    }
  }

  static updateProject(userInfo: any, id: number): Promise<number> {
    try {
      const response = ProfileService.updateProject(userInfo, id);
      return response;
    } catch (error) {
      console.error("Error updating profile project data:", error);
      throw error;
    }
  }

  ///////////////////

  static makeExperience(userInfo: any): Promise<number> {
    try {
      const response = ProfileService.makeExperience(userInfo);
      return response;
    } catch (error) {
      console.error("Error making profile experience data:", error);
      throw error;
    }
  }

  static removeExperience(id: number): Promise<number> {
    try {
      const response = ProfileService.removeExperience(id);
      return response;
    } catch (error) {
      console.error("Error removing profile experience data:", error);
      throw error;
    }
  }

  static updateExperience(userInfo: any, id: number): Promise<number> {
    try {
      const response = ProfileService.updateExperience(userInfo, id);
      return response;
    } catch (error) {
      console.error("Error updating profile experience data:", error);
      throw error;
    }
  }

  ////////////////

  static makeEducation(userInfo: any): Promise<number> {
    try {
      const response = ProfileService.makeEducation(userInfo);
      return response;
    } catch (error) {
      console.error("Error making profile education data:", error);
      throw error;
    }
  }

  static removeEducation(id: number): Promise<number> {
    try {
      const response = ProfileService.removeEducation(id);
      return response;
    } catch (error) {
      console.error("Error removing profile education data:", error);
      throw error;
    }
  }

  static updateEducation(userInfo: any, id: number): Promise<number> {
    try {
      const response = ProfileService.updateEducation(userInfo, id);
      return response;
    } catch (error) {
      console.error("Error updating profile education data:", error);
      throw error;
    }
  }
}

export default ProfileViewModel;
