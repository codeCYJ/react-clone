import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import ContentBox from "../../molecules/SideContentBox";
import logo from "../../../assets/images/youtube.png";
import hamburger from "../../../assets/images/hamburger.png";

const Container = styled.div`
  width: 240px;
  height: 100%;
  padding: 0 16px;
  position: absolute;
  left: 0;
  background-color: white;
`;
const TitleBox = styled.div`
  width: 240px;
  height: 56px;
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

function SideBar() {
  return (
    <Container>
      <TitleBox>
        <TitleImage2 src={hamburger} />
        <Link to="/">
          <TitleImage src={logo} />
        </Link>
      </TitleBox>
      <ContentBox list="contentList" />
      <ContentBox list="personalList" />
      <ContentBox list="moreList" />
      <ContentBox list="settingList" />
    </Container>
  );
}

export default SideBar;
