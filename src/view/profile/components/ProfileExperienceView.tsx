"use Client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProfileExperienceInterface } from "@/model/entity/profile/ProfileInterface";

const ProfileExperienceView: React.FC<{
  data: ProfileExperienceInterface[];
  myProfile: boolean;
  profileId: number;
}> = ({ data, myProfile, profileId }) => {
  const router = useRouter();

  return (
    <ProfileExperienceStyle>
      {myProfile && (
        <Edit
          alt="수정 아이콘"
          src="/images/blackpencil.png"
          width={20}
          height={20}
          onClick={() => {
            router.push(`/profile/${profileId}/details/experience`);
          }}
        />
      )}
      <CareerCategory>Experience</CareerCategory>
      {data?.map((item: ProfileExperienceInterface) => (
        <CareerContentBox key={item.id}>
          <CareerPic
            src={item.experienceCompany.logo}
            alt="사진"
            width={100}
            height={100}
          />
          <CareerInfoBox>
            <CareerTitle>{item.position}</CareerTitle>
            <CareerTitleSubBox>
              <CareerTitleSub>{item.experienceCompany.name}</CareerTitleSub>
              {item.experienceCompany.location && (
                <CareerTitleSubLocation>
                  {item.experienceCompany.location}
                </CareerTitleSubLocation>
              )}
            </CareerTitleSubBox>
            <CareerPeriod>
              {item.startDate} - {item.endDate}
            </CareerPeriod>
            <CareerDetail>{item.description}</CareerDetail>
          </CareerInfoBox>
        </CareerContentBox>
      ))}
    </ProfileExperienceStyle>
  );
};

const ProfileExperienceStyle = styled.div`
  position: relative;
`;
const Edit = styled(Image)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
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

const CareerContentBox = styled.div`
  display: flex;
  padding: 30px 0 30px 0;
  border-bottom: 1px solid #f4f4f4;

  &:last-child {
    border-bottom: none;
  }
`;

const CareerPic = styled(Image)`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 27px;
  background-color: #ed8f03;
  display: block;
  margin-right: 16px;
  object-fit: cover;
`;

const CareerInfoBox = styled.div``;

const CareerTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 10px;
`;

const CareerTitleSubBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const CareerTitleSub = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-right: 10px;
`;

const CareerTitleSubLocation = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

const CareerPeriod = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  margin-bottom: 10px;
`;

const CareerDetail = styled.div`
  color: #181818;
  width: 719px;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
export default ProfileExperienceView;
