"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";
import { useEffect } from "react";
import HeaderViewModel from "@/view-model/header/class/HeaderViewModel";
import { ChangeEvent } from "react";
const Header = () => {
  const router = useRouter();
  const handleRouting = (path: string) => {
    router.push(path);
  };
  const handleFeed = () => handleRouting("/feed");
  const handleNetwork = () => handleRouting("/network");
  const handleHome = () => handleRouting("/");
  const [headerFeedData, setHeaderFeedData] = useState<any | null>(null);
  const pathname = usePathname();
  const hideHeaderOnPaths: string[] = ["/login", "/signup", "/"];
  const pageGaFeed: string[] = ["/feed"];
  const pageGaNetwork: string[] = ["/network"];
  const changeFeedColor = pageGaFeed.includes(pathname);
  const changeNetworkColor = pageGaNetwork.includes(pathname);
  const shouldHideHeader = hideHeaderOnPaths.includes(pathname);
  const [search, setSearch] = useState<string>("");
  const profileId: string | null = localStorage.getItem("profileId");
  const isLogined: string | null = localStorage.getItem("token");
  const saveSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    router.push(`/feed?search=${search}`);
  };
  const goToMyProfile = () => {
    router.push(`/profile/${profileId}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (["/", "/login", "/signup"].includes(pathname)) {
        setHeaderFeedData(1);
      } else {
        try {
          const getHeaderFeedData = await HeaderViewModel.getHeaderData();
          setHeaderFeedData(getHeaderFeedData);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [pathname]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("profileId");
    router.push("/");
  };
  if (headerFeedData === null) {
    return <div></div>;
  }
  return (
    <HeaderWrapper>
      <IconWrapper onClick={handleHome}>
        <Logo alt="로고" src="/images/Logo.png" width={46} height={46}></Logo>
      </IconWrapper>
      {!shouldHideHeader && (
        <>
          <FeedAndNetworkWrapper>
            <FeedWrapper onClick={handleFeed}>
              {!changeFeedColor ? (
                <IconLetterWrapper>
                  <Feed
                    alt="피드아이콘"
                    src="/images/rss.png"
                    width={24}
                    height={24}
                  />
                  <FeedLetter>FEED</FeedLetter>
                </IconLetterWrapper>
              ) : (
                <IconLetterWrapper>
                  <Feed
                    alt="피드아이콘"
                    src="/images/rss-blue.png"
                    width={24}
                    height={24}
                  />
                  <FeedLetterBlue>FEED</FeedLetterBlue>
                </IconLetterWrapper>
              )}
            </FeedWrapper>
            <NetworkWrapper onClick={handleNetwork}>
              {!changeNetworkColor ? (
                <IconLetterWrapper>
                  <Network
                    alt="네트워크아이콘"
                    src="/images/users.png"
                    width={24}
                    height={24}
                  />
                  <NetworkLetter>NETWORK</NetworkLetter>
                </IconLetterWrapper>
              ) : (
                <IconLetterWrapper>
                  <Network
                    alt="네트워크아이콘"
                    src="/images/users-blue.png"
                    width={24}
                    height={24}
                  />
                  <NetworkLetterBlue>NETWORK</NetworkLetterBlue>
                </IconLetterWrapper>
              )}
            </NetworkWrapper>
          </FeedAndNetworkWrapper>
          <SearchWrapper>
            {changeFeedColor && (
              <div>
                <SearchIcon
                  alt="검색아이콘"
                  src="/images/search.png"
                  width={24}
                  height={24}
                  onClick={handleSearch}
                />
                <SearchInput
                  placeholder="Search"
                  value={search}
                  onChange={saveSearch}
                ></SearchInput>
              </div>
            )}
          </SearchWrapper>
          {!shouldHideHeader && (
            <ProfileWrapper key={headerFeedData.id}>
              <ProfileImage
                alt="프로필 이미지"
                src={headerFeedData?.user?.profileImage}
                height={42}
                width={42}
                onClick={goToMyProfile}
              />
              <UserNameWrapper>
                <MyWrapper>
                  <UserName>{headerFeedData?.user?.name}</UserName>
                  <YouLetter>YOU</YouLetter>
                </MyWrapper>
                <VisitorWrapper>
                  <TodayView></TodayView>
                  <AddedNumber></AddedNumber>
                </VisitorWrapper>
              </UserNameWrapper>
            </ProfileWrapper>
          )}
        </>
      )}
      {isLogined ? (
        <LogOutWrapper>
          {isLogined && <LogOut onClick={handleLogOut}>로그아웃</LogOut>}
        </LogOutWrapper>
      ) : (
        <SignUpAndLoginWrapper></SignUpAndLoginWrapper>
      )}
    </HeaderWrapper>
  );
};
export default Header;
const IconLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  flex-shrink: 0;
  align-items: center;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba (89, 120, 150, 0.06);
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 80px;
  border-right: 1px solid #f4f4f4;
`;
const Logo = styled(Image)`
  cursor: pointer;
`;
const FeedAndNetworkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 80px;
  border-right: 1px solid #f4f4f4;
`;
const Iconstyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 80px;
  gap: 10px;
  cursor: pointer;
`;
const FeedWrapper = styled(Iconstyle)`
  margin-left: 13px;
`;
const NetworkWrapper = styled(Iconstyle)``;
const Feed = styled(Image)``;
const Network = styled(Image)``;
const IconLetterStyle = styled.p`
  text-align: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const FeedLetter = styled(IconLetterStyle)``;
const FeedLetterBlue = styled(IconLetterStyle)`
  color: #0275b1;
`;
const NetworkLetter = styled(IconLetterStyle)`
  /* color: #0275B1; */
`;
const NetworkLetterBlue = styled(IconLetterStyle)`
  color: #0275b1;
`;
const SearchWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 367px;
  height: 80px;
  border-right: 1px solid #f4f4f4;
  padding-left: 30px;
`;
const SearchIcon = styled(Image)`
  cursor: pointer;
`;
const SearchInput = styled.input`
  margin-left: 20px;
  font-family: Gotham Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
`;
const ProfileWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 460px;
  height: 80px;
`;
const ProfileImage = styled(Image)`
  border-radius: 50%;
  cursor: pointer;
`;
const UserNameWrapper = styled.div`
  margin-left: 15px;
`;
const UserNameStyle = styled.span`
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const UserName = styled(UserNameStyle)`
  color: #181818;
`;
const YouLetter = styled(UserNameStyle)`
  margin-left: 10px;
  color: rgba(24, 24, 24, 0.2);
  font-weight: 400;
`;
const TodayView = styled(UserNameStyle)`
  font-weight: 400;
  color: #747474;
`;
const AddedNumber = styled(UserNameStyle)`
  color: #02b033;
  margin-left: 4px;
`;
const MyWrapper = styled.div``;
const VisitorWrapper = styled.div`
  margin-top: 10px;
`;
const LogOutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-right: 30px;
`;
const Login = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  border: 1px solid #0a66c2;
  color: #0a66c2;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #edf3f8;
  }
`;
const LogOut = styled.div`
  width: 100px;
  cursor: pointer;
  &:hover {
    background-color: #edf3f8;
  }
`;
const SignUpAndLoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-right: 30px;
`;
const SignUp = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 80px;
  cursor: pointer;
  height: 30px;
  &:hover {
    background-color: #edf3f8;
  }
`;
