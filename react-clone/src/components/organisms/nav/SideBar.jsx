import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import ContentBox from "./SideContentBox";
import logo from "../../../assets/images/youtube.png";
import hamburger from "../../../assets/images/hamburger.png";
import {
  contentList,
  personalList,
  moreList,
  settingList,
} from "../../../data/SideBarData";
import CopyRight from "../../molecules/CopyRight";
const Backdrop = styled.div`
  width: ${({ open }) => (open !== false ? "100%" : "0")};
  height: ${({ open }) => (open !== false ? "100%" : "0")};
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
const SideBarBox = styled.div`
  width: 240px;
  height: 100%;
  position: fixed;
  left: ${({ open }) => (open !== false ? "0" : "-240px")};
  top: 0;
  transition: 0.2s;
  background-color: white;
`;
const TitleBox = styled.div`
  width: 240px;
  height: 56px;
  display: flex;
  padding: 0 24px;
  box-sizing: border-box;
`;
const TitleImage = styled.img`
  width: 97px;
  height: 24px;
  padding: 18px 14px 18px 16px;
  cursor: pointer;
`;
const TitleImage2 = styled.img`
  width: 26px;
  height: 26px;
  padding: 18px 8px 18px 8px;
  cursor: pointer;
`;
function SideBar({ open, setOpen }) {
  return (
    <>
      <Backdrop open={open} />
      <SideBarBox open={open}>
        <TitleBox>
          <TitleImage2 src={hamburger} onClick={() => setOpen(false)} />
          <Link to="/">
            <TitleImage src={logo} />
          </Link>
        </TitleBox>
        <ContentBox list={contentList} />
        <ContentBox list={personalList} />
        <ContentBox list={moreList} title="YOUTUBE 더보기" />
        <ContentBox list={settingList} />
        <CopyRight />
      </SideBarBox>
    </>
  );
}

export default SideBar;
