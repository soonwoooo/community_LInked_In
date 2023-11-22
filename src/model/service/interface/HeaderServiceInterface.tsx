import { AxiosResponse } from "axios";

export interface HeaderServiceInterface {
  //api 미구현으로 목데이터로//
  getHeaderProfile: () => Promise<AxiosResponse<HeaderProfileData>>;
  //api 미구현으로 profiletitle꺼 api 훔쳐쓰기//
  getHeaderProfileTitle: (
    id: number
  ) => Promise<AxiosResponse<HeaderProfileTitleData>>;
}

export interface HeaderProfileData {
  id: number;
  profileImage: string;
  myName: string;
  todayView: number;
  viewChange: string;
}

export interface HeaderProfileTitleData {
  user: {
    id: number;
    name: string;
    profileImage: string;
  };
}
