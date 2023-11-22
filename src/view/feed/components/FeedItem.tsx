import { useState } from "react";
import styled from "styled-components";

import FeedModal from "@/view/feed/components/FeedModal";
import Image from "next/image";
import { useEffect } from "react";
import FeedViewModel from "@/view-model/feed/class/FeedViewModel";
import { useRef } from "react";
import { ChangeEvent } from "react";
import FeedCommentModal from "./FeedCommentModal";
import FeedCommentItem from "./FeedCommentItem";
import { useRouter } from "next/navigation";

const FeedItem: React.FC<{
  data: any;
  myProfileData: any;
  createComment: any;
  deleteComment: any;
  deleteFeed: any;
}> = ({ data, myProfileData, createComment, deleteComment, deleteFeed }) => {
  const id = data.id;
  const userId = data.author;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [likes, setLikes] = useState(data.likesCount);
  const [isLiked, setIsLiked] = useState(data.isLiked);
  const textareaRef = useRef(null);
  const [height, setHeight] = useState(40); // 최소 높이
  const [showComments, setShowComments] = useState(false);
  const [commentOpened, setCommentOpened] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const maxCommentsToShow = 2;
  const [commentText, setCommentText] = useState("");
  const [showPostButton, setShowPostButton] = useState(false);
  const router = useRouter();
  //댓글 더보기
  const handleShowMoreComments = () => {
    setShowAllComments(true);
  };

  // 댓글 영역 열고 닫는 함수를 수정합니다.
  const handleCommentToggle = () => {
    if (!commentOpened) {
      setShowComments(true);
      setCommentOpened(true); // 댓글 영역이 열렸음을 기억합니다.
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const element: any | null = textareaRef.current;
    const lineHeight = 21; // 텍스트 라인 높이
    const minHeight = 40; // 최소 높이
    const maxRows = 10; // 최대 줄 수
    element.style.height = "auto"; // 기존에 설정된 높이 제거
    const newHeight = Math.min(element.scrollHeight, maxRows * lineHeight); // 새로운 높이 계산
    element.style.height = Math.max(newHeight, minHeight) + "px"; // 텍스트 에어리어 높이 업데이트
    setCommentText(e.target.value);
    if (e.target.value.trim().length > 0) {
      setShowPostButton(true);
    } else {
      setShowPostButton(false);
    }
  };

  const handleModalOpen = (item: any) => {
    setSelectedOption(item);
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setSelectedOption(null);
    setIsModalOpen(false);
  };
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".modal-container")) {
      handleModalClose();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  const userInformation = data.author;
  const comment = data.comments;

  // 좋아요 통신
  const handleLike = async () => {
    if (!isLiked) {
      await FeedViewModel.postLikeData(id);
      setLikes((prevLikes: number) => prevLikes + 1);
    } else {
      await FeedViewModel.deleteLikeData(id);
      setLikes((prevLikes: number) => prevLikes - 1);
    }
    setIsLiked(!isLiked);
  };

  const handlePostComment = async () => {
    createComment(id, commentText);
    setCommentText("");
  };

  const getProfileId = async () => {
    const ProfileId = await FeedViewModel.getProfileId(userInformation.id);

    router.push(`/profile/${ProfileId.id}`);
  };

  //userInformation.id 가 유저의 아이디
  return (
    <MapWrapper key={id}>
      <RecommandedWrapper>
        <RecommandedTitle>
          <BlueText></BlueText>
          <BlackText></BlackText>
          <BlueText></BlueText> <BlackText></BlackText>
        </RecommandedTitle>
        <HambergerIconWrapper>
          <HambergerIcon onClick={handleModalOpen}>
            <FeedLocation>
              {isModalOpen && (
                <FeedModal
                  feedId={id}
                  userId={userId}
                  deleteFeed={deleteFeed}
                />
              )}
            </FeedLocation>
          </HambergerIcon>
        </HambergerIconWrapper>
      </RecommandedWrapper>
      <FeedContentWrapper>
        <PaddingContainer>
          <ProfileImageAndName>
            <ProfileImage
              alt="프로필이미지"
              src={userInformation.profileImage}
              width={52}
              height={52}
              onClick={getProfileId}
            ></ProfileImage>
            <NameAndJobWrapper>
              <UserName>{userInformation.name}</UserName>
              <UserJob>{userInformation.job}</UserJob>
              <FeedCreatedAt>{data.createdAt.slice(0, 10)}</FeedCreatedAt>
            </NameAndJobWrapper>
          </ProfileImageAndName>
          <FeedTextWrapper>
            <FeedText>{data.content}</FeedText>
          </FeedTextWrapper>
          <ImageMapWrapper>
            {data.images.map((item: any) => (
              <FeedImage
                key={item.id}
                src={item.imageUrl}
                width={820}
                height={300}
                alt="피드 이미지"
              ></FeedImage>
            ))}
          </ImageMapWrapper>
        </PaddingContainer>
      </FeedContentWrapper>
      <LikeAndCommentShareWrapper>
        <LikeAndCommentWrapper>
          <LikeWrapper
            onClick={() => {
              handleLike();
            }}
          >
            <LikeIcon
              alt="좋아요 아이콘"
              src={
                isLiked === false
                  ? "/images/thumbs-up.png"
                  : "/images/filled-thumbs-up.png"
              }
              width={16}
              height={16}
            ></LikeIcon>
            <LikeNumber>{likes}</LikeNumber>
          </LikeWrapper>
          <CommentWrapper onClick={handleCommentToggle}>
            <CommentIcon
              alt="댓글 아이콘"
              src="/images/message-circle.png"
              width={16}
              height={16}
            ></CommentIcon>
            <CommentNumber>{data.commentsCount}</CommentNumber>
          </CommentWrapper>
        </LikeAndCommentWrapper>
        <ShareWrapper>
          <ShareIcon
            alt="공유 아이콘"
            src="/images/share-2.png"
            width={16}
            height={16}
          ></ShareIcon>
          <ShareText>Share</ShareText>
        </ShareWrapper>
      </LikeAndCommentShareWrapper>
      {showComments && (
        <TotalCommentWrapper>
          <CommentClickWrapper>
            <CommenterImageWrapper>
              <CommenterIamge
                alt="댓글작성유저 프로필"
                src={myProfileData.user.profileImage}
                width={40}
                height={40}
              ></CommenterIamge>
            </CommenterImageWrapper>
            <MyContentWrapper>
              <CommenterText>
                <TextArea
                  ref={textareaRef}
                  height={height}
                  onChange={handleChange}
                  placeholder="댓글 남기기"
                  value={commentText}
                ></TextArea>
              </CommenterText>
              <IconWrapper>
                <Emoticon
                  alt="이모티콘 아이콘"
                  src="/images/happy.png"
                  width={20}
                  height={20}
                ></Emoticon>
                <ImageIcon
                  alt="그림첨부 아이콘"
                  src="/images/editing.png"
                  width={20}
                  height={20}
                ></ImageIcon>
              </IconWrapper>
            </MyContentWrapper>
          </CommentClickWrapper>
          {showPostButton && commentText && commentText.trim().length > 0 && (
            <PostCommentButton
              onClick={() => {
                handlePostComment();
              }}
            >
              올리기
            </PostCommentButton>
          )}
          <div>
            {comment
              .slice(0, showAllComments ? comment.length : maxCommentsToShow)
              .map((commenter: any) => (
                <FeedCommentItem
                  id={id}
                  commenter={commenter}
                  deleteComment={deleteComment}
                />
              ))}
            {!showAllComments && comment.length > maxCommentsToShow && (
              <ShowMoreButtonWrapper>
                <ShowMoreButton onClick={handleShowMoreComments}>
                  댓글 더보기
                </ShowMoreButton>
              </ShowMoreButtonWrapper>
            )}
          </div>
        </TotalCommentWrapper>
      )}
    </MapWrapper>
  );
};

export default FeedItem;
const ShowMoreButtonWrapper = styled.div`
  margin-top: 15px;
  margin-left: 15px;
  width: max-content;
`;
const ShowMoreButton = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #edf3f8;
  }
`;

const ImageMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FirstLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostCommentButton = styled.button`
  border-radius: 16px;
  background-color: #0a66c2;
  border: none;
  font-weight: 600;
  text-align: center;
  color: white;
  height: 30px;
  width: 60px;
  margin-left: 60px;
  cursor: pointer;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const SecondLineWrapper = styled.div``;

const ThirdLineWrapper = styled.div`
  margin-top: 20px;
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  word-break: break-word;
`;

const TotalCommentWrapper = styled.div``;
const CommenterJob = styled.div`
  color: rgba(24, 24, 24, 0.6);
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
`;
const CommemnterContentContainer = styled.div`
  padding: 10px;
  background: #dde7f1;
  border-radius: 0 4px 4px 4px;
  width: 100%;
`;

const CommenterImage = styled(Image)`
  border-radius: 50%;
`;

const CommenterPaddingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 15px 15px 0 15px;
`;

const ProfileWrapper = styled.div`
  width: 40px;
  height: 40px;
`;
const CreatedAt = styled.div`
  color: rgba(24, 24, 24, 0.6);
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
`;

const CommentInforamtionWrapper = styled.div``;
const CommentClickWrapper = styled.div`
  display: flex;
  gap: 8px;
  height: auto;
  background: #fff;
  border-top: 1px solid #f4f4f4;
  padding: 15px 15px;
`;
const MyContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 40px;
  border: 2px solid gray;
  border-radius: 16px;
`;

const CommenterImageWrapper = styled.div`
  height: 40px;
`;

const CommenterIamge = styled(Image)`
  border-radius: 50%;
`;

const CommenterWrapper = styled.div``;

const CommenterName = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Emoticon = styled(Image)``;

const ImageIcon = styled(Image)``;

const CommenterText = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 10px;
  width: 100%;
  height: 40px;
  height: auto;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  margin-right: 8px;
  gap: 8px;
`;

const TextArea = styled.textarea<{ height: number }>`
  outline: none;
  border: none;
  width: 85%;
  min-height: 40px;
  resize: none;
  overflow: hidden;
  line-height: 1.5;
  /* 높이 자동 조절 */
  height: ${({ height }) => height}px;
`;
const MapWrapper = styled.div`
  margin-bottom: 30px;
  background: #fff;
`;
const RecommandedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 45px;
  border-bottom: 1px solid #f4f4f4;
`;

const RecommandedTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const BlueText = styled.p`
  color: #0275b1;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 15px */
`;
const BlackText = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

const HambergerIconWrapper = styled.div``;
const HambergerIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-image: url("/images/more-horizontal.png");
  position: relative;
`;

const FeedLocation = styled.div`
  position: absolute;
  bottom: -80px;
  right: 5px;
`;

const FeedContentWrapper = styled.div`
  padding: 15px;
`;

const PaddingContainer = styled.div`
  /* padding: 15px */
`;

const LikeAndCommentShareWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #f4f4f4;
  width: 850px;
  height: 49px;
`;

const LikeAndCommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 188px;
  height: 49px;
`;

const IconWrapperStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 49px;
  cursor: pointer;
`;
const LikeWrapper = styled(IconWrapperStyle)`
  width: 98px;
  border-right: 1px solid #f4f4f4;
`;

const LikeIcon = styled(Image)``;

const LikeNumber = styled.span`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const CommentWrapper = styled(IconWrapperStyle)`
  width: 98px;
  border-right: 1px solid #f4f4f4;
`;

const CommentIcon = styled(Image)``;

const CommentNumber = styled.span`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const ShareWrapper = styled(IconWrapperStyle)`
  width: 126px;
  border-left: 1px solid #f4f4f4;
`;

const ShareIcon = styled(Image)``;

const ShareText = styled.span`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const ProfileImageAndName = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  cursor: pointer;
`;

const NameAndJobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 15px;
`;

const UserName = styled.p`
  margin-top: 10px;
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UserJob = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const FeedCreatedAt = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const FeedTextWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

const FeedText = styled.div`
  width: 100%;
  height: auto;
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  word-break: break-word;
`;

const FeedImage = styled(Image)``;
