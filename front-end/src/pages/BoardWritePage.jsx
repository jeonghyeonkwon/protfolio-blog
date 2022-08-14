import React from "react";
import BoardWriteContainer from "../containers/BoardWriteContainer";
import PageFrame from "./PageFrame";

function BoardWritePage(props) {
  return (
    <PageFrame>
      <BoardWriteContainer></BoardWriteContainer>
    </PageFrame>
  );
}

export default BoardWritePage;
