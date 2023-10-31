"use client";

import SignupComponent from "@/view/signup/page";
import styled from "styled-components";

const Signup = () => {
  return (
    <SignupStyle>
      <SignupComponent></SignupComponent>
    </SignupStyle>
  );
};

export default Signup;

const SignupStyle = styled.div``;
