import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./components/pages/Main";
import Watch from "./components/pages/Watch";
import NavContainer from "./components/organisms/nav/NavContainer";

const Container = styled.div``;
const Routers = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<NavContainer type="main" />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route path="/" element={<NavContainer />}>
            <Route path="/watch/:videoId" element={<Watch />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
};
export default Routers;
