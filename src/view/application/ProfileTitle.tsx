import styled from "styled-components";
const ProfileTitle = () => {
  return (
    <ProfileTitleWrapper>
      <BackGroundImageWrapper>
        <BackGroundImage
          alt="배경 이미지"
          src="./Rectangle 3.png"
        ></BackGroundImage>
      </BackGroundImageWrapper>
    </ProfileTitleWrapper>
  );
};

export default ProfileTitle;

const ProfileTitleWrapper = styled.div`
  width: 850px;
  height: 360px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid pink;
  box-shadow: 0px 20px 60px 0px rgba(241, 244, 248, 0.5);
`;
const BackGroundImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  border: 1px solid blue;
`;

const BackGroundImage = styled.img``;
