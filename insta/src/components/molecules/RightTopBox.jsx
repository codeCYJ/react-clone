import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
`;
const Title = styled.div`
  background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png");
  height: 51px;
  width: 175px;
  background-size: 440px 411px;
  background-position: 0 -129px;
  margin: 22px auto 12px;
`;
const RightTopBox = () => {
  return (
    <Container>
      <Title />
    </Container>
  );
};
export default RightTopBox;
