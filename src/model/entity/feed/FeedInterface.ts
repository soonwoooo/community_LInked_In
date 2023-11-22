// export interface FeedPostInterface {
//   id: number;
//   content: string;
//   images: { imageUrl: string | null };
// }

export interface FeedListInterface {
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

//피드페이지속 나의 프로필//

export interface FeedHashTagInterface {
  id: number;
  hashTag: {
    id: number;
    content: string;
  }[];
}
//피드페이지속 나의 프로필 아래 해시태그//
