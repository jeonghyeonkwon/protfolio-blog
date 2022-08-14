import React from "react";
import BoardDetailContainer from "../containers/BoardDetailContainer";
import PageFrame from "./PageFrame";

function BoardDetailPage(props) {
  return (
    <PageFrame>
      <BoardDetailContainer></BoardDetailContainer>
    </PageFrame>
  );
}

export default BoardDetailPage;
