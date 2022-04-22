import styled from "styled-components";
import Nav from "../organisms/Nav";
import RecommendList from "../organisms/main/RecommendList";
import ReelsList from "../organisms/main/ReelsList";
import PostList from "../organisms/main/PostList";

const Main = () => {
  return (
    <Layout>
      <Nav />
      <Container>
        <Left>
          <ReelsList />
          <PostList />
        </Left>
        <Right>
          <RecommendList />
        </Right>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background-color: #fafafa;
`;
const Container = styled.div`
  display: flex;
  max-width: 935px;
  margin: 0 auto;
  padding: 30px 0;
`;
const Left = styled.div`
  margin-right: 28px;
  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
`;
const Right = styled.div`
  position: sticky;
  width: 293px;
  height: 100vh;
  top: 110px;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
export default Main;
