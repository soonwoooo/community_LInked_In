"use Client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProfileEducationInterface } from "@/model/entity/profile/ProfileInterface";
const ProfileEducationView: React.FC<{
  data: ProfileEducationInterface[];
  myProfile: boolean;
  profileId: number;
}> = ({ data, myProfile, profileId }) => {
  const router = useRouter();

  return (
    <ProfileEducationStyle>
      {myProfile && (
        <Edit
          alt="수정 아이콘"
          src="/images/blackpencil.png"
          width={20}
          height={20}
          onClick={() => {
            router.push(`/profile/${profileId}/details/education`);
          }}
        />
      )}
      <CareerCategory>Education</CareerCategory>
      {data?.map((item: ProfileEducationInterface) => (
        <CareerContentBox key={item.id}>
          <CareerPic
            src={item.educationInstitute.logo}
            alt="사진"
            width={100}
            height={100}
          />
          <CareerInfoBox>
            <CareerInstitute>{item.educationInstitute.name}</CareerInstitute>

            <CareerInstituteDescription>
              {item.description}
            </CareerInstituteDescription>

            <CareerPeriod>
              {item.startDate} - {item.endDate}
            </CareerPeriod>
            <EducationCourse>{item.course}</EducationCourse>
          </CareerInfoBox>
        </CareerContentBox>
      ))}
    </ProfileEducationStyle>
  );
};

const ProfileEducationStyle = styled.div`
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

const CareerInstitute = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 10px;
`;

const CareerInstituteDescription = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-right: 10px;
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

const EducationCourse = styled.div`
  color: #181818;
  width: 719px;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
export default ProfileEducationView;
