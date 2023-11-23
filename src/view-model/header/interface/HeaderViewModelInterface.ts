export interface HeaderViewModelInterface {
  getHeaderFeedData: (id: number) => Promise<GetHeaderViewdata>;
}

export interface GetHeaderViewdata {
  user: {
    id: number;
    name: string;
    profileImage: string;
  };
}
