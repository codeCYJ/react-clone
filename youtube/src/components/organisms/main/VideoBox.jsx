import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
`;
const ThumbnailBox = styled.img`
  width: 100%;
`;
const ChannelBox = styled.div`
  display: flex;
`;
const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
  margin: 12px 12px 0 0;
`;
const TitleBox = styled.div`
  margin-top: 12px;
`;
const ChannelTitle = styled.div`
  font-size: 14px;
  color: #030303;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin-bottom: 10px;
`;
const ChannelText = styled.div`
  font-size: 12px;
  color: #606060;
  margin-bottom: 3px;
`;
const ChannelContent = styled.div`
  display: flex;
`;

function VideoBox({ data }) {
  const { thumbnail, channel, title, createAt, hit, videoId } = data;
  return (
    <Link to={`/watch/${videoId}`}>
      <Container>
        <ThumbnailBox src={thumbnail} />
        <ChannelBox>
          <ChannelImg src={channel.thumbnail} />
          <TitleBox>
            <ChannelTitle>{title}</ChannelTitle>
            <ChannelText>{channel.name}</ChannelText>
            <ChannelContent>
              <ChannelText>{hit}•</ChannelText>
              <ChannelText>{createAt}</ChannelText>
            </ChannelContent>
          </TitleBox>
        </ChannelBox>
      </Container>
    </Link>
  );
}
export default VideoBox;
