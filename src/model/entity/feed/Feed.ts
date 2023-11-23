import * as FeedInterface from "./FeedInterface";

export class FeedListImp implements FeedInterface.FeedListInterface {
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
  };
  likesCount: number;
  commentsCount: number;

  constructor(
    id: number,
    content: string,
    createdAt: string,
    updatedAt: string,
    author: { id: number; name: string; profileImage: string; job: string },
    likes: { id: number; createdAt: string },
    images: { imageUrl: string | null },
    video: string,
    isLiked: boolean,
    comments: {
      id: number;
      content: string;
      createdAt: string;
      updatedAt: string;
      commenter: { id: number; name: string };
    },
    likesCount: number,
    commentsCount: number
  ) {
    this.id = id;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.author = author;
    this.likes = likes;
    this.isLiked = isLiked;
    this.images = images;
    this.video = video;
    this.comments = comments;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
  }
}

export class FeedMyProfileImp implements FeedInterface.FeedMyProfileInterface {
  id: number;

  profileBackImage: string;
  about: string;
  user: {
    id: number;
    name: string;
    profileImage: string;
  };

  constructor(
    id: number,
    profileBackImage: string,
    about: string,
    user: {
      id: number;
      name: string;
      profileImage: string;
    }
  ) {
    this.id = id;
    this.profileBackImage = profileBackImage;
    this.user = user;
    this.about = about;
  }
}

export class FeedHashTagImp implements FeedInterface.FeedHashTagInterface {
  id: number;
  hashTag: {
    id: number;
    content: string;
  }[];

  constructor(
    id: number,
    hashTag: {
      id: number;
      content: string;
    }[]
  ) {
    this.id = id;
    this.hashTag = hashTag;
  }
}
