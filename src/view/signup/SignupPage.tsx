"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import UserViewModel from "@/view-model/user/class/UserViewModel";

const SignupPage = () => {
  const router = useRouter();

  interface accountCheck {
    email: string;
    password: string;
    passwordCheck: string;
    name: string;
  }

  const [userInfo, setUserInfo] = useState<accountCheck>({
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
  });

  const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onClcikAlert = async () => {
    const alertCheck = await UserViewModel.SignUp(
      userInfo.email,
      userInfo.password,
      userInfo.passwordCheck,
      userInfo.name
    );

    if (alertCheck === "success") {
      alert("회원가입 성공!");
      router.push("/login");
    } else if (alertCheck === "duplicated") {
      alert("중복된 이메일 입니다.");
    } else if (alertCheck === "emailNotPerfect") {
      alert("이메일 형식을 다시 맞춰주세요.");
    } else if (alertCheck === "passwordNotPerfect") {
      alert("비밀번호 형식을 다시 맞춰주세요");
    } else if (alertCheck === "passwordNotMatch") {
      alert("비밀번호 확인을 다시 입력해주세요.");
    } else if (alertCheck === "nameNotPerfect") {
      alert("이름을 다시 입력해주세요");
    }
  };

  return (
    <SignupStyle>
      <SignupWrap>
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

        <SignUpInfo>
          동의 후 가입 버튼을 클릭하면 LinkedIn{" "}
          <SignUpInfoSpan>사용자약관</SignUpInfoSpan>,
          <SignUpInfoSpan>개인정보 처리방침</SignUpInfoSpan>,
          <SignUpInfoSpan>쿠키정책</SignUpInfoSpan>에 동의하게 됩니다.
        </SignUpInfo>
        <SignupBtn
          onClick={(e: React.FormEvent) => {
            e.preventDefault();
            onClcikAlert();
          }}
        >
          동의 후 가입
        </SignupBtn>
      </SignupWrap>
    </SignupStyle>
  );
};

const SignupStyle = styled.div`
  margin: 50px 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const SignupWrap = styled.form`
  height: 100%;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 32px 32px 32px;
`;

const TextBox = styled.p`
  padding: 10px 0;
  font-size: 25px;
  font-weight: 700;
  line-height: 140%;
`;

const SignupInputWrap = styled.div`
  margin: 10px 0 30px;
`;

const InputBox = styled.div`
  margin: 10px 0;
`;

const InputLabel = styled.p`
  margin: 20px 5px 5px;
  font-size: 14px;
`;

const InputStyle = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  padding: 10px 16px 10px 16px;
  font-size: 16px;
  &::placeholder {
    color: #e0e0e0;
  }
`;

const SignUpInfo = styled.div`
  width: 300px;
  margin: 12px 0 16px 0;
  color: #666666;
  letter-spacing: 0.5px;
`;

const SignUpInfoSpan = styled.span`
  color: #2d64bc;
  font-family: Gotham Pro;
  font-weight: 700;
`;

const SignupBtn = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 24px;
  background-color: #2d64bc;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  &:disabled {
    background-color: #b4b4b3;
    color: white;
    cursor: not-allowed;
  }
`;

export default SignupPage;

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
    label: "비밀번호 : 영문 대소문자/숫자/특수문자 8~20자",
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
  {
    label: "이름",
    type: "text",
    name: "name",
    placeholder: "이름을 입력해주세요",
    alt: "필수입력사항",
  },
];
