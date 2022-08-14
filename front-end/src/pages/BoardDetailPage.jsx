import React from "react";
import BoardDetailContainer from "../containers/BoardDetailContainer";
import PageFrame from "./PageFrame";

function BoardDetailPage(props) {
  return (
    <PageFrame>
      디테일
      <BoardDetailContainer></BoardDetailContainer>
    </PageFrame>
  );
}

export default BoardDetailPage;
