import { useParams } from "react-router";
import styled from "styled-components";
import SideVideoBox from "../molecules/watch/SideVideoBox";
import { videoListMain } from "../../data/MainPlayList";

const Container = styled.div`
  background-color: #f9f9f9;
  display: flex;
`;
const VideoBox = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const SideBox = styled.div`
  width: 30%;
`;
const Watch = () => {
  const { videoId } = useParams();
  return (
    <>
      <Container>
        <VideoBox>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoBox>
        <SideBox>
          {videoListMain
            .filter((video) => videoId !== video.videoId)
            .map((video) => (
              <SideVideoBox video={video} key={video.id} />
            ))}
        </SideBox>
      </Container>
    </>
  );
};

export default Watch;
