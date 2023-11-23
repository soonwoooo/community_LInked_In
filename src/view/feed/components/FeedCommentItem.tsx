import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import FeedCommentModal from "./FeedCommentModal";
import FeedViewModel from "@/view-model/feed/class/FeedViewModel";
import { useRouter } from "next/navigation";

const FeedCommentItem: React.FC<{
  id: number;
  commenter: any;
  deleteComment: any;
}> = ({ id, commenter, deleteComment }) => {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedCommentOption, setSelectedCommentOption] = useState(null);
  const router = useRouter();

  const handleCommentModalOpen = (item: any) => {
    setSelectedCommentOption(item);
    setIsCommentModalOpen(!isCommentModalOpen);
  };

  const handleCommentModalClose = () => {
    setSelectedCommentOption(null);
    setIsCommentModalOpen(false);
  };
  const handleCommentOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".modal-container")) {
      handleCommentModalClose();
    }
  };

  useEffect(() => {
    if (isCommentModalOpen) {
      document.addEventListener("click", handleCommentOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleCommentOutsideClick);
    };
  }, [isCommentModalOpen]);

  const getProfileId = async () => {
    const ProfileId = await FeedViewModel.getProfileId(commenter.commenter.id);

    router.push(`/profile/${ProfileId.id}`);
  };

  return (
    <CommenterWrapper>
      <CommenterPaddingWrapper>
        <ProfileWrapper>
          <CommenterImage
            alt="댓글작성자 프로필"
            src={commenter.commenter.profileImage}
            width={40}
            height={40}
            onClick={getProfileId}
          ></CommenterImage>
        </ProfileWrapper>
        <CommemnterContentContainer>
          <CommentInforamtionWrapper>
            <FirstLineWrapper>
              <CommenterName>{commenter.commenter.name}</CommenterName>
              <RightContent>
                <CreatedAt>{commenter.createdAt.slice(0, 10)}</CreatedAt>
                <HambergerIcon onClick={handleCommentModalOpen}>
                  <FeedLocation>
                    {isCommentModalOpen && (
                      <FeedCommentModal
                        feedId={id}
                        id={commenter.commenter.id}
                        commentId={commenter.id}
                        deleteComment={deleteComment}
                      />
                    )}
                  </FeedLocation>
                </HambergerIcon>
              </RightContent>
            </FirstLineWrapper>
            <SecondLineWrapper>
              <CommenterJob>{commenter.commenter.job}</CommenterJob>
            </SecondLineWrapper>
            <ThirdLineWrapper>{commenter.content}</ThirdLineWrapper>
          </CommentInforamtionWrapper>
        </CommemnterContentContainer>
      </CommenterPaddingWrapper>
    </CommenterWrapper>
  );
};

export default FeedCommentItem;

const FeedLocation = styled.div`
  position: absolute;
  bottom: -60px;
  right: 5px;
`;

const FirstLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  cursor: pointer;
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

const CommenterWrapper = styled.div``;

const CommenterName = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const HambergerIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-image: url("/images/more-horizontal.png");
  position: relative;
`;
