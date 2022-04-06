import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./components/pages/Main";
const Container = styled.div``;
const Routers = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Container>
    </Router>
  );
};
export default Routers;
