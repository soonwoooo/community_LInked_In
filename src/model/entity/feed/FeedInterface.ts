export interface FeedListInterface {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: { id: number; name: string; profileImage: string; job: string };
  likes: { id: number; createdAt: string };
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

export interface FeedMyProfileInterface {
  id: number;
  profileBackImage: string;
  about: string;
  user: {
    id: number;
    name: string;
    profileImage: string;
  };
}

export interface FeedHashTagInterface {
  id: number;
  hashTag: {
    id: number;
    content: string;
  }[];
}
