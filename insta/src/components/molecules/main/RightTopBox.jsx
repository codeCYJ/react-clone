import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 40px;
`;
const Title = styled.div`
  background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png");
  height: 51px;
  width: 175px;
  background-size: 440px 411px;
  background-position: 0 -129px;
  margin: 22px auto 12px;
`;
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
const LoginBtn = styled.button`
  background-color: #0095f6;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  padding: 6px 9px;
  color: white;
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0;
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
const CenterWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 18px;
`;
const CenterLine = styled.div`
  background-color: #dbdbdb;
  height: 1px;
  flex-grow: 1;
`;
const CenterText = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin: 0 18px;
  flex-grow: 0;
  color: #8e8e8e;
  position: relative;
  top: 1px;
`;
const SignInInput = styled.input`
  font-size: 12px;
  background-color: #fafafa;
  padding: 9px 0 7px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  line-height: 18px;
  margin-bottom: 6px;
`;
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
        <CenterWrap>
          <CenterLine />
          <CenterText>또는</CenterText>
          <CenterLine />
        </CenterWrap>
        <SignInInput placeholder="휴대폰 번호 또는 이메일 주소" />
        <SignInInput placeholder="성명" />
        <SignInInput placeholder="사용자 이름" />
        <SignInInput placeholder="비밀번호" />
        <LoginBtn>가입</LoginBtn>
      </SignInForm>
    </Container>
  );
};
export default RightTopBox;
