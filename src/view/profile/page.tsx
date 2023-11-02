"use client";

import ProfileTitle from "../application/ProfileTitle";
import ProfileCareer from "../application/ProfileCareer";
import styled from "styled-components";

const ProfileView = () => {
  return (
    <ProfileStyle>
      <ProfileTitle />
      <ProfileCareer />
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  background-color: #f7f9fb;
  height: 100vh;
`;

export default ProfileView;
