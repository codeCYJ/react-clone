import { useEffect, useState } from "react";
import styled from "styled-components";
import { imageData } from "../../../data/imageData";

const Left = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActiveIndex((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
    }, 3000);
  }, [activeIndex]);
  return (
    <Container>
      {imageData.map(({ id, link }, index) => (
        <LeftImage key={id} src={link} active={activeIndex === index} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-image: url("https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png");
  height: 581px;
  flex-basis: 380.32px;
  background-size: 468px 634px;
  background-position: -46px 0;
  margin: 0 32px 12px 0;
  position: relative;
`;
const LeftImage = styled.img`
  position: absolute;
  right: 18px;
  top: 26px;
  opacity: ${({ active }) => !active && 0};
  transition: opacity 0.5s;
`;

export default Left;
