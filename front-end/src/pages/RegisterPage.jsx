import React from "react";
import RegisterContainer from "../containers/RegisterContainer";

import PageFrame from "./PageFrame";

function RegisterPage(props) {
  return (
    <>
      <PageFrame>
        <RegisterContainer></RegisterContainer>
      </PageFrame>
    </>
  );
}

export default RegisterPage;
