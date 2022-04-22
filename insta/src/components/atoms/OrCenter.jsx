import styled from "styled-components";

const OrCenter = () => {
  return (
    <CenterWrap>
      <CenterLine />
      <CenterText>또는</CenterText>
      <CenterLine />
    </CenterWrap>
  );
};

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
export default OrCenter;
