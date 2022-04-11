import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SignIn from "./components/pages/SignIn";
import Login from "./components/pages/Login";
import Main from "./components/pages/Main";
import Study from "./components/atoms/Study";
import Practice from "./components/atoms/Practice";
const Container = styled.div``;
const Routers = () => {
  useEffect(() => {
    console.log("ro");
  }, []);
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
};
export default Routers;
