"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const MainView: React.FC = () => {
  const router = useRouter();

  if (localStorage.getItem("token")) {
    router.push("/feed");
  }

  return (
    <MainStyle>
      <MainBox>
        <MainLeft>
          <MainTitle>프로를 위한 커뮤니티</MainTitle>
          <LoginBtn
            onClick={() => {
              router.push("/login");
            }}
          >
            로그인 하기
          </LoginBtn>
          <SignUpBtn
            onClick={() => {
              router.push("/signup");
            }}
          >
            회원가입 하기
          </SignUpBtn>
        </MainLeft>
        <MainRight>
          <ImgBox
            alt="메인 일러스트"
            src="/images/linkedInBack.svg"
            width={550}
            height={550}
          />
        </MainRight>
      </MainBox>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  padding: 50px 0 50px 0;
`;

const MainBox = styled.div`
  display: flex;
  gap: 15px;
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MainTitle = styled.div`
  font-size: 55px;
  margin-bottom: 120px;
`;

const LoginBtn = styled.div`
  width: 350px;
  height: 70px;
  border-radius: 10px;
  font-size: 25px;
  background-color: #39a7ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-bottom: 50px;
  cursor: pointer;
`;

const SignUpBtn = styled.div`
  width: 350px;
  height: 70px;
  border-radius: 10px;
  font-size: 25px;
  background-color: #1640d6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

const MainRight = styled.div``;

const ImgBox = styled(Image)``;

export default MainView;
