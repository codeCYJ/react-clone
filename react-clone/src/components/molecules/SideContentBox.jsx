import React from "react";
import styled from "styled-components";
import {
  contentList,
  personalList,
  moreList,
  settingList,
} from "../../data/SideBarData";

const ContentBox = styled.div``;
const Content = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 40px;
`;
const ContentImg = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px;
  margin-right: 8px;
  cursor: pointer;
`;
const ContentText = styled.p``;

function SideContentBox(props) {
  return (
    <ContentBox>
      {(props.list === "contentList"
        ? contentList
        : props.list === "personalList"
        ? personalList
        : props.list === "moreList"
        ? moreList
        : settingList
      ).map(({ name, icon }) => (
        <Content>
          <ContentImg>{icon()}</ContentImg>
          <ContentText>{name}</ContentText>
        </Content>
      ))}
    </ContentBox>
  );
}
export default SideContentBox;
