import React from "react";
import BodyFrame from "../containers/BodyFrame";
import HeaderContainer from "../containers/HeaderContainer";
import ResumeContainer from "../containers/ResumeContainer";
import PageFrame from "./PageFrame";
function ResumePage(props) {
  return (
    <>
      <PageFrame>
        <ResumeContainer />
      </PageFrame>
    </>
  );
}

export default ResumePage;
