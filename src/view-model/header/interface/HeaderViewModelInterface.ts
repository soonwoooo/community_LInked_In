export interface HeaderViewModelInterface {
  getHeaderProfileData: () => Promise<GetHeaderMyProfileData>;
  getHeaderFeedData: (id: number) => Promise<GetHeaderViewdata>;
}

export interface GetHeaderMyProfileData {
  id: number;
  profileImage: string;
  myName: string;
  todayView: number;
  viewChange: string;
}

export interface GetHeaderViewdata {
  user: {
    id: number;
    name: string;
    profileImage: string;
  };
}
