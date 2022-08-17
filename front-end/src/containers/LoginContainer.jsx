import React, { useEffect } from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  initialize,
  changeField,
  excludeTokenInit,
  loginUser,
  tokenCheck,
} from "../modules/auth";
import { useHistory } from "react-router-dom";

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
  const { userId, userPassword, error, token } = useSelector(({ auth }) => ({
    userId: auth.login.userId,
    userPassword: auth.login.userPassword,
    error: auth.login.error,
    token: auth.auth.token,
  }));
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      alert(error);
      window.location.reload();
    }
  }, [error]);
  useEffect(() => {
    if (token) {
      try {
        localStorage.setItem("token", token);
        dispatch(tokenCheck(token));
        history.push("/");
      } catch (err) {
        alert("오류가 발생했습니다. 다시 시도해 주세요");
        window.location.reload();
      }
    }
  }, [token]);
  const onChangeField = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        type: "login",
        key: name,
        value,
      })
    );
  };

  const onClickLogin = (e) => {
    if (!userId || !userPassword) {
      alert("빈 값이 있습니다. 정보를 입력 후 사용해 주세요");
      return;
    }
    dispatch(
      loginUser({
        username: userId,
        password: userPassword,
      })
    );
  };
  useEffect(() => {
    dispatch(initialize());
    return () => dispatch(excludeTokenInit());
  }, []);
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
            value={userId}
            name="userId"
            onChange={onChangeField}
          />
          <TextField
            label="비밀번호"
            variant="outlined"
            fullWidth
            type="password"
            name="userPassword"
            value={userPassword}
            onChange={onChangeField}
          />
        </FieldForm>
        <BtnForm>
          <Button variant="outlined" fullWidth onClick={onClickLogin}>
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
