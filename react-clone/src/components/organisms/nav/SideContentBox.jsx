import React from "react";
import styled from "styled-components";

const ContentBox = styled.div``;
const Content = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 40px;
  cursor: pointer;
  padding: 0px 24px;
  box-sizing: border-box;
  font-size: 14px;
  &:hover {
    background-color: #e5e5e5;
  }
`;
const ContentTitle = styled.p`
  font-size: 14px;
  padding: 0px 24px;
`;
const ContentImg = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px;
  margin-right: 8px;
  cursor: pointer;
`;
const ContentText = styled.p``;
const ContentLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin: 12px 0;
`;

function SideContentBox(props) {
  return (
    <ContentBox>
      <ContentTitle>{props.title}</ContentTitle>
      {props.list.map(({ name, icon }) => (
        <Content key={name}>
          <ContentImg>{icon()}</ContentImg>
          <ContentText>{name}</ContentText>
        </Content>
      ))}
      <ContentLine />
    </ContentBox>
  );
}
export default SideContentBox;
