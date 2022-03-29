import React from "react";
import styled from "styled-components";
import ContentBox from "./SideContentBox";
import { myTopList, myBottomList } from "../../../data/SideBarData";
const SideBarBox = styled.div`
  width: 240px;
  height: 573px;
  position: absolute;
  right: 10px;
  top: 50px;
  background-color: white;
  border: 1px solid #e0e0e0;
`;
function MyModal() {
  return (
    <SideBarBox>
      <ContentBox list={myTopList} />
      <ContentBox list={myBottomList} />
    </SideBarBox>
  );
}

export default MyModal;
