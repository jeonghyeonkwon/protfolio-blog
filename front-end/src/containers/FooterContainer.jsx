import React from "react";
import styled from "styled-components";
const FooterContainerForm = styled.div`
  width: 100%;

  border-top: 1px solid #000;

  background-color: #eee;
  height: 150px;
`;
const FooterInfo = styled.div`
  background-color: dodgerblue;
`;
function FooterContainer(props) {
  return (
    <FooterContainerForm>
      <FooterInfo>
        <p></p>
      </FooterInfo>
    </FooterContainerForm>
  );
}

export default FooterContainer;
