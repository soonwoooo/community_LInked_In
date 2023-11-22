import { AxiosResponse } from "axios";

export interface FeedViewModelInterface {
  getFeedListData: () => Promise<GetFeedListData[]>;
  getFeedMyProfileData: (id: number) => Promise<GetFeedMyProfileData>;
  getFeedMyHashtagData: () => Promise<GetFeedMyHashtagData>;
}

export interface GetFeedListData {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: { id: number; name: string; profileImage: string; job: string };
  likes: { id: number; createdAt: string }; //어떤사람이 좋아요눌럿는지?
  images: { imageUrl: string | null };
  video: string;
  isLiked: boolean;
  comments: {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    commenter: { id: number; name: string };
  }; //댓글
  likesCount: number;
  commentsCount: number;
}

export interface GetFeedMyProfileData {
  id: number;
  profileBackImage: string;
  about: string;
  user: {
    id: number;
    name: string;
    profileImage: string;
  };
}
export interface GetFeedMyHashtagData {
  id: number;
  hashTag: {
    id: number;
    content: string;
  }[];
}

export interface getProfileIdData {
  id: number;
}
