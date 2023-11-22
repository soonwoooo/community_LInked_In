"use client";

import FeedPostView from "./components/FeedPostView";
import FeedListView from "./components/FeedListView";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FeedMyProfileView from "./components/FeedMyProfileView";
import FeedHashTagView from "./components/FeedHashTagView";
import FeedViewModel from "@/view-model/feed/class/FeedViewModel";

const FeedView = () => {
  const [index, setIndex] = useState<string>("0");
  const [myProfileData, setMyProfileData] = useState<any | null>(null);
  const [myHashtagData, setMyHashtagData] = useState<any | null>(null);
  const [feedListData, setFeedListData] = useState<any | null>(null);
  const router = useRouter();
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndex(e.target.value);
  };

  const searchParams = new URLSearchParams(document.location.search);

  const searchValue = searchParams.get("search");

  const fetchData = async () => {
    try {
      const getFeedList = await FeedViewModel
        .getFeedListData
        // searchValue
        ();

      setFeedListData(getFeedList);

      const getMyHashtag = await FeedViewModel.getFeedMyHashtagData();

      setMyHashtagData(getMyHashtag);

      const userId: number | null = parseInt(
        localStorage.getItem("userId") || "-1",
        10
      );
      const getMyProfile = await FeedViewModel.getFeedMyProfileData(userId);

      setMyProfileData(getMyProfile);

      // const getSearchParams = await FeedViewModel.getFeedMyProfileData(
      //   searchParams
      // );

      setMyProfileData(getMyProfile);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (
    myProfileData === null ||
    myHashtagData === null ||
    feedListData === null
  ) {
    return <div>Loading...</div>;
  }

  const createFeed = (content: any, image: string | null) => {
    FeedViewModel.postFeedData(content, image).then((res) => {
      setFeedListData(res);
    });
  };
  const createComment = (id: number, content: string) => {
    FeedViewModel.postMyComment(id, content).then((res) => {
      setFeedListData(res);
    });
  };

  const deleteComment = (feedId: number, id: number) => {
    FeedViewModel.deleteComment(feedId, id).then((res) => {
      setFeedListData(res);
    });
  };

  const deleteFeed = (id: number) => {
    FeedViewModel.deleteFeed(id).then((res) => {
      setFeedListData(res);
    });
  };

  return (
    <FeedWrapper>
      <FeedLeftContent>
        <FeedPostView postFeed={createFeed} />
        <SortContainer>
          <SortLine />
          <SortLetterContainer>
            <SortBy>Sort By:</SortBy>
            <SortSection value={index} onChange={onSelect}>
              <option value="0">recent</option>
            </SortSection>
          </SortLetterContainer>
        </SortContainer>
        <FeedListView
          data={feedListData}
          myProfileData={myProfileData}
          createComment={createComment}
          deleteComment={deleteComment}
          deleteFeed={deleteFeed}
        />
      </FeedLeftContent>
      <FeedRightContent>
        <FeedMyProfileView data={myProfileData} />
        <FeedHashTagView data={myHashtagData} />
      </FeedRightContent>
    </FeedWrapper>
  );
};

export default FeedView;
const FeedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 40px 0;
`;

const FeedLeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 850px;
  height: 80px;
`;

const SortLine = styled.div`
  width: 684px;
  height: 1px;
  background-color: #e7e7e7;
`;

const SortSection = styled.select`
  width: 90px;
  height: 20px;
  border: none;
  background-color: transparent;
  color: #0275b1;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const SortLetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
`;
const SortBy = styled.p`
  color: black;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const FeedRightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
