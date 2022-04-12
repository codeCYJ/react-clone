import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const ImgBox = styled.div`
  margin: 18px 0 10px 0;
`;
const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;
const NameBox = styled.div`
  width: 100%;
  margin-left: 12px;
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
const ChangeInfo = styled.div``;
const RightTop = () => {
  return (
    <Container>
      <ImgBox>
        <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrMjWkGeVUViVJ-7BNE-pB3cxIwW8265X4c01LwkRkSp_4kkhMHaXQgvjBQBHnpMKXnk&usqp=CAU" />
      </ImgBox>
      <NameBox>
        <ProfileId>Code_CYJ</ProfileId>
        <ProfileName>최용준</ProfileName>
      </NameBox>
      <ChangeInfo></ChangeInfo>
    </Container>
  );
};
export default RightTop;
