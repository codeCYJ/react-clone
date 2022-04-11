import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import IconWrapper from "../molecules/nav/IconWrapper";
const Layout = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dbdbdb;
  overflow: auto;
`;
const Container = styled.div`
  width: 100%;
  max-width: 975px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  @media only screen and (max-width: 430px) {
    padding: 0;
    justify-content: center;
  }
`;
const LogoWrapper = styled.div`
  flex: 1 0 127px;
  height: 29px;
`;
const Logo = styled.img`
  width: 103px;
  height: 29px;
`;
const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 268px;
  height: 36px;
  padding-left: 12px;
  flex: 0 1 auto;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;
const SearchIconWrapper = styled.div`
  z-index: 1;
  display: ${({ searchFocus }) => (searchFocus ? "none" : "flex")};
  align-items: center;
`;
const Search = styled.input`
  padding: ${({ searchFocus }) => (searchFocus ? "3px 20px" : "3px 40px")};
  font-size: 16px;
  background-color: #efefef;
  width: 100%;
  max-width: 268px;
  height: 36px;
  box-sizing: border-box;
  border-radius: 8px;
  position: absolute;
  left: 0;
`;
const CloseIcon = styled.div`
  background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png");
  position: absolute;
  right: 24px;
  z-index: 3;
  background-position: -380px -96px;
  background-size: ${({ searchFocus }) => (searchFocus ? "440px 411px" : "0")};
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 0 127px;
`;

const Nav = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <Layout>
      <Container>
        <LogoWrapper>
          <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
        </LogoWrapper>
        <SearchContainer>
          <SearchIconWrapper searchFocus={searchFocus}>
            <SearchIcon />
          </SearchIconWrapper>
          <Search
            placeholder="검색"
            value={searchText}
            searchFocus={searchFocus}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <CloseIcon
            searchFocus={searchFocus}
            onClick={() => setSearchText("")}
          />
        </SearchContainer>
        <IconContainer>
          <IconWrapper icon={"home"} />
          <IconWrapper icon={"direct"} />
          <IconWrapper icon={"new"} />
          <IconWrapper icon={"find"} />
          <IconWrapper icon={"feed"} />
          <IconWrapper icon={"profile"} />
        </IconContainer>
      </Container>
    </Layout>
  );
};

export default Nav;
