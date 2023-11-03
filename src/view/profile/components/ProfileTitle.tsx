"use Client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  GetProfile,
  ProfileTitleData,
} from "../../../model/service/UserProfileService";

const ProfileTitle: React.FC = () => {
  const [data, setData] = useState<ProfileTitleData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProfile = new GetProfile();
        const titleData = await getProfile.getTitle();

        setData(titleData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileTitleWrapper>
      <BackGroundImageWrapper>
        <IconWrapper>
          <UpLoadContainer>
            <UpLoadImage
              alt="업로드 아이콘"
              src="images/upload.png"
            ></UpLoadImage>
          </UpLoadContainer>
          <RightIcon>
            <EditContainer>
              <EditImage alt="편집 아이콘" src="images/edit.png"></EditImage>
              <EditLetter>EDIT PROFILE</EditLetter>
            </EditContainer>
            <HamburgerContainer>
              <HamburgerImage
                alt="옵션 아이콘"
                src="images/more-horizontal.png"
              ></HamburgerImage>
            </HamburgerContainer>
          </RightIcon>
        </IconWrapper>
      </BackGroundImageWrapper>
      <InformationWrapper>
        <ProfileImageWrapper>
          <ProfileImage
            alt="프로필 이미지"
            src={data.profileImage}
          ></ProfileImage>
        </ProfileImageWrapper>
        <AboutMeWrapper>
          <NameAndLocationWrapper>
            <NameLetter>{data.name}</NameLetter>
            <LocationWrapper>
              <LocationImage
                alt="화살표이미지"
                src="images/navigation.png"
              ></LocationImage>
              <LocationLetter>{data.location}</LocationLetter>
            </LocationWrapper>
          </NameAndLocationWrapper>
          <JobExplanitionWrapper>{data.jobDescription}</JobExplanitionWrapper>
          <ButtonWrapper>
            <LeftButton>CONTACT INFO</LeftButton>
            <RightButton>{data.connections} CONNECTIONS</RightButton>
          </ButtonWrapper>
        </AboutMeWrapper>
      </InformationWrapper>
    </ProfileTitleWrapper>
  );
};

export default ProfileTitle;

const ProfileTitleWrapper = styled.div`
  width: 850px;
  height: 360px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 20px 60px 0px rgba(241, 244, 248, 0.5);
`;
const BackGroundImageWrapper = styled.div`
  width: 100%;
  height: 50%;
  background-image: url("images/Rectangle 3.png");
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 30px;
  padding-top: 30px;
`;

const IconContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 10px 30px 0px rgba(113, 123, 133, 0.05);
  height: 36px;
  width: 36px;
  cursor: pointer;
`;
const UpLoadContainer = styled(IconContainerStyle)``;

const UpLoadImage = styled.img`
  width: 16px;
  height: 16px;
`;

const RightIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const EditContainer = styled(IconContainerStyle)`
  display: flex;
  justify-content: space-evenly;
  width: 132px;
`;
const EditImage = styled.img`
  width: 16px;
  height: 16px;
`;

const EditLetter = styled.p`
  color: #181818;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

const HamburgerContainer = styled(IconContainerStyle)``;
const HamburgerImage = styled.img`
  width: 24px;
  height: 24px;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 50%;
  margin-top: -20px;
`;

const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;
const AboutMeWrapper = styled.div`
  width: 620px;
  height: 100%;
`;

const NameAndLocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const NameLetter = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 30px;
`;

const LocationImage = styled.img`
  width: 16px;
  height: 16px;
`;

const LocationLetter = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const JobExplanitionWrapper = styled.div`
  display: inline-block;
  margin-right: 40px;
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 14px;
`;

const Button = styled.button`
  width: 170px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
`;

const LeftButton = styled(Button)`
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  color: white;
  border: none;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const RightButton = styled(Button)`
  background-color: white;
  color: #0275b1;
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  border: 1px solid #0275b1;
`;
