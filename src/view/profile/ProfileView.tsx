"use client";

import ProfileTitle from "./components/ProfileTitle";
import ProfileEducation from "./components/ProfileEducation";
import ProfileExperience from "./components/ProfileExperience";
import styled from "styled-components";
import Image from "next/image";

const ProfileView = () => {
  return (
    <ProfileStyle>
      <ProfileLeft>
        <ProfileTitle />
        <ProfileUpperInfo>PROFILE</ProfileUpperInfo>
        <ProfileUpperInfoEmptySpace />
        <ProfileTotalBox>
          <ProfileBox>
            <ProfileBoxInside>
              <ProfileBoxTitle>About</ProfileBoxTitle>
              <ProfileAboutContent>
                I'm more experienced in eCommerce web projects and mobile
                banking apps, but also like to work with creative projects, such
                as landing pages or unusual corporate websites.
              </ProfileAboutContent>
              <ProfileMore>see more</ProfileMore>
            </ProfileBoxInside>
          </ProfileBox>
          <ProfileBox>
            <ProfileBoxInside>
              <ProfileBoxTitleBox>
                <ProfileBoxTitle>Projects</ProfileBoxTitle>
                <ProfileProjectsNumber>3 of 12</ProfileProjectsNumber>
              </ProfileBoxTitleBox>
              <ProfileProjectsContent>
                <ProfileProjectsCard>
                  <ProfileProjectsPic />
                  <ProfileProjectsTitle>
                    Zara redesign concenpt
                  </ProfileProjectsTitle>
                  <ProfileProjectsDetail>
                    UX/UI design, 15.07.2019
                  </ProfileProjectsDetail>
                </ProfileProjectsCard>
                <ProfileProjectsCard>
                  <ProfileProjectsPic />
                  <ProfileProjectsTitle>
                    Zara redesign concenpt
                  </ProfileProjectsTitle>
                  <ProfileProjectsDetail>
                    UX/UI design, 15.07.2019
                  </ProfileProjectsDetail>
                </ProfileProjectsCard>
                <ProfileProjectsCard>
                  <ProfileProjectsPic />
                  <ProfileProjectsTitle>
                    Zara redesign concenpt
                  </ProfileProjectsTitle>
                  <ProfileProjectsDetail>
                    UX/UI design, 15.07.2019
                  </ProfileProjectsDetail>
                </ProfileProjectsCard>
              </ProfileProjectsContent>
              <ProfileMore>show all (12)</ProfileMore>
            </ProfileBoxInside>
          </ProfileBox>
          <ProfileCareerStyle>
            <ProfileCareerWrap>
              <CareerCategory>Experience</CareerCategory>
              <ProfileExperience />
            </ProfileCareerWrap>
          </ProfileCareerStyle>
          <ProfileCareerStyle>
            <ProfileCareerWrap>
              <CareerCategory>Education</CareerCategory>
              <ProfileEducation />
            </ProfileCareerWrap>
          </ProfileCareerStyle>
        </ProfileTotalBox>
      </ProfileLeft>
      <ProfileRight>
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

        <ProfileBoard>
          <ProfileBoardInside>
            <BoardTitleBox>
              <BoardTitle>visitors</BoardTitle>
              <BoardClick>view all</BoardClick>
            </BoardTitleBox>
            <VisitorsBoardContentBox>
              <VisitorsBoardContent>
                <VisitorsBoardPic />
                <VisitorsBoardDetailBox>
                  <VisitorsBoardName>Darlene Black</VisitorsBoardName>
                  <VisitorsBoardRole>HR-manager</VisitorsBoardRole>
                </VisitorsBoardDetailBox>
              </VisitorsBoardContent>
              <VisitorsBoardContent>
                <VisitorsBoardPic />
                <VisitorsBoardDetailBox>
                  <VisitorsBoardName>Theresa Steward</VisitorsBoardName>
                  <VisitorsBoardRole>iOS developer</VisitorsBoardRole>
                </VisitorsBoardDetailBox>
              </VisitorsBoardContent>
              <VisitorsBoardContent>
                <VisitorsBoardPic />
                <VisitorsBoardDetailBox>
                  <VisitorsBoardName>Brandom Wilson</VisitorsBoardName>
                  <VisitorsBoardRole>Senior UX designer</VisitorsBoardRole>
                </VisitorsBoardDetailBox>
              </VisitorsBoardContent>
              <VisitorsBoardContent>
                <VisitorsBoardPic />
                <VisitorsBoardDetailBox>
                  <VisitorsBoardName>Kyle Fish</VisitorsBoardName>
                  <VisitorsBoardRole>Product designer</VisitorsBoardRole>
                </VisitorsBoardDetailBox>
              </VisitorsBoardContent>
              <VisitorsBoardContent>
                <VisitorsBoardPic />
                <VisitorsBoardDetailBox>
                  <VisitorsBoardName>Audrey Alexander</VisitorsBoardName>
                  <VisitorsBoardRole>Team lead at Google</VisitorsBoardRole>
                </VisitorsBoardDetailBox>
              </VisitorsBoardContent>
            </VisitorsBoardContentBox>
          </ProfileBoardInside>
        </ProfileBoard>
      </ProfileRight>
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  padding-top: 40px;
  padding-bottom: 280px;
  display: flex;
  gap: 40px;
`;

const ProfileLeft = styled.div``;

const ProfileRight = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const ProfileUpperInfo = styled.div`
  width: 240px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px 4px 0px 0px;
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const ProfileUpperInfoEmptySpace = styled.div`
  width: 850px;
  height: 30px;
  flex-shrink: 0;
  background: linear-gradient(
    180deg,
    rgba(241, 244, 248, 0.8) 0%,
    rgba(241, 244, 248, 0) 100%
  );
  border-top: 1px solid rgb(241, 241, 241);
`;

const ProfileTotalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileBox = styled.div`
  width: 850px;
  flex-shrink: 0;
  background-color: white;
`;

const ProfileBoxInside = styled.div`
  padding: 30px;
`;

const ProfileBoxTitleBox = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
`;

const ProfileBoxTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ProfileProjectsNumber = styled.div`
  margin-left: 15px;
  color: #747474;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ProfileAboutContent = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  margin-bottom: 20px;
`;

const ProfileMore = styled.div`
  color: #0275b1;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 5px;
  cursor: pointer;
`;

const ProfileProjectsContent = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
`;

const ProfileProjectsCard = styled.div``;

const ProfileProjectsPic = styled.div`
  width: 250px;
  height: 160px;
  flex-shrink: 0;
  background-color: orange;
  display: block;
  margin-bottom: 15px;
`;

const ProfileProjectsTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  margin-bottom: 5px;
`;

const ProfileProjectsDetail = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 15px */
`;

const ProfileCareerStyle = styled.div`
  width: 850px;
  flex-shrink: 0;
  background-color: white;
`;

const ProfileCareerWrap = styled.div`
  padding: 30px;
`;

const CareerCategory = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
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

const BoardTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(241, 241, 241);
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
  line-height: 150%; /* 21px */
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

const VisitorsBoardPic = styled.div`
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 26px;
  background-color: orange;
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

export default ProfileView;
