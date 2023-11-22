"use clients";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { GetFeedMyProfileData } from "@/view-model/feed/interface/FeedViewModelInterface";
import { useRouter } from "next/navigation";

const FeedMyProfileView: React.FC<{ data: GetFeedMyProfileData }> = ({
  data,
}) => {
  const profileId = localStorage.getItem("profileId");
  const router = useRouter();
  const goToMyProfile = () => {
    router.push(`/profile/${profileId}`);
  };
  return (
    <div>
      <FeedMyProfileViewWrapper>
        <BackgroundWrapper>
          <BackgroundImage
            alt="프로필배경"
            src={data.profileBackImage}
          ></BackgroundImage>
        </BackgroundWrapper>
        <ProfileImageWrapper>
          <ProfileImage
            alt="프로필 사진"
            src={data.user.profileImage}
            width={100}
            height={100}
            onClick={goToMyProfile}
          ></ProfileImage>
        </ProfileImageWrapper>
        <UserNameWrapper>
          <UserName>{data.user.name}</UserName>
          <LinkInIcon
            alt="링크인 아이콘 뱃지"
            src="/images/Logo-yellow.png"
            width={12}
            height={12}
          />
        </UserNameWrapper>
        <AboutMeWrapper>
          <AboutMe>{data.about}</AboutMe>
        </AboutMeWrapper>
      </FeedMyProfileViewWrapper>
      <FeedNewArticleWrapper>
        <FeedNewArticleButton>write new article</FeedNewArticleButton>
      </FeedNewArticleWrapper>
    </div>
  );
};

export default FeedMyProfileView;

const FeedMyProfileViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: auto;
  min-height: 280px;
  border-radius: 4px;
  background: #fff;
`;

const BackgroundWrapper = styled.div`
  width: 290px;
  height: 120px;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 6px solid white;
  border-radius: 50%;
  margin-top: -50px;
`;
const ProfileImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
`;

const UserNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
`;

const UserName = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LinkInIcon = styled(Image)``;

const AboutMeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  margin-top: 10px;
  margin-bottom: 26px;
  word-break: break-all;
`;

const AboutMe = styled.p`
  color: #181818;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
`;
const FeedNewArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 290px;
  height: 75px;
  border-radius: 4px;
  background: #fff;
`;

const FeedNewArticleButton = styled.button`
  width: 230px;
  height: 32px;
  border-radius: 4px;
  border: none;
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  color: #fff;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
`;
