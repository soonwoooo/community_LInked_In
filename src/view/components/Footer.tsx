"use client";

import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

interface FooterSection {
  id: number;
  title: string[];
}

const Footer: React.FC = () => {
  const FOOTER_SECTION_DATA = [
    {
      id: 0,
      title: ["About", "Careers", "Advertising", "Small Business"],
    },

    {
      id: 1,
      title: [
        "Talent Solutions",
        "Marketing Solutions",
        "Sales Solutions",
        "Safery Center",
      ],
    },
    {
      id: 2,
      title: ["Community Guidelines", "Privacy & Terms", "Mobile App"],
    },
  ];

  const [index, setIndex] = useState<string>("0");
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndex(e.target.value);
  };

  return (
    <FooterWrapper>
      <LogoWrapper>
        <LogoImage alt="로고이미지" src="/images/Logo.png"></LogoImage>
        <LogoText>Linked</LogoText>
        <LogoTextTwo>In</LogoTextTwo>
      </LogoWrapper>
      <NavigationWrapper>
        <Navigation>Navigation</Navigation>
        <SectionWrapper>
          {FOOTER_SECTION_DATA.map((data: FooterSection) => (
            <SectionBox key={data.id}>
              {data.title.map((item, index) => (
                <SectionTitle key={index}>{item}</SectionTitle>
              ))}
            </SectionBox>
          ))}
        </SectionWrapper>
      </NavigationWrapper>
      <FastAccessWrapper>
        <FastAccess>Fast Access</FastAccess>
        <QuestionButton>
          QUESTIONS
          <QuestionIcon
            alt="물음표아이콘"
            src="/images/help-circle.png"
            width={16}
            height={16}
          ></QuestionIcon>
        </QuestionButton>
        <SettingButton>
          SETTINGS
          <SettingIcon
            alt="설정아이콘"
            src="/images/settings.png"
            width={16}
            height={16}
          ></SettingIcon>
        </SettingButton>
      </FastAccessWrapper>
      <LanguageWrapper>
        <Language>Language</Language>
        <SelectBox value={index} onChange={onSelect}>
          <option value="0">English</option>
          <option value="1">한국어</option>
        </SelectBox>
      </LanguageWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid #e7e7e7;
  width: 100%;
  height: 215px;
  background-color: #f7f9fb;
`;

const LogoWrapper = styled.div`
  margin: 30px 84px 12px 0px;
  width: 46px;
  height: 46px;
`;

const LogoImage = styled.img`
  width: 46px;
  height: 46px;
`;

const LogoTextStyle = styled.span`
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
const LogoText = styled(LogoTextStyle)`
  color: #181818;
`;

const LogoTextTwo = styled(LogoTextStyle)`
  color: #0275b1;
`;

const NavigationWrapper = styled.div`
  margin-top: 35px;
`;

const FooterLetterStyle = styled.p`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Navigation = styled(FooterLetterStyle)``;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 30px;
  gap: 45px;
`;

const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 135px;
  height: 100px;

  gap: 8px;
  white-space: normal;
`;

const SectionTitle = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FastAccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-left: 65px;
`;

const FastAccess = styled(FooterLetterStyle)``;

const FooterButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  width: 170px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #0275b1;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
`;

const QuestionButton = styled(FooterButtonStyle)`
  margin-top: 23px;
  background: #0275b1;
  color: white;
`;

const SettingButton = styled(FooterButtonStyle)`
  margin-top: 10px;
  background: white;
  color: #0275b1;
`;

const QuestionIcon = styled(Image)``;

const SettingIcon = styled(Image)``;

const LanguageWrapper = styled.div`
  margin-top: 35px;
  margin-left: 60px;
`;
const Language = styled(FooterLetterStyle)``;

const SelectBox = styled.select`
  margin-top: 23px;
  width: 270px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  background: #fff;
  cursor: pointer;
  color: #181818;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
