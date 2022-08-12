import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import MenuComponent from "../components/MenuComponent";
const HeaderContainersForm = styled.div`
  margin: 0;
  width: 100%;
  background: linear-gradient(to bottom right, #403b4a, #e7e9bb);
  border-radius: 0 0 5px 5px;
  height: 100px;
  display: flex;
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

  color: #1a2980;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: black;
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
function HeaderContainers(props) {
  const [menu, setMenu] = useState([
    { menuTitle: "이력서", path: "/" },
    { menuTitle: "게시판", path: "/" },
  ]);
  return (
    <HeaderContainersForm>
      <MainTitleForm>
        <MainTitle>Portfolio-Blog</MainTitle>
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

export default HeaderContainers;
