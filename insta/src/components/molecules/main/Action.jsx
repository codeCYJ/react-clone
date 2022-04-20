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
      <List></List>
      <BookmarkIcon />
    </Container>
  );
};

const Container = styled.section`
  height: 100px;
  padding: 6px 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    padding: 8px;
  }
`;
const ActionMenu = styled.div``;
const List = styled.div``;
export default Action;
