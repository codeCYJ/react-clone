import styled from "styled-components";
import Footer from "../organisms/Footer";
import RightTopBox from "../molecules/main/RightTopBox";
import RightBottomBox from "../molecules/main/RightBottomBox";
import RightFooter from "../molecules/main/RightFooter";
import Left from "../molecules/main/Left";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
`;
const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 935px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px auto 0;
  padding-bottom: 32px;
`;

const Right = styled.div`
  flex-grow: 1;
  max-width: 350px;
`;
const Main = () => {
  return (
    <Layout>
      <Container>
        <Left />
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
