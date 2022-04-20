import styled from "styled-components";
import { postData } from "../../../data/mainData";
import { ReactComponent as OptionIcon } from "../../../assets/icons/option.svg";
import ImageWrapper from "../../molecules/main/ImageWrapper";
import Comment from "../../molecules/main/Comment";
import Action from "../../molecules/main/Action";

const PostList = () => {
  return (
    <>
      {postData.map(({ id, user, imageList }) => (
        <Container key={id}>
          <Header>
            <Profile>
              <ProfilePicture src={user.profileImage} />
              <NameAndLocation>
                <ProfileName>{user.name}</ProfileName>
                <ProfileLocation>{user.location}</ProfileLocation>
              </NameAndLocation>
            </Profile>
            <OptionWrapper>
              <OptionIcon />
            </OptionWrapper>
          </Header>
          <ImageWrapper imageList={imageList} />
          <Action />
          <Comment />
        </Container>
      ))}
    </>
  );
};
const Container = styled.div`
  width: 100%;
  max-width: 614px;
  height: 614px;
  border: 1px solid #dbdbdb;
  margin: 0 auto 124px auto;
  background-color: white;
`;
const Header = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 4px 14px 16px;
`;
const ProfilePicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const NameAndLocation = styled.div`
  margin-left: 14px;
`;
const ProfileName = styled.p`
  font-size: 14px;
  margin: 0;
`;
const ProfileLocation = styled.p`
  font-size: 12px;
  color: #828282;
  margin: 0;
`;
const OptionWrapper = styled.div`
  padding-right: 16px;
`;

export default PostList;
