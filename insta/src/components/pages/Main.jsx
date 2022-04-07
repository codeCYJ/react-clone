import styled from "styled-components";
import Footer from "../organisms/Footer";
import RightTopBox from "../molecules/RightTopBox";
import RightBottomBox from "../molecules/RightBottomBox";
import RightFooter from "../molecules/MainRightFooter";
import { imageData } from "../../data/imageData";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 935px;
  display: flex;
  justify-content: center;
  margin: 32px auto 0;
  padding-bottom: 32px;
`;
const Left = styled.div`
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
const Right = styled.div`
  flex-grow: 1;
  max-width: 350px;
`;
const Main = () => {
  let activeIndex = 0;
  setTimeout(() => {
    activeIndex += 1;
    console.log(activeIndex);
  }, 1000);

  return (
    <Layout>
      <Container>
        <Left>
          {imageData.map(({ id, link }, index) => (
            <LeftImage key={id} src={link} active={activeIndex === index} />
          ))}
        </Left>
        <Right>
          <RightTopBox />
          <RightBottomBox />
          <RightFooter />
        </Right>
      </Container>
      <Footer />
    </Layout>
  );
};
export default Main;
