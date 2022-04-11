import styled from "styled-components";
import { Container, Title, LoginBtn ,SignInInput} from "../../atoms/login";
import OrCenter from "../../atoms/OrCenter";

const RightTopBox = () => {
  return (
    <Container>
      <Title />
      <SubTitle>친구들의 사진과 동영상을 보려면 가입하세요.</SubTitle>
      <SignInForm>
        <LoginBtn>
          <FacebookImage />
          Facebook으로 로그인
        </LoginBtn>
        <OrCenter />
        <SignInInput placeholder="휴대폰 번호 또는 이메일 주소" />
        <SignInInput placeholder="성명" />
        <SignInInput placeholder="사용자 이름" />
        <SignInInput placeholder="비밀번호" />
        <LoginBtn>가입</LoginBtn>
      </SignInForm>
    </Container>
  );
};

const SubTitle = styled.p`
  color: #8e8e8e;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  margin: 0 auto 10px;
`;
const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FacebookImage = styled.span`
  background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_32f0a4f27407.png/32f0a4f27407.png");
  background-position: -414px -300px;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  display: inline-block;
  position: relative;
  top: 2px;
`;


export default RightTopBox;
