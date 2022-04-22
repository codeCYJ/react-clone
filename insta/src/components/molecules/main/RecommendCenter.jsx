import styled from "styled-components";
import { recommendData } from "data/mainData";

const RecommendCenter = () => {
  return (
    <Container>
      <TitleBox>
        <Title>회원님을 위한 추천</Title>
        <SubTitle>모두 보기</SubTitle>
      </TitleBox>
      <RecommendList>
        {recommendData.map(({ image, name, follow, friends }, index) => (
          <PersonWrap key={index}>
            <ImgBox>
              <ProfileImage src={image} />
            </ImgBox>
            <NameBox>
              <ProfileId>{name}</ProfileId>
              <FollowText>
                {follow
                  ? "회원님을 팔로우합니다"
                  : friends
                  ? friends.name + "님이 팔로우합니다."
                  : "회원님을 위한 추천"}
              </FollowText>
            </NameBox>
            <FollowBtn>팔로우</FollowBtn>
          </PersonWrap>
        ))}
      </RecommendList>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% + 32px);
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  margin: 20px 0 8px 0;
  height: 19px;
`;
const Title = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: #8e8e8e;
  flex: 1;
`;
const SubTitle = styled.button`
  color: #262626;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background: inherit;
`;
const RecommendList = styled.div``;
const PersonWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
`;
const ImgBox = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
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
const FollowText = styled.p`
  font-size: 12px;
  color: #8e8e8e;
  margin: 3px 0 0 0;
  line-height: 16px;
`;
const FollowBtn = styled.button`
  color: #0095f6;
  background: inherit;
  font-size: 12px;
  line-height: 16px;
  margin: -2px 0 -3px;
  font-weight: 600;
`;
export default RecommendCenter;
