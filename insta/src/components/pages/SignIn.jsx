import styled from "styled-components";
import Footer from "../organisms/Footer";
import RightTopBox from "../molecules/signin/RightTopBox";
import RightBottomBox from "../molecules/signin/RightBottomBox";
import RightFooter from "../molecules/signin/RightFooter";
import Left from "../molecules/signin/Left";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  min-height: 100vh;
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
  margin-top: 12px;
  max-width: 350px;
`;
const SignIn = () => {
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
export default SignIn;
