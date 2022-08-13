import React from "react";
import styled from "styled-components";
const BodyFrameForm = styled.div`
  width: 100%;
  /* background-color: yellowgreen; */
  height: 1200px;
`;
function BodyFrame({ children }) {
  return <BodyFrameForm>{children}</BodyFrameForm>;
}

export default BodyFrame;
