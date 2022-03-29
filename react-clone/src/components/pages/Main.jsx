import React from "react";
import styled from "styled-components";
import MiniSideBar from "../organisms/main/MiniSideBar";

const Container = styled.div`
  margin-left: 72px;
`;
function Main() {
  return (
    <>
      <MiniSideBar />
      <Container>
        <p>asdkaskd</p>
        <header>title</header>
        <h1>asdasd</h1>
      </Container>
    </>
  );
}

export default Main;
