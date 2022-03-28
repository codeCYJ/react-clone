import React from "react";
import styled from "styled-components";
import cookie from "react-cookies";
import { NavLink as Link } from "react-router-dom";
import SideBar from "./SideBar";
import logo from "../../../assets/images/youtube.png";
import hamburger from "../../../assets/images/hamburger.png";
import search from "../../../assets/images/search.png";
import unnamed from "../../../assets/images/unnamed.jpg";
import voice from "../../../assets/images/voiceIcon.png";
import alarm from "../../../assets/images/alarmIcon.png";
import dots from "../../../assets/images/ninedots.png";
import video from "../../../assets/images/videoIcon.png";

const Container = styled.div`
  max-width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;
`;
const TitleBox = styled.div`
  width: 169px;
  display: flex;
`;
const TitleImage = styled.img`
  width: 97px;
  height: 24px;
  padding: 18px 14px 18px 16px;
`;
const TitleImage2 = styled.img`
  width: 26px;
  height: 26px;
  padding: 18px 8px 18px 8px;
`;
const SearchBar = styled.div`
  display: flex;
`;
const SearchInput = styled.input`
  width: 538px;
  height: 40px;
  font-size: 16px;
  border: 1px solid #eee;
  color: #0f1333;
  padding-left: 10px;
`;
const SearchButton = styled.button`
  width: 64px;
  height: 44px;
  border: 1px solid #eee;
  background-color: #f8f8f8;
  background-image: url(${({ icon }) => icon});
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;
`;
const SearchVoice = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #f8f8f8;
  margin-left: 8px;
`;
const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;
const LoginButton = styled.button``;
const LogoImg = styled.img`
  width: ${({ size }) => (size === "small" ? "20px" : "24px")};
  height: ${({ size }) => (size === "short" ? "20px" : "24px")};
  padding: 8px;
  margin-right: 8px;
  cursor: pointer;
`;
const ProfileButton = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 4px 6px;
  cursor: pointer;
`;
const LogoutButton = styled.button`
  width: 177px;
  height: 51px;
  margin: 23px 0 0 37px;
  cursor: pointer;
`;

function Nav() {
  const logout = () => {
    if (window.confirm("Would you like to Sign out?")) {
      cookie.remove("user_token");
      document.location.href = "/";
    }
  };

  return (
    <Container>
      <TitleBox>
        <TitleImage2 src={hamburger} />
        <Link to="/">
          <TitleImage src={logo} />
        </Link>
      </TitleBox>
      <SideBar />
      <SearchBar>
        <SearchInput placeholder="검색" />
        <SearchButton icon={search}></SearchButton>
        <SearchVoice src={voice} />
      </SearchBar>
      <ProfileBox>
        <LogoImg src={video} size={"short"} />
        <LogoImg src={dots} />
        <LogoImg src={alarm} size={"small"} />
        <ProfileButton src={unnamed} alt="아바타이미지" />
      </ProfileBox>
      {/* <LogoutButton onClick={() => logout()} /> */}
    </Container>
  );
}

export default Nav;
