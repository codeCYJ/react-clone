import styled from "styled-components";
import { useState } from "react";

const ImageWrapper = ({ imageList }) => {
  const [position, setPosition] = useState(0);
  const ImageList = styled.div`
    overflow: hidden;
    width: inherit;
    height: 614px;
    position: relative;
    display: flex;
  `;
  const Image = styled.img`
    width: 100%;
    height: 100%;
    transform: ${({ position }) => `translateX(-${position * 100}%)`};
    transition: 500ms;
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
  return (
    <>
      <ImageList>
        {position !== 0 && imageList.length !== 1 && (
          <PositionBtn
            onClick={() => setPosition((prev) => prev - 1)}
            next={false}
          />
        )}
        {imageList.map(({ image }) => (
          <Image src={image} position={position} />
        ))}
        {imageList.length > 1 && position + 1 < imageList.length && (
          <PositionBtn onClick={() => setPosition((prev) => prev + 1)} next />
        )}
      </ImageList>
    </>
  );
};
export default ImageWrapper;
