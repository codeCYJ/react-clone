import styled from "styled-components";
import { ReactComponent as FeedIcon } from "../../../assets/icons/feed.svg";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment.svg";
import { ReactComponent as DriectIcon } from "../../../assets/icons/direct.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";

const Action = () => {
  return (
    <Container>
      <ActionMenu>
        <FeedIcon />
        <CommentIcon />
        <DriectIcon />
      </ActionMenu>
      <BookmarkIcon />
    </Container>
  );
};

const Container = styled.section`
  padding: 6px 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  svg {
    width: 24px;
    height: 24px;
    padding: 8px;
    cursor: pointer;
    &:first-child {
      padding-left: 0;
    }
    &:hover {
      fill: #999;
    }
  }
`;
const ActionMenu = styled.div`
  display: flex;

`;
export default Action;
