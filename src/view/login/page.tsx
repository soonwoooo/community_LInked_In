"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import LoginViewModel from "@/view-model/login/LoginViewModel";

const LoginComponent: React.FC = () => {
  const router = useRouter();

  interface acountCheck {
    email: string;
    password: string;
  }

  const [userInfo, setUserInfo] = useState<acountCheck>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [loginCheck, setLoginCheck] = useState<string>("");

  const loginViewModel = new LoginViewModel(userInfo.email, userInfo.password);

  const handleGoToSignUp = () => {
    router.push("/signup");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const alertCheck = await loginViewModel.showAlert();
    setLoginCheck(alertCheck);
    if (alertCheck === "success") {
      alert("로그인 성공");
      router.push("/");
    } else if (alertCheck === "wrong") {
      alert("잘못된 정보 입력");
    }
  };

  return (
    <div>
      <Wrapper>
        <Logo>CareMind</Logo>
        <Title>로그인</Title>
        <FormWrapper onSubmit={handleLogin}>
          <EmailInput
            type="text"
            placeholder="이메일을 입력하세요"
            onChange={handleUserInfo}
            name="email"
          ></EmailInput>
          <PasswordWrapper>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력하세요"
              onChange={handleUserInfo}
              name="password"
            ></PasswordInput>
            <ShowButton onClick={handleShowPassword}>
              {showPassword ? "숨기기" : "보기"}
            </ShowButton>
          </PasswordWrapper>
          <LoginButton type="submit">로그인</LoginButton>
        </FormWrapper>
        <SignUpLetter onClick={handleGoToSignUp}>
          회원이 아니신가요?
        </SignUpLetter>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Logo = styled.h1`
  color: #8bc34a;
`;
const Title = styled.p`
  font-size: 30px;
`;

const InputStyle = styled.input`
  width: 200px;
  height: 30px;
`;
const EmailInput = styled(InputStyle)``;

const PasswordInput = styled(InputStyle)``;

const LoginButton = styled.button`
  width: 200px;
  height: 30px;
  font-size: 20px;
  background-color: #8bc34a;
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const SignUpLetter = styled.div`
  cursor: pointer;
  opacity: 0.3;
  font-size: 14px;
`;

const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ShowButton = styled.div`
  position: absolute;
  right: 0;
  font-size: 14px;
  cursor: pointer;
`;

export default LoginComponent;
