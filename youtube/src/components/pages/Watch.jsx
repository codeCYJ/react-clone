import { useParams } from "react-router";
import styled from "styled-components";
import SideVideoBox from "../molecules/watch/SideVideoBox";
import { videoListMain } from "../../data/MainPlayList";

const Layout = styled.div`
  background-color: #f9f9f9;
`;
const Container = styled.div`
  display: flex;
  max-width: 1754px;
  margin: 0 auto;
  padding: 24px;
  justify-content: center;
`;
const Left = styled.div`
  flex-grow: 1;
  margin-right: 24px;
  max-width: 974px;
`;
const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
const Right = styled.div`
  width: 402px;
`;
const Watch = () => {
  const { videoId } = useParams();
  return (
    <Layout>
      <Container>
        <Left>
          <VideoWrapper>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
        </Left>

        <Right>
          {videoListMain
            .filter((video) => videoId !== video.videoId)
            .map((video) => (
              <SideVideoBox video={video} key={video.id} />
            ))}
        </Right>
      </Container>
    </Layout>
  );
};

export default Watch;
