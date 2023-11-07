import { Profile } from "@/model/entity/profile/Profile";

export interface ProfileServiceInterface {
  getTitle: () => Promise<ProfileTitleData>;
  getExperience: () => Promise<Profile>;
  getEducation: () => Promise<Profile>;
}

export interface ProfileTitleData {
  id: number;
  profileImage: string;
  name: string;
  location: string;
  jobDescription: string;
  connections: number;
}

export interface ExperienceInsideData {
  imgSrc: string;
  title: string;
  titleSub: string;
  periodStart: number;
  periodEnd: number;
  detail: string;
  id: number;
  workSpace: string;
}

export interface EducationInsideData {
  imgSrc: string;
  title: string;
  titleSub: string;
  periodStart: number;
  periodEnd: number;
  detail: string;
  id: number;
  workSpace: string;
}

export interface ExperienceData {
  id: number;
  message: string;
  category: string;
  data: ExperienceInsideData[];
}

export interface EducationData {
  id: number;
  message: string;
  category: string;
  data: EducationInsideData[];
}
