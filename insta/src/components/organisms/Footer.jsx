import styled from "styled-components";
import { footerTopBtn, footerBottomBtn } from "../../data/footerData";
const Footer = () => {
  return (
    <Layout>
      <ButtonContainer>
        <Contents>
          {footerTopBtn.map(({ id, link, title }) => (
            <a key={id} href={link}>
              <Btn>{title}</Btn>
            </a>
          ))}
        </Contents>
        <Contents>
          {footerBottomBtn.map(({ id, link, title }) => (
            <a key={id} href={link}>
              <Btn>{title}</Btn>
            </a>
          ))}
        </Contents>
      </ButtonContainer>
      <CopyrightContainer>
        <LanguageBtn>
          <option value="">한국어</option>
          <option value="">영어</option>
        </LanguageBtn>
        <Copyright>© 2022 Instagram from Meta</Copyright>
      </CopyrightContainer>
    </Layout>
  );
};
const Layout = styled.div`
  margin-bottom: 52px;
`;
const ButtonContainer = styled.div``;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &:first-child {
    margin-top: 24px;
  }
`;
const Btn = styled.button`
  cursor: pointer;
  background-color: white;
  font-size: 12px;
  color: #8e8e8e;
`;
const CopyrightContainer = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: center;
`;
const LanguageBtn = styled.select`
  font-size: 12px;
  color: #8e8e8e;
`;
const Copyright = styled.p`
  font-size: 12px;
  color: #8e8e8e;
  margin-left: 16px;
`;
export default Footer;