import styled from "styled-components";
import { Container, Title, LoginBtn, SignInInput } from "../../atoms/login";
import OrCenter from "../../atoms/OrCenter";

const RightTopBox = () => {
  return (
    <Container>
      <Title props={"login"} />
      <SignInForm>
        <SignInInput placeholder="전화번호, 사용자 이름 또는 이메일" />
        <SignInInput placeholder="비밀번호" />
        <LoginBtn href="/main">로그인</LoginBtn>
        <OrCenter />
        <FaceBookLogin>
          <FacebookImage />
          Facebook으로 로그인
        </FaceBookLogin>
        <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
      </SignInForm>
    </Container>
  );
};

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 36px;
`;

const FaceBookLogin = styled.button`
  background-color: #fff;
  font-weight: 600;
  text-align: center;
  color: white;
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0;
  color: #385185;
`;
const FindPassword = styled.button`
  background-color: #fff;
  text-align: center;
  font-size: 12px;
  margin: 12px 0 0 0;
  color: #00376b;
`;
const FacebookImage = styled.span`
  background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_32f0a4f27407.png/32f0a4f27407.png");
  background-position: -414px -259px;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  display: inline-block;
  position: relative;
  top: 2px;
`;

export default RightTopBox;
