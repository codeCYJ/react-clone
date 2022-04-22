import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as Like } from "../../../assets/icons/like.svg";
import { ReactComponent as OnLike } from "../../../assets/icons/onLike.svg";
import { ReactComponent as Emo } from "../../../assets/icons/emoticon.svg";
const Comment = ({ likes, replys, content, user, created_at }) => {
  const lastReplys = replys.items[replys.items.length - 1];
  const [isLike, setIsLike] = useState(false);
  const [replyValue, setReplyValue] = useState("");
  return (
    <>
      <LikeCount>
        <HeavyFont>좋아요 {likes.total}개</HeavyFont>
      </LikeCount>
      <CommentContainer>
        <CommentWrap>
          <HeavyFont>{lastReplys.user.name}</HeavyFont>
          <ThinFont>{lastReplys.content}</ThinFont>
        </CommentWrap>
        <CommentWrap>
          <GrayFont>댓글 {replys.total}개 모두 보기</GrayFont>
        </CommentWrap>
        <ContentContainer>
          <ContentWrap>
            <HeavyFont>{user.name}&nbsp;</HeavyFont>
            <ThinFont>{content}</ThinFont>
          </ContentWrap>
          {!isLike ? (
            <Like onClick={() => setIsLike((prev) => !prev)} />
          ) : (
            <OnLike
              onClick={() => setIsLike((prev) => !prev)}
              active={isLike}
            />
          )}
        </ContentContainer>
      </CommentContainer>
      <AgoDay>
        <SmallFont>{created_at}</SmallFont>
      </AgoDay>
      <Reply>
        <Emo />
        <ReplyInput
          placeholder="댓글 달기..."
          value={replyValue}
          onChange={(e) => setReplyValue(e.target.value)}
        />
        <ReplyBtn active={replyValue}>게시</ReplyBtn>
      </Reply>
    </>
  );
};

const LikeCount = styled.div`
  padding: 0 16px;
  margin: 0 0 8px;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  flex: 0 0 auto;
`;
const CommentWrap = styled.div`
  display: flex;
  margin-bottom: 4px;
  line-height: 18px;
`;
const ContentContainer = styled(CommentWrap)`
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
  .onLike {
    &:active {
      transform: scale(1.2);
      transition: ease-in-out;
    }
  }
  .like {
    &:hover {
      fill: #999;
    }
  }
`;
const ContentWrap = styled.div`
  display: flex;
`;
const AgoDay = styled.div`
  margin-bottom: 16px;
  padding: 0 16px;
  height: 18px;
  margin-top: 2px;
`;
const HeavyFont = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  margin: 0;
`;
const ThinFont = styled(HeavyFont)`
  font-weight: 400;
  margin-left: 4px;
`;
const GrayFont = styled(HeavyFont)`
  color: #8e8e8e;
  font-weight: 400;
`;
const SmallFont = styled.p`
  font-size: 10px;
  color: #8e8e8e;
  letter-spacing: 0.2px;
  margin: 0;
`;
const Reply = styled.div`
  padding: 6px 16px;
  border-top: 1px solid #efefef;
  height: 40px;
  display: flex;
  align-items: center;
  svg {
    padding: 8px 16px 8px 0;
    cursor: pointer;
  }
`;
const ReplyInput = styled.input`
  font-size: 14px;
  line-height: 18px;
  color: #262626;
  height: 18px;
  flex: 1;
  cursor: text;
`;
const ReplyBtn = styled.button`
  border: 0;
  opacity: ${({ active }) => (active ? "1" : "0.3")};
  pointer-events: ${({ active }) => !active && "null"};
  cursor: ${({ active }) => (active ? "pointer" : "default")};
  color: rgb(0, 149, 246);
  background: white;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;
export default Comment;
