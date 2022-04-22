import styled from "styled-components";
import RecommendTop from "../../molecules/main/RecommendTop";
import RecommendCenter from "../../molecules/main/RecommendCenter";
import RecommendBottom from "../../molecules/main/RecommendBottom";

const RecommendList = () => {
  return (
    <Container>
      <RecommendTop />
      <RecommendCenter />
      <RecommendBottom />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default RecommendList;
