import React from "react";
import BodyFrame from "../containers/BodyFrame";
import HeaderContainer from "../containers/HeaderContainer";
import ResumeContainer from "../containers/ResumeContainer";
function ResumePage(props) {
  return (
    <>
      <HeaderContainer />
      <BodyFrame>
        <ResumeContainer />
      </BodyFrame>
    </>
  );
}

export default ResumePage;
