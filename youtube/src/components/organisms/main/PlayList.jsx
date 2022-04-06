import React from "react";
import styled from "styled-components";
import { videoListMain } from "../../../data/MainPlayList";
import VideoBox from "./VideoBox";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
`;
function PlayList() {
  return (
    <Container>
      {videoListMain.map((video, index) => (
        <VideoBox data={video} key={index} />
      ))}
    </Container>
  );
}
export default PlayList;
