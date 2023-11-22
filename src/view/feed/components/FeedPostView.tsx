"use clients";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { ChangeEvent } from "react";
import FeedViewModel from "@/view-model/feed/class/FeedViewModel";

const FeedPostView: React.FC<{ postFeed: any }> = ({ postFeed }) => {
  const [postInput, setPostInput] = useState<string>("");

  const saveUserFeed = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostInput(e.target.value);
  };

  const handlePostClick = async () => {
    postFeed(postInput);
    setPostInput("");
  };

  //완료

  return (
    <FeedPostWrapper>
      <PaddingContainer>
        <NewPostLetter>NewPost</NewPostLetter>
        <PostContentWrapper>
          <CommentTextArea
            placeholder="What’s on your mind?"
            value={postInput}
            onChange={saveUserFeed}
          ></CommentTextArea>
          <PostIconWrapper>
            <ImageIcon
              alt="사진 첨부아이콘"
              src="/images/image.png"
              height={24}
              width={24}
            ></ImageIcon>
            <SentWrapper onClick={handlePostClick}>
              <SentIcon
                alt="보내기 아이콘"
                src="/images/send.png"
                height={16}
                width={16}
              ></SentIcon>
            </SentWrapper>
          </PostIconWrapper>
        </PostContentWrapper>
      </PaddingContainer>
    </FeedPostWrapper>
  );
};

export default FeedPostView;

const FeedPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 850px;
  height: 135px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 20px 60px 0px rgba(241, 244, 248, 0.5);
`;

const PaddingContainer = styled.div`
  padding: 0 30px;
`;
const NewPostLetter = styled.p`
  color: #181818;
  margin-top: 25px;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 21px;
  min-height: 79px;
  height: auto;
  border-top: 1px solid #f4f4f4;
`;

const CommentTextArea = styled.textarea`
  border: none;
  margin-top: 22px;
  width: 760px;
  height: 32px;
  resize: none;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  white-space: pre-line;
  &::placeholder {
    color: rgba(24, 24, 24, 0.2);
    font-family: Gotham Pro;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
`;

const PostIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  gap: 16px;
`;

const ImageIcon = styled(Image)`
  cursor: pointer;
  margin-bottom: 31px;
`;

const SentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  margin-bottom: 26px;
  cursor: pointer;
`;

const SentIcon = styled(Image)``;
