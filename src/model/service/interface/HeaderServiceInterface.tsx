import { AxiosResponse } from "axios";

export interface HeaderServiceInterface {
  getHeaderProfileTitle: (
    id: number
  ) => Promise<AxiosResponse<HeaderProfileTitleData>>;
}

export interface HeaderProfileTitleData {
  user: {
    id: number;
    name: string;
    profileImage: string;
  };
}
