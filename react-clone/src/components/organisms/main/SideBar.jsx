import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import ContentBox from "../nav/SideContentBox";
import logo from "../../../assets/images/youtube.png";
import hamburger from "../../../assets/images/hamburger.png";
import {
  contentList,
  personalList,
  moreList,
  settingList,
} from "../../../data/SideBarData";
import CopyRight from "../../molecules/CopyRight";

const slideIn = keyframes`
  from {
    left: -240px;
  }
  to{
    left: 0;
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;
const SideBarBox = styled.div`
  ${({ isNotMain }) =>
    isNotMain &&
    css`
      animation: ${slideIn} 0.2s;
    `}

  width: 240px;
  height: 100%;
  position: fixed;
  left: ${({ collapsing }) => (collapsing ? "-240px" : "0")};
  top: ${({ isNotMain }) => (isNotMain ? "0" : "56px")};
  transition: 0.2s;
  background-color: white;
  z-index: 3;
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
function SideBar({ onClose, type }) {
  const [collapsing, setCollapsing] = useState(false);
  const handleClose = () => {
    if (type === "main") {
      onClose();
      return;
    }
    setCollapsing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <>
      {type !== "main" && <Backdrop />}
      <SideBarBox collapsing={collapsing} isNotMain={type !== "main"}>
        {type !== "main" && (
          <TitleBox>
            <TitleImage2 src={hamburger} onClick={handleClose} />
            <Link to="/">
              <TitleImage src={logo} />
            </Link>
          </TitleBox>
        )}
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
