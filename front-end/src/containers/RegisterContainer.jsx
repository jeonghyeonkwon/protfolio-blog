import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
const RegisterContainerForm = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;
const RegisterForm = styled.div`
  width: 30%;
  height: 440px;
  padding: 20px;
  border: 2px solid gray;
  border-radius: 16px;

  & h1 {
    margin-bottom: 10px;
  }
  & em {
    color: gray;
  }
`;

const FieldForm = styled.div`
  margin-top: 20px;
`;
const IdForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    margin-left: 5px;
    width: 30%;
    height: 54px;
  }
`;
const ErrorMsg = styled.div`
  width: 100%;
  height: 25px;
  display: block;
  color: crimson;
  margin: 0px 10px;
`;
const BtnForm = styled.div`
  & button {
    margin-bottom: 20px;
  }
`;
function RegisterContainer(props) {
  const { userId, userPassword, errorMsg } = useSelector(({ user }) => ({
    userId: user.register.userId,
    userPassword: user.register.userPassword,
    errorMsg: user.register.error,
  }));
  return (
    <RegisterContainerForm>
      <RegisterForm>
        <h1>회원가입</h1>
        <em>간단한 내용으로 가입해 주세요 (아이디:abc, 비밀번호:1234)</em>

        <FieldForm>
          <IdForm>
            <TextField
              label="아이디"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <Button variant="outlined" size="small">
              중복 확인
            </Button>
          </IdForm>
          <ErrorMsg>{errorMsg.userId}</ErrorMsg>
          <TextField
            label="비밀번호"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <ErrorMsg>{errorMsg.userPassword}</ErrorMsg>
        </FieldForm>
        <BtnForm>
          <Button variant="outlined" fullWidth>
            회원 가입 하기
          </Button>
          <a href="/login">
            <Button variant="outlined" color="error" fullWidth>
              취소하기
            </Button>
          </a>
        </BtnForm>
      </RegisterForm>
    </RegisterContainerForm>
  );
}

export default RegisterContainer;
