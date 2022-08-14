import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import MenuComponent from "../components/MenuComponent";
import { Link } from "react-router-dom";
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
  & > button {
    margin: 20px;
  }
`;
function HeaderContainer(props) {
  const [menu, setMenu] = useState([
    { menuTitle: "Resume", path: "/resume" },
    { menuTitle: "Board", path: "/board" },
  ]);
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
      <AuthForm>
        <Button variant="contained" size="large">
          로그인
        </Button>
        <Button variant="contained" color="success" size="large">
          회원 가입
        </Button>
      </AuthForm>
    </HeaderContainersForm>
  );
}

export default HeaderContainer;
