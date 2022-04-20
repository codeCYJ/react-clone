import styled from "styled-components";
import Nav from "../organisms/Nav";
import Right from "../organisms/main/Right";
import ReelsList from "../organisms/main/ReelsList";
import PostList from "../organisms/main/PostList";

const Layout = styled.div`
  background-color: #fafafa;
`;
const Container = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  margin-right: 28px;
`;
const Main = () => {
  return (
    <Layout>
      <Nav />
      <Container>
        <Left>
          <ReelsList />
          <PostList />
        </Left>
        <Right />
      </Container>
    </Layout>
  );
};

export default Main;
