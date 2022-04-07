import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextContent = styled.p`
  font-size: 14px;
  color: #262626;
  margin: 10px 20px;
  text-align: center;
`;
const ImageContainer = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: center;
`;
const Image = styled.img`
  background-image: url("https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png");
  height: 40px;
  &:first-child {
    margin-right: 8px;
  }
`;
const RightFooter = () => {
  return (
    <Layout>
      <TextContent>앱을 다운로드 하세요.</TextContent>
      <ImageContainer>
        <Image src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
        <Image src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" />
      </ImageContainer>
    </Layout>
  );
};
export default RightFooter;
