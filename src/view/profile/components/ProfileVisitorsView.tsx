"use Client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

const ProfileVisitorsView = () => {
  return (
    <ProfileBoard>
      <ProfileBoardInside>
        <BoardTitleBox>
          <BoardTitle>visitors</BoardTitle>
          <BoardClick>view all</BoardClick>
        </BoardTitleBox>
        <VisitorsBoardContentBox>
          <VisitorsBoardContent>
            <VisitorsBoardPic
              alt="사진`"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={52}
              height={52}
            />
            <VisitorsBoardDetailBox>
              <VisitorsBoardName>박경재</VisitorsBoardName>
              <VisitorsBoardRole>경영지원 팀장</VisitorsBoardRole>
            </VisitorsBoardDetailBox>
          </VisitorsBoardContent>
          <VisitorsBoardContent>
            <VisitorsBoardPic
              alt="사진`"
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={52}
              height={52}
            />
            <VisitorsBoardDetailBox>
              <VisitorsBoardName>박병춘</VisitorsBoardName>
              <VisitorsBoardRole>서비스 기획</VisitorsBoardRole>
            </VisitorsBoardDetailBox>
          </VisitorsBoardContent>
          <VisitorsBoardContent>
            <VisitorsBoardPic
              alt="사진`"
              src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={52}
              height={52}
            />
            <VisitorsBoardDetailBox>
              <VisitorsBoardName>박성운</VisitorsBoardName>
              <VisitorsBoardRole>외과 의사</VisitorsBoardRole>
            </VisitorsBoardDetailBox>
          </VisitorsBoardContent>
          <VisitorsBoardContent>
            <VisitorsBoardPic
              alt="사진`"
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={52}
              height={52}
            />
            <VisitorsBoardDetailBox>
              <VisitorsBoardName>박지혜</VisitorsBoardName>
              <VisitorsBoardRole>출입국 단속</VisitorsBoardRole>
            </VisitorsBoardDetailBox>
          </VisitorsBoardContent>
          <VisitorsBoardContent>
            <VisitorsBoardPic
              alt="사진`"
              src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={52}
              height={52}
            />
            <VisitorsBoardDetailBox>
              <VisitorsBoardName>박건국</VisitorsBoardName>
              <VisitorsBoardRole>개발자</VisitorsBoardRole>
            </VisitorsBoardDetailBox>
          </VisitorsBoardContent>
        </VisitorsBoardContentBox>
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

const VisitorsBoardContentBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const VisitorsBoardContent = styled.div`
  display: flex;
  align-items: center;
`;

const VisitorsBoardPic = styled(Image)`
  flex-shrink: 0;
  border-radius: 26px;
  object-fit: cover;
  margin-right: 15px;
`;

const VisitorsBoardDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const VisitorsBoardName = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const VisitorsBoardRole = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
`;

export default ProfileVisitorsView;
