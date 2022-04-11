import styled from "styled-components";
import { Container as DefaultContainer } from "../../atoms/login";

const Container = styled(DefaultContainer)`
  color: #262626;
  font-size: 14px;
  padding: 20px 0;
  text-align: center;
`;
const Content = styled.p`
  margin: 0;
  line-height: 20px;
`;
const ContentBtn = styled.a`
  border: 0;
  color: #0095f6;
  padding: 0;
  font-weight: 600;
  background-color: white;
`;
const MainSecondBox = () => {
  return (
    <Container>
      <Content>
        계정이 없으신가요? <ContentBtn href="/">가입하기</ContentBtn>
      </Content>
    </Container>
  );
};
export default MainSecondBox;
