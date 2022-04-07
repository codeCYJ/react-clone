import styled from "styled-components";
const Container = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
`;

const ContentWrapper = styled.div`
  color: #262626;
  font-size: 14px;
  margin: 15px;
  text-align: center;
`;
const ContentTop = styled.div`
  margin-bottom: 4px;
`;
const ContentBottom = styled.p`
  margin: 0;
  line-height: 20px;
`;
const ContentBtn = styled.button`
  border: 0;
  color: #0095f6;
  padding: 0;
  font-weight: 600;
  background-color: white;
`;
const MainSecondBox = () => {
  return (
    <Container>
      <ContentWrapper>
        <ContentTop>CODE_CYJ님이 아니신가요?</ContentTop>
        <ContentBottom>
          <ContentBtn>계정 변경</ContentBtn>
          {" 또는 "}
          <ContentBtn>가입하기</ContentBtn>
        </ContentBottom>
      </ContentWrapper>
    </Container>
  );
};
export default MainSecondBox;
