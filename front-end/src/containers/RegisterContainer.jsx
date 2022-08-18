import React, { useEffect } from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initialize,
  messageInitialize,
  registerUser,
  validateChange,
  validateUser,
} from "../modules/register";
import { useHistory } from "react-router-dom";
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
const Msg = styled.div`
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
  const { userId, userPassword, validate, success, errorMsg, validateMsg } =
    useSelector(({ register }) => ({
      userId: register.register.userId,
      userPassword: register.register.userPassword,
      errorMsg: register.register.error,
      validate: register.register.validate,
      success: register.register.success,
      validateMsg: register.register.validateMsg,
    }));
  const dispatch = useDispatch();
  const history = useHistory();
  const onChangeField = (e) => {
    const { name, value } = e.target;
    if (name === "userId" && validate) {
      dispatch(validateChange(false));
    }
    dispatch(
      changeField({
        type: "register",
        key: name,
        value,
      })
    );
  };
  const onClickValidate = () => {
    if (userId === "") {
      alert("아이디를 입력해 주세요");
      return;
    }
    dispatch(messageInitialize());
    dispatch(validateUser(userId));
  };
  const onClickRegister = () => {
    if (!validate) {
      alert("중복 체크 후 가입해주세요");
      return;
    }
    dispatch(
      registerUser({
        userId: userId,
        userPassword: userPassword,
      })
    );
  };

  useEffect(() => {
    if (success) {
      alert(success);
      history.push("/login");
    }
  }, [success]);
  useEffect(() => {
    if (validateMsg.success) {
      alert(validateMsg.success);
    }
    if (validateMsg.error) {
      alert(validateMsg.error);
    }
  }, [validateMsg.success, validateMsg.error]);
  useEffect(() => {
    dispatch(initialize());
    return () => dispatch(initialize());
  }, []);
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
              value={userId}
              name="userId"
              onChange={onChangeField}
            />
            <Button variant="outlined" size="small" onClick={onClickValidate}>
              중복 확인
            </Button>
          </IdForm>
          <Msg>{errorMsg.userId}</Msg>
          <TextField
            label="비밀번호"
            variant="outlined"
            fullWidth
            margin="dense"
            value={userPassword}
            name="userPassword"
            onChange={onChangeField}
          />
          <Msg>{errorMsg.userPassword}</Msg>
        </FieldForm>
        <BtnForm>
          <Button variant="outlined" fullWidth onClick={onClickRegister}>
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
