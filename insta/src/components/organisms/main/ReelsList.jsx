import styled from "styled-components";
import { useState, useRef } from "react";
import { reelsData } from "../../../data/mainData";

const ReelsList = () => {
  const [position, setPosition] = useState(0);
  const reelsLength = reelsData.length - 7;
  const [reelsCount, setReelsCount] = useState(reelsLength);
  const loa = reelsData.length * 82 + 10;
  const lop = position * 246 + 7 * 82 + 10;
  const last = loa - lop + 226;
  console.log(loa, lop, last);

  console.log(" length - 7", reelsLength, "position : ", position);
  console.log("reelsCount", reelsCount);
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
          <Reels
            key={data.id}
            position={position}
            last={last}
            length={reelsLength}
            reelsCount={reelsCount}
          >
            <ReelsPicture src={data.user.profileImage} />
            <ReelsName>{data.user.name}</ReelsName>
          </Reels>
        ))}
        {reelsLength > position * 3 && (
          <PositionBtn
            onClick={() => {
              setPosition((prev) => prev + 1);
              setReelsCount((prev) => prev - 3);
            }}
            next
          />
        )}
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
  padding: 11px 0;
  width: 614px;
  margin: 0 auto;
  display: flex;
  padding-left: 10px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
`;
const Reels = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  transform: ${({ last, position, length }) =>
    `translateX(${
      length <= position * 3 ? (position - 1) * -246 - last : position * -246
    }px)`};
  transform: ${({ reelsCount, position }) =>
    `translateX(${
      reelsCount < 3 ? (position - 1) * -246 - reelsCount * 82 : position * -246
    }px)`};
  transition: 500ms;
  cursor: pointer;
`;
const ReelsPicture = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  margin: 4px 0 8px 0;
`;
const ReelsName = styled.div`
  font-size: 12px;
  line-height: 16px;
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
