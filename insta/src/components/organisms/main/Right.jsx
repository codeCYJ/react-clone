import styled from "styled-components";
import RightTop from "../../molecules/main/RightTop";
const Container = styled.div`
  width: 100%;
  max-width: 293px;
`;
const Center = styled.div``;
const Bottom = styled.div``;
const Right = () => {
  return (
    <Container>
      <RightTop></RightTop>
      <Center></Center>
      <Bottom></Bottom>
    </Container>
  );
};

export default Right;
