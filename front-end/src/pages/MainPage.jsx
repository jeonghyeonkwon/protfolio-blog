import React from "react";
import BodyFrame from "../containers/BodyFrame";
import HeaderContainer from "../containers/HeaderContainer";
import MainContainer from "../containers/MainContainer";
function MainPage(props) {
  return (
    <>
      <HeaderContainer />
      <BodyFrame>
        <MainContainer />
      </BodyFrame>
    </>
  );
}

export default MainPage;
