import styled from "styled-components";
import RightTopBox from "../molecules/login/RightTopBox";
import RightBottomBox from "../molecules/login/RightBottomBox";
import RightFooter from "../molecules/signin/RightFooter";
import Footer from "../organisms/Footer";

const Login = () => {
  return (
    <Layout>
      <Container>
        <RightTopBox />
        <RightBottomBox />
        <RightFooter />
      </Container>
      <Footer />
    </Layout>
  );
};

const Layout = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;
const Container = styled.div`
  width: 350px;
  margin: 35px auto 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
export default Login;
