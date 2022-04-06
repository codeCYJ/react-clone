import styled from "styled-components";

const Container = styled.div`
  width: 240px;
  height: 100%;
`;
const TextBox = styled.div`
  padding: 0px 24px 16px 24px;
`;
const TextLink = styled.a`
  font-size: 13px;
  margin-right: 8px;
  color: #606060;
`;
const Text = styled.p`
  font-size: 12px;
  color: #909090;
  margin: 0;
`;
function CopyRight() {
  return (
    <Container>
      <TextBox>
        <TextLink href="https://www.youtube.com/about/">정보</TextLink>
        <TextLink href="https://www.youtube.com/about/press/">
          보도자료
        </TextLink>
        <TextLink href="https://www.youtube.com/about/copyright/">
          저작권
        </TextLink>
        <TextLink href="/t/contact_us/">문의하기</TextLink>
        <TextLink href="https://www.youtube.com/creators/">크리에이터</TextLink>
        <TextLink href="https://www.youtube.com/ads/">광고</TextLink>
        <TextLink href="https://developers.google.com/youtube">개발자</TextLink>
      </TextBox>
      <TextBox>
        <TextLink href="https://www.youtube.com/t/terms">약관</TextLink>
        <TextLink href="https://www.youtube.com/t/privacy">
          개인정보처리방침
        </TextLink>
        <TextLink href="https://www.youtube.com/about/policies/">
          정책 및 안전
        </TextLink>
        <TextLink href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&amp;utm_source=ythp&amp;utm_medium=LeftNav&amp;utm_content=txt&amp;u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">
          YouTube 작동의 원리
        </TextLink>
        <TextLink href="https://www.youtube.com/new">
          새로운 기능 테스트하기
        </TextLink>
      </TextBox>
      <TextBox>
        <Text>© 2022 Google LLC</Text>
        <Text>
          CEO: 선다 피차이 <br />
          주소: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
          <br /> 전화: 080-822-1450(무료)
        </Text>
      </TextBox>
    </Container>
  );
}
export default CopyRight;
