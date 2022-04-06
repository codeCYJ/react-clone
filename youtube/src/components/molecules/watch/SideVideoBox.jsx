import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Thumbnail = styled.img`
  width: 168px;
  margin-right: 10px;
`;
const TextBox = styled.div``;
const Title = styled.p`
  font-size: 14px;
  color: #030303;
  margin-bottom: 5px;
`;
const Content = styled.p`
  font-size: 12px;
  color: #606060;
  margin-bottom: 5px;
`;
function SideVideoBox({ video }) {
  const { thumbnail, title, channel, hit, createAt } = video;
  return (
    <>
      <Container>
        <Thumbnail src={thumbnail} />
        <TextBox>
          <Title>{title}</Title>
          <Content>{channel.name}</Content>
          <Content>
            {hit}•{createAt}
          </Content>
        </TextBox>
      </Container>
    </>
  );
}
export default SideVideoBox;
