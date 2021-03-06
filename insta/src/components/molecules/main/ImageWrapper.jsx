import styled from "styled-components";
import { useState } from "react";

const ImageWrapper = ({ imageList }) => {
  const [position, setPosition] = useState(0);
  return (
    <ImageCotainer>
      <ImageList>
        {position !== 0 && imageList.length !== 1 && (
          <PositionBtn
            onClick={() => setPosition((prev) => prev - 1)}
            next={false}
          />
        )}
        {imageList.map(({ image }, index) => (
          <Image src={image} position={position} key={index} />
        ))}
        {imageList.length > 1 && position + 1 < imageList.length && (
          <PositionBtn onClick={() => setPosition((prev) => prev + 1)} next />
        )}
      </ImageList>
      <ListIndex>
        {imageList.length === 1
          ? ""
          : imageList.map((i, index) => (
              <IndexBtn key={index} active={index === position} />
            ))}
      </ListIndex>
    </ImageCotainer>
  );
};
const ImageCotainer = styled.div`
  position: relative;
`;
const ImageList = styled.div`
  overflow: hidden;
  display: flex;
`;
const Image = styled.img`
  width: 100%;
  transform: ${({ position }) => `translateX(-${position * 100}%)`};
  transition: 500ms;
  flex-shrink: 0;
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
const ListIndex = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;
const IndexBtn = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "rgb(0, 149, 246);" : "#aaa")};
  & + & {
    margin-left: 4px;
  }
`;
export default ImageWrapper;
