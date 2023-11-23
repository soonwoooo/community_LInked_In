"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";
import ProfileViewModel from "@/view-model/profile/class/ProfileViewModel";
import DetailsViewLayout from "@/view/components/DetailsViewLayout";
import { ProfileEducationInterface } from "@/model/entity/profile/ProfileInterface";
import ModalEdit from "@/view/components/ModalEdit";

const DetailsEducationView = ({ id }: { id: number }) => {
  const router = useRouter();
  const [titleData, setTitleData] = useState<any | null>(null);
  const [educationData, setEducationData] = useState<any | null>(null);
  const [change, setChange] = useState<boolean>(false);

  const isChange = () => {
    setChange((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const getProfileData = await ProfileViewModel.getProfileTitleData(id);

        setTitleData(getProfileData);

        const getEducationData = await ProfileViewModel.getProfileEducation(id);

        setEducationData(getEducationData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(id);
  }, [change]);

  if (titleData === null || educationData === null) {
    return <div>Loading...</div>;
  }

  const userIdFromLocalStorage: number | null = parseInt(
    localStorage.getItem("userId") || "-1"
  );

  const myProfile: boolean = userIdFromLocalStorage === titleData.user.id;

  return (
    <DetailsProjectViewStyle>
      <DetailsViewLayout>
        <BackIcon
          alt="뒤로가기 아이콘"
          src="/images/arrow.png"
          width={20}
          height={20}
          onClick={() => {
            router.push(`/profile/${id}`);
          }}
        />

        {myProfile && (
          <ModalEdit
            deleteBtn={false}
            newBtn={true}
            title="교육 생성"
            layout="education_null"
            click={isChange}
            profileId={id}
          />
        )}

        <CareerCategory>Education</CareerCategory>
        {educationData?.map((item: ProfileEducationInterface) => (
          <CareerContentBox key={item.id}>
            <ModalPosition>
              {myProfile && (
                <ModalEdit
                  data={item}
                  newBtn={false}
                  deleteBtn={true}
                  title="교육 수정"
                  layout="education"
                  click={isChange}
                  profileId={id}
                  id={item.id}
                />
              )}
            </ModalPosition>
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
      </DetailsViewLayout>
    </DetailsProjectViewStyle>
  );
};

const DetailsProjectViewStyle = styled.div`
  position: relative;
`;

const BackIcon = styled(Image)`
  flex-shrink: 0;
  display: block;
  cursor: pointer;
`;

const InputBox = styled.div``;

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
`;

const InputStyle = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  padding: 10px 16px 10px 16px;
  font-size: 16px;
  margin-bottom: 20px;
  &::placeholder {
    color: #e0e0e0;
  }
`;

const CareerCategory = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
  margin-top: 30px;
`;

const ModalPosition = styled.div`
  position: absolute;
  top: 25px;
  right: 5px;
`;

const CareerContentBox = styled.div`
  display: flex;
  padding: 30px 0 30px 0;
  border-bottom: 1px solid #f4f4f4;
  position: relative;
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

const CareerPeriod = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  margin-bottom: 10px;
`;

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

const EducationCourse = styled.div`
  color: #181818;
  width: 719px;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export default DetailsEducationView;

const FIELD_DATA = [
  {
    label: "교육기관명",
    type: "text",
    name: "name",
    key: "educationInstitute.name",
    placeholder: "교육기관을 입력해주세요",
    alt: "필수입력사항",
  },
  {
    label: "세부사항 (예시 : 경영학부)",
    type: "text",
    name: "description",
    key: "description",
    placeholder: "세부사항 입력해주세요",
    alt: "필수입력사항",
  },
  {
    label: "교육기관 로고 URL",
    type: "text",
    name: "logoUrl",
    key: "educationInstitute.logo",
    placeholder: "교육기관 로고 URL을 입력해주세요.",
    alt: "필수입력사항",
  },
  {
    label: "세부 코스 (예시 : 회계직렬을 집중적으로 수료했습니다.)",
    type: "text",
    name: "course",
    key: "course",
    placeholder: "세부 코스를 입력해주세요.",
    description: "회사로고 URL을 입력해주세요.",
    alt: "필수입력사항",
  },
  {
    label: "시작일 (예시 : 2023-11-16)",
    type: "text",
    name: "startDate",
    key: "startDate",
    placeholder: "2023-11-16 양식으로 해주세요",
    alt: "필수입력사항",
  },
  {
    label: "종료일 (예시 : 2023-11-17)",
    type: "text",
    name: "endDate",
    key: "endDate",
    placeholder: "재직중이라면 비워주셔도 됩니다.",
    alt: "필수입력사항",
  },
];
