import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { ReactComponent as DirectIcon } from "../../../assets/icons/direct.svg";
import { ReactComponent as FeedIcon } from "../../../assets/icons/feed.svg";
import { ReactComponent as FindIcon } from "../../../assets/icons/find.svg";
import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as NewIcon } from "../../../assets/icons/new.svg";

export { SearchIcon, HomeIcon, DirectIcon, FeedIcon, FindIcon, NewIcon };

const iconSelect = (icon) => {
  switch (icon) {
    case "search":
      return <SearchIcon />;
    case "direct":
      return <DirectIcon />;
    case "feed":
      return <FeedIcon />;
    case "find":
      return <FindIcon />;
    case "home":
      return <HomeIcon />;
    case "new":
      return <NewIcon />;
    case "profile":
      return (
        <ProfileIcon src="https://source.unsplash.com/user/erondu/1600x900" />
      );
    default:
      return "";
  }
};

const IconWrapper = ({ icon }) => {
  return <Wrapper>{iconSelect(icon)}</Wrapper>;
};

const Wrapper = styled.div`
  margin-left: 22px;
  cursor: pointer;
`;

const ProfileIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50px;
`;

export default IconWrapper;
