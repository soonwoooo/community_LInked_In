"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import SignUpViewModel from "@/view-model/signup/SignupViewModel";

const SignupComponent = () => {
  const router = useRouter();

  interface accountCheck {
    email: string;
    password: string;
    passwordCheck: string;
  }

  const [userInfo, setUserInfo] = useState<accountCheck>({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [signupCheck, setSignupCheck] = useState<string>("");

  const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const signUpVM = new SignUpViewModel(
    userInfo.email,
    userInfo.password,
    userInfo.passwordCheck
  );

  const onClcikAlert = async () => {
    const alertCheck = await signUpVM.showAlert();
    setSignupCheck(alertCheck);

    if (alertCheck === "success") {
      alert("회원가입 성공!");
    } else if (alertCheck === "duplicated") {
      alert("중복된 이메일");
    }
  };

  return (
    <SignupStyle>
      <SignupWrap>
        <Title>CareMind</Title>
        <TextBox>회원가입</TextBox>
        <SignupInputWrap>
          {FIELD_DATA.map(({ name, type, placeholder, label }) => (
            <InputBox key={name}>
              <InputLabel>{label}</InputLabel>
              <InputStyle
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={handleUserInfo}
              />
            </InputBox>
          ))}
        </SignupInputWrap>
        <SignupBtn
          onClick={(e: React.FormEvent) => {
            e.preventDefault;
            onClcikAlert();
          }}
          // disabled={!isValidCheck}
        >
          회원가입
        </SignupBtn>
      </SignupWrap>
    </SignupStyle>
  );
};

const SignupStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupWrap = styled.form`
  width: 500px;
  height: 100%;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 70px;
  color: green;
`;

const TextBox = styled.p`
  padding: 10px 0;
  font-size: 25px;
  font-weight: 700;

  line-height: 140%;
`;

const SignupInputWrap = styled.div`
  margin: 10px 0 90px;
`;

const InputBox = styled.div`
  margin: 10px 0;
`;

const InputLabel = styled.p`
  margin: 20px 5px 5px;
  font-size: 14px;
`;

const InputStyle = styled.input`
  width: 350px;
  height: 42px;
  padding: 4px 0 4px 10px;
  font-size: 15px;
  line-height: 1.5;
  outline: none;
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  &::placeholder {
    color: #e0e0e0;
  }
`;

const SignupBtn = styled.div`
  width: 150px;
  padding: 16px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #0077b5;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    background-color: #b4b4b3;
    color: white;
    cursor: not-allowed;
  }
`;

export default SignupComponent;

const FIELD_DATA = [
  {
    label: "이메일",
    type: "email",
    name: "email",
    placeholder: "이메일을 입력해주세요",
    description: "로그인 아이디로 사용할 이메일을 입력해 주세요",
    alt: "필수입력사항",
  },
  {
    label: "비밀번호",
    type: "password",
    name: "password",
    placeholder: "비밀번호를 입력해주세요",
    description: "(영문 대문자/소문자/숫자/특수문자 조합, 8자~20자)",
    alt: "필수입력사항",
  },
  {
    label: "비밀번호 확인",
    type: "password",
    name: "passwordCheck",
    placeholder: "비밀번호를 한번 더 입력해주세요",
    alt: "필수입력사항",
  },
];
