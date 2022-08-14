import React from "react";

import MainContainer from "../containers/MainContainer";
import PageFrame from "./PageFrame";
function MainPage(props) {
  return (
    <>
      <PageFrame>
        <MainContainer></MainContainer>
      </PageFrame>
    </>
  );
}

export default MainPage;
