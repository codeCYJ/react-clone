import styled from "styled-components";
import { footerTopBtn } from "data/footerData";

const RecommendBottom = () => {
  return (
    <Layout>
      <Contents>
        {footerTopBtn.map(({ id, link, title }) =>
          id < 12 ? (
            <a key={id} href={link}>
              <Btn>{title}</Btn>
            </a>
          ) : (
            ""
          )
        )}
      </Contents>
      <Copyright>© 2022 Instagram from Meta</Copyright>
    </Layout>
  );
};
const Layout = styled.div`
  width: 100%;
`;
const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;
const Btn = styled.button`
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
  color: #c7c7c7;
  background-color: inherit;
`;
const Copyright = styled.p`
  font-size: 13px;
  cursor: pointer;
  line-height: 16px;
  color: #c7c7c7;
  margin: 16px 0 16px 6px;
`;
export default RecommendBottom;
