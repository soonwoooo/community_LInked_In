export interface FeedServiceInterface {
  postFeed: (content: string, images: string | null) => Promise<PostMyFeedData>;
  postLike: (id: number) => Promise<PostLike>;
  deleteFeed: (id: number) => Promise<DeleteMyFeed>;
  postComment: (id: number, content: string) => Promise<PostMyComment>;
  deleteComment: (id: number) => Promise<DeleteMyComment>;
  getFeedList: () => Promise<FeedListData[]>;
  getMyProfile: (id: number) => Promise<MyProfileData>;
  getMyHashtag: (id: number) => Promise<HashTagData>;
}

export interface PostMyFeedData {
  content: string;
  images: { imageUrl: string | null };
}

export interface DeleteMyFeed {
  id: number;
}

export interface PostLike {
  id: number;
}
export interface PostMyComment {
  id: number;
  content: string;
}
export interface DeleteMyComment {
  feedId: number;
  id: number;
}

export interface PostConnection {
  id: number;
  message: string | null;
}

export interface ChangeUserId {
  id: number;
}

export interface FeedListData {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: { id: number; name: string; profileImage: string; job: string };
  likes: { id: number; createdAt: string };
  images: { imageUrl: string | null };
  isLiked: boolean;
  video: string;
  comments: {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    commenter: { id: number; name: string };
  };
  likesCount: number;
  commentsCount: number;
}

export interface MyProfileData {
  id: number;
  profileBackImage: string;
  about: string;
  user: {
    id: number;
    name: string;
    profileImage: string;
  };
}

//피드속 해시태그//
export interface HashTagData {
  id: number;
  hashTag: {
    id: number;
    content: string;
  }[];
}
