import React from "react";
import LoginContainer from "../containers/LoginContainer";

import PageFrame from "./PageFrame";

function LoginPage(props) {
  return (
    <>
      <PageFrame>
        <LoginContainer></LoginContainer>
      </PageFrame>
    </>
  );
}

export default LoginPage;
