import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./components/pages/Main";
import Nav from "./components/organisms/nav/Nav";

const Container = styled.div``;
export default class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Container>
      </Router>
    );
  }
}
