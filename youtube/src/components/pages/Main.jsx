import React from "react";
import TopList from "../organisms/main/TopList";
import PlayList from "../organisms/main/PlayList";
import ScrollToTop from "scroll-to-top-lib";
function Main() {
  return (
    <>
      <ScrollToTop />
      <TopList />
      <PlayList />
    </>
  );
}

export default Main;
