import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ProfileViewModel from "@/view-model/profile/class/ProfileViewModel";
import { Profile } from "@/model/entity/profile/Profile";

const ProfileExperience = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProfile = new ProfileViewModel();
        const experienceData = await getProfile.getProfileExperience();

        setData(experienceData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return;
  }
  console.log(data);
  return (
    <>
      {data.data?.map((item: any) => (
        <CareerContentBox key={item.id}>
          <CareerPic src={item.imgSrc} alt="사진" width={100} height={100} />
          <CareerDetailBox>
            <CareerTitle>{item.title}</CareerTitle>
            <CareerTitleSubBox>
              <CareerTitleSub>{item.titleSub}</CareerTitleSub>
              {item.workSpace && (
                <CareerTitleSubLocation>
                  {item.workSpace}
                </CareerTitleSubLocation>
              )}
            </CareerTitleSubBox>
            <CareerPeriod>
              {item.periodStart} - {item.periodEnd}
            </CareerPeriod>
            <CareerDetail>{item.detail}</CareerDetail>
          </CareerDetailBox>
        </CareerContentBox>
      ))}
    </>
  );
};

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
`;

const CareerDetailBox = styled.div``;

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
export default ProfileExperience;
