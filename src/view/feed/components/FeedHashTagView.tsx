"use clients";

import React from "react";
import styled from "styled-components";
import { GetFeedMyHashtagData } from "@/view-model/feed/interface/FeedViewModelInterface";

const FeedHashTagView: React.FC<{ data: GetFeedMyHashtagData }> = ({
  data,
}) => {
  return (
    <HashTagWrapper>
      <PaddingWrapper>
        <FollowHashTagWrapper>
          <FollowhashTagLetter>Followed hashtags</FollowhashTagLetter>
        </FollowHashTagWrapper>
        <MapWrapper>
          {data.hashTag.map((data) => (
            <HashTagButtonWrapper key={data.id}>
              <HashTageButton>#{data.content}</HashTageButton>
            </HashTagButtonWrapper>
          ))}
        </MapWrapper>
      </PaddingWrapper>
    </HashTagWrapper>
  );
};

export default FeedHashTagView;

const MapWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HashTagWrapper = styled.div`
  width: 290px;
  height: auto;
  min-height: 265px;
  border-radius: 4px;
  background: #fcfdfd;
`;

const PaddingWrapper = styled.div`
  padding: 0 30px;
`;

const FollowHashTagWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
  width: 100%;
  height: 56px;
`;

const FollowhashTagLetter = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const HashTagButtonWrapper = styled.div``;

const HashTageButton = styled.button`
  margin: 5px;
  height: 32px;
  padding: 7px 12px;
  border-radius: 4px;
  background: #e9f0f8;
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  border: none;
  cursor: pointer;
`;
