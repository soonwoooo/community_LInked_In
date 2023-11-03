import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  GetProfile,
  ApiResponse,
} from "../../../model/service/UserProfileService"; // GetProfile 클래스 및 ApiResponse 타입을 가져옵니다.

const ProfileCareer = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProfile = new GetProfile();
        const careerData = await getProfile.getCareer();

        setData(careerData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return;
  }

  return (
    <ProfileCareerStyle>
      <ProfileCareerWrap>
        <CareerCategory>{data.category}</CareerCategory>
        {data.data?.map((item) => (
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
      </ProfileCareerWrap>
    </ProfileCareerStyle>
  );
};

const ProfileCareerStyle = styled.div`
  width: 850px;
  flex-shrink: 0;
  padding: 30px;
  background-color: white;
`;

const ProfileCareerWrap = styled.div``;

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
export default ProfileCareer;
