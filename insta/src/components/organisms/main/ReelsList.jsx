import styled from "styled-components";
import { useState } from "react";
import { reelsData } from "../../../data/mainData";

const ReelsList = () => {
  const [position, setPosition] = useState(0);
  return (
    <Layout>
      <Container>
        {position !== 0 && (
          <PositionBtn
            onClick={() => setPosition((prev) => prev - 1)}
            next={false}
          />
        )}
        {reelsData.map((data) => (
          <Reels key={data.id} position={position}>
            <ReelsPicture src={data.user.profileImage} />
            <ReelsName>{data.user.name}</ReelsName>
          </Reels>
        ))}
        <PositionBtn onClick={() => setPosition((prev) => prev + 1)} next />
      </Container>
    </Layout>
  );
};
const Layout = styled.div`
  margin-bottom: 24px;
  background-color: white;
`;
const Container = styled.div`
  border: 1px solid #dbdbdb;
  padding: 16px 0;
  width: 100%;
  max-width: 614px;
  margin: 0 auto;
  display: flex;
  padding-left: 10px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
`;
const Reels = styled.div`
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  box-sizing: border-box;
  transform: ${({ position }) => `translateX(${position * -200}px)`};
  transition: 500ms;
`;
const ReelsPicture = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  margin: 4px 0 8px 0;
`;
const ReelsName = styled.div`
  font-size: 12px;
  color: #262626;
`;
const PositionBtn = styled.div`
  background-image: url("https://www.instagram.com/static/bundles/es6/sprite_glyphs_2x_a956b6242e9c.png/a956b6242e9c.png");
  background-size: 528px 523px;
  background-position: ${({ next }) =>
    next ? "-291px -269px" : "-291px -223px"};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ next }) => (next ? "0" : "")};
  left: ${({ next }) => (!next ? "0" : "")};
  width: 45px;
  height: 45px;
  z-index: 2;
  cursor: pointer;
`;
export default ReelsList;
