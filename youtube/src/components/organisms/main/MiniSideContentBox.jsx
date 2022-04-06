import React from "react";
import styled from "styled-components";

const ContentBox = styled.div``;
const Content = styled.div`
  width: 72px;
  height: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 0 14px 0;
  font-size: 10px;
  &:hover {
    background-color: #f9f9f9;
  }
`;
const ContentImg = styled.div`
  width: 24px;
  height: 24px;
  margin: 0;
  cursor: pointer;
`;
const ContentText = styled.p`
  height: 0;
`;

function SideContentBox(props) {
  return (
    <ContentBox>
      {props.list.map(({ name, icon }) => (
        <Content key={name}>
          <ContentImg>{icon()}</ContentImg>
          <ContentText>{name}</ContentText>
        </Content>
      ))}
    </ContentBox>
  );
}
export default SideContentBox;
