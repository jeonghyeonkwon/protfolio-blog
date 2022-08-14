import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
const LoginContainerForm = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;
const LoginForm = styled.div`
  width: 30%;
  height: 400px;
  padding: 20px;
  border: 2px solid gray;
  border-radius: 16px;

  & h1 {
    display: inline-block;

    margin-bottom: 20px;
  }
`;
const FieldForm = styled.div`
  margin-bottom: 30px;
`;
const BtnForm = styled.div`
  & button {
    margin-bottom: 30px;
  }
`;
function LoginContainer(props) {
  return (
    <LoginContainerForm>
      <LoginForm>
        <h1>로그인</h1>
        <FieldForm>
          <TextField
            label="아이디"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="비밀번호"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </FieldForm>
        <BtnForm>
          <Button variant="outlined" fullWidth>
            로그인 하기
          </Button>
          <a href="/register">
            <Button variant="outlined" color="success" fullWidth>
              회원가입
            </Button>
          </a>
        </BtnForm>
      </LoginForm>
    </LoginContainerForm>
  );
}

export default LoginContainer;
