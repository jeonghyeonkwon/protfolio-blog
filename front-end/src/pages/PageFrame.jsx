import React from "react";
import BodyFrame from "../containers/BodyFrame";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";

function PageFrame({ children }) {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <BodyFrame>{children}</BodyFrame>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default PageFrame;
