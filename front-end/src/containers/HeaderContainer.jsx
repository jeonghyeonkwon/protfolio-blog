import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import MenuComponent from "../components/MenuComponent";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../modules/auth";
const HeaderContainersForm = styled.div`
  margin: 0;
  width: 100%;
  background: #fff;
  border-radius: 0 0 5px 5px;
  height: 100px;
  display: flex;
  border-bottom: 1px solid #000;
  box-shadow: 0 3px 15px #525252;
`;
const MainTitleForm = styled.div`
  cursor: pointer;
  margin: 20px;
  width: 15%;
`;
const MainTitle = styled.div`
  font-size: 30px;
  width: 100%;
  height: 100%;
  font-weight: bold;

  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #0c4f8a;
    transition: 0.6s;
  }
`;
const MenuForm = styled.div`
  /* background-color: aqua; */
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AuthForm = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > a {
    margin: 20px;
  }
`;
function HeaderContainer(props) {
  const [menu, setMenu] = useState([
    { menuTitle: "Resume", path: "/resume" },
    { menuTitle: "Board", path: "/board" },
  ]);

  const { loginUser } = useSelector(({ auth }) => ({
    loginUser: auth.auth.userId,
  }));
  const history = useHistory();
  const dispatch = useDispatch();
  const onClickLogout = () => {
    try {
      dispatch(initialize());
      localStorage.removeItem("token");
      alert("로그아웃이 완료되었습니다");

      history.push("/login");
    } catch (e) {}
  };
  return (
    <HeaderContainersForm>
      <MainTitleForm>
        <Link to="/">
          <MainTitle>Portfolio-Blog</MainTitle>
        </Link>
      </MainTitleForm>
      <MenuForm>
        {menu.map((data) => (
          <MenuComponent
            title={data.menuTitle}
            path={data.path}
            width={100 / menu.length - 10}
          />
        ))}
      </MenuForm>
      {loginUser ? (
        <AuthForm>
          <Link to="/login">
            <p>{loginUser}님</p>
          </Link>

          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={onClickLogout}
          >
            로그아웃
          </Button>
        </AuthForm>
      ) : (
        <AuthForm>
          <Link to="/login">
            <Button variant="contained" size="large">
              로그인
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="contained" color="success" size="large">
              회원 가입
            </Button>
          </Link>
        </AuthForm>
      )}
    </HeaderContainersForm>
  );
}

export default HeaderContainer;
