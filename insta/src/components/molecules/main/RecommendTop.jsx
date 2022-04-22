import styled from "styled-components";

const RecommendTop = () => {
  return (
    <Container>
      <ImgBox>
        <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrMjWkGeVUViVJ-7BNE-pB3cxIwW8265X4c01LwkRkSp_4kkhMHaXQgvjBQBHnpMKXnk&usqp=CAU" />
      </ImgBox>
      <NameBox>
        <ProfileId>Code_CYJ</ProfileId>
        <ProfileName>최용준</ProfileName>
      </NameBox>
      <ChangeInfo href="/login">전환</ChangeInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 56px;
`;
const ImgBox = styled.div`
  margin: 18px 18px 10px 0;
`;
const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;
const NameBox = styled.div`
  width: 100%;
  flex: 1;
`;
const ProfileId = styled.p`
  font-size: 14px;
  color: #262626;
  margin: 0;
  font-weight: 600;
`;
const ProfileName = styled.p`
  font-size: 14px;
  color: #828282;
  margin: 0;
`;
const ChangeInfo = styled.a`
  color: #0095f6;
  background: inherit;
  font-size: 12px;
  line-height: 16px;
  margin: -2px 0 -3px;
  font-weight: 600;
`;
export default RecommendTop;
