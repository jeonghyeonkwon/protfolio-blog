import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MenuComponentForm = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  margin: 20px;

  /* background-color: crimson; */

  font-weight: bold;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  /* background-color: yellowgreen; */
  width: 100%;
  height: 100%;

  & a {
    color: #000;
    transition: 0.6s;
    &:hover {
      color: gray;
    }
  }
`;
function MenuComponent({ title, path, width }) {
  return (
    <MenuComponentForm width={width}>
      <Menu>
        <Link to={path}>{title}</Link>
      </Menu>
    </MenuComponentForm>
  );
}

export default MenuComponent;
