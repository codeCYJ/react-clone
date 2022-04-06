import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  overflow-x: auto;

  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.05, 0, 0, 1);
  will-change: transform;
  display: inline-block;
  white-space: nowrap;
`;
const MenuButton = styled.button`
  min-width: 50px;
  height: 32px;
  margin: 12px 12px 12px 0;
  border-radius: 15px;
  padding: 3px 12px 0 12px;
  border: 1px solid #e0e0e0;
  background-color: ${({ active }) => (active ? "black" : "#efefef")};
  color: ${({ active }) => (active ? "white" : "black")};
  &:hover {
    background-color: ${({ active }) => (active ? "black" : "#e0e0e0")};
    color: ${({ active }) => (active ? "white" : "black")};
  }
  &:first-child {
    margin-left: 24px;
  }
`;
const MenuData = [
  { id: "1", name: "전체", link: "www.youtube.com" },
  { id: "2", name: "클론 코딩", link: "www.youtube.com" },
  { id: "3", name: "GitHub", link: "www.youtube.com" },
  { id: "4", name: "HTMLCSS", link: "www.youtube.com" },
  { id: "5", name: "JavaScript", link: "www.youtube.com" },
  { id: "6", name: "React", link: "www.youtube.com" },
  { id: "7", name: "Java", link: "www.youtube.com" },
  { id: "8", name: "프로그래밍", link: "www.youtube.com" },
  { id: "9", name: "음악", link: "www.youtube.com" },
  { id: "10", name: "피트니스", link: "www.youtube.com" },
  { id: "11", name: "실시간", link: "www.youtube.com" },
  { id: "12", name: "믹스", link: "www.youtube.com" },
  { id: "13", name: "영화", link: "www.youtube.com" },
  { id: "14", name: "피아노", link: "www.youtube.com" },
  { id: "15", name: "축구", link: "www.youtube.com" },
];
function TopList() {
  const [isActive, setIsActive] = useState("1");
  return (
    <Container>
      {MenuData.map(({ name, link, id }) => (
        <MenuButton
          href={link}
          key={id}
          onClick={() => setIsActive(id)}
          active={isActive === id}
        >
          {name}
        </MenuButton>
      ))}
    </Container>
  );
}
export default TopList;
