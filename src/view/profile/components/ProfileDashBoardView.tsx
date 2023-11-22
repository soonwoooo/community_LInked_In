"use Client";

import React from "react";
import styled from "styled-components";

const ProfileDashBoardView = () => {
  return (
    <ProfileBoard>
      <ProfileBoardInside>
        <BoardTitleBox>
          <BoardTitle>your dashboard</BoardTitle>
          <BoardClick>go to stats</BoardClick>
        </BoardTitleBox>
        <DashBoardContentBox>
          <DashBoardContent>
            <DashBoardNumber>367</DashBoardNumber>
            <DashBoardInfo>views today</DashBoardInfo>
          </DashBoardContent>
          <DashBoardContent>
            <DashBoardNumber>15</DashBoardNumber>
            <DashBoardInfo>posts views</DashBoardInfo>
          </DashBoardContent>
          <DashBoardContent>
            <DashBoardNumber>9</DashBoardNumber>
            <DashBoardInfo>search appearances</DashBoardInfo>
          </DashBoardContent>
        </DashBoardContentBox>
      </ProfileBoardInside>
    </ProfileBoard>
  );
};

const BoardTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(241, 241, 241);
`;

const BoardClick = styled.div`
  color: #0275b1;
  text-align: right;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: uppercase;
  cursor: pointer;
`;

const BoardTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const ProfileBoard = styled.div`
  width: 290px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 20px 60px 0px rgba(241, 244, 248, 0.5);
`;

const ProfileBoardInside = styled.div`
  padding: 25px 30px 30px 30px;
`;

const DashBoardContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DashBoardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashBoardNumber = styled.div`
  color: #0275b1;
  font-family: Gotham Pro;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const DashBoardInfo = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export default ProfileDashBoardView;
