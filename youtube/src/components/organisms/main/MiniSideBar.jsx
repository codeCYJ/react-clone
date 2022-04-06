import React from "react";
import styled from "styled-components";
import ContentBox from "./MiniSideContentBox";
import { miniList } from "../../../data/SideBarData";
const SideBarBox = styled.div`
  width: 72px;
  height: 100%;
  background-color: white;
  position: fixed;
`;
function MiniSideBar() {
  return (
    <>
      <SideBarBox>
        <ContentBox list={miniList} />
      </SideBarBox>
    </>
  );
}

export default MiniSideBar;
