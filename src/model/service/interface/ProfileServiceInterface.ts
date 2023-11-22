export interface ProfileServiceInterface {
  getTitle: (id: number) => Promise<ProfileTitleInterface>;
  getProjects: (id: number) => Promise<ProfileProjectsInterface[]>;
  getExperience: (id: number) => Promise<ProfileExperienceInterface[]>;
  getEducation: (id: number) => Promise<ProfileEducationInterface[]>;
  // postTitle: (id: number) => Promise<PutTitleInterface>;
}

export interface ProfileTitleInterface {
  id: number;
  profileBackImage: string;
  location: string;
  address: string;
  jobDescription: string;
  about: string;
  user: {
    id: number;
    email: string;
    name: string;
    profileImage: string;
  };
}

export interface ProfileProjectsInterface {
  id: number;
  coverImage: {
    id: number;
    image: string;
  };
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
}

export interface ProfileExperienceInterface {
  imgSrc: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  id: number;
  experienceCompany: {
    id: number;
    name: string;
    logo: string;
    location: string;
  };
}

export interface ProfileEducationInterface {
  id: number;
  course: string;
  description: string;
  startDate: string;
  endDate: string | null;
  educationInstitute: {
    id: number;
    name: string;
    logo: string;
  };
}

// export interface PutTitleInterface {}

// export interface PutProjectsInterface {}

// export interface PutExperienceInterface {}

// export interface PutEducationInterface {}
