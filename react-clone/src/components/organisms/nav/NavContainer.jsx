import { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router";
import MiniSideBar from "../main/MiniSideBar";
import SideBar from "../main/SideBar";
import Nav from "./Nav";

const OutletWrapper = styled.div`
  margin-left: ${({ isSideOpen }) => (isSideOpen ? "240px" : "72px")};
`;
const NavContainer = ({ type }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  return (
    <>
      <Nav setOpen={setIsSideOpen} />

      {type === "main" ? (
        <>
          {isSideOpen ? <SideBar type={type} /> : <MiniSideBar />}
          <OutletWrapper isSideOpen={isSideOpen}>
            <Outlet />
          </OutletWrapper>
        </>
      ) : (
        <>
          {isSideOpen && (
            <SideBar type={type} onClose={() => setIsSideOpen(false)} />
          )}
          <Outlet />
        </>
      )}
    </>
  );
};

export default NavContainer;
