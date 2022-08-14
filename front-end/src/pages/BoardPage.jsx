import React from "react";
import BoardContainer from "../containers/BoardContainer";

import PageFrame from "./PageFrame";

function BoardPage(props) {
  return (
    <>
      <PageFrame>
        <BoardContainer></BoardContainer>
      </PageFrame>
    </>
  );
}

export default BoardPage;
