import styled from "styled-components";
import hamburger from "../../../assets/icons/hamburger.png";
import logo from "../../../assets/icons/youtube.png";
import voice from "../../../assets/icons/voiceIcon.png";
import search from "../../../assets/icons/search.png";

const Nav = () => {
  return (
    <>
      <Container>
        <TitleContainer>
          <TitleHamburger src={hamburger} />
          <TitleLogo src={logo} />
        </TitleContainer>
        <SearchContainer>
          <SearchInput placeholder="검색" />
          <SearchButton icon={search}></SearchButton>
          <SearchVoice src={voice} />
        </SearchContainer>
        <ProfileContainer></ProfileContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TitleHamburger = styled.img`
  width: 24px;
  height: 24px;
  padding: 8px;
  box-sizing: content-box;
`;
const TitleLogo = styled.img`
  width: 97px;
  height: 24px;
  padding: 18px 14px 18px 16px;
  box-sizing: content-box;
`;
const SearchContainer = styled.div`
  display: flex;
`;
const SearchInput = styled.input`
  width: 538px;
  height: 40px;
  font-size: 16px;
  border: 1px solid #ccc;
`;
const SearchButton = styled.button`
  width: 64px;
  height: 40px;
  border: 1px solid #d3d3d3;
  border-left: none;
  background-color: #f8f8f8;
  background: url(${({ icon }) => icon}) center no-repeat;
  background-size: 24px 24px;
`;
const SearchVoice = styled.img`
  width: 40px;
  height: 40px;
`;
const ProfileContainer = styled.div``;

export default Nav;
