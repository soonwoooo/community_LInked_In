"use clients";

import React from "react";
import styled from "styled-components";
import FeedItem from "./FeedItem";
import { GetFeedListData } from "@/view-model/feed/interface/FeedViewModelInterface";

const FeedListView: React.FC<{
  data: any;
  myProfileData: any;
  createComment: any;
  deleteComment: any;
  deleteFeed: any;
}> = ({ data, myProfileData, createComment, deleteComment, deleteFeed }) => {
  return (
    <FeedListWrapper>
      <ModalWrapper>
        {data.map((feed: GetFeedListData) => (
          <FeedItem
            key={feed.id}
            data={feed}
            myProfileData={myProfileData}
            createComment={createComment}
            deleteComment={deleteComment}
            deleteFeed={deleteFeed}
          />
        ))}
      </ModalWrapper>
    </FeedListWrapper>
  );
};

export default FeedListView;
const ModalWrapper = styled.div``;

const FeedListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 850px;
  border-radius: 4px;
`;
