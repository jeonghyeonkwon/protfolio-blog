import "./App.css";
import MainPage from "./pages/MainPage";
import styled from "styled-components";
import { Route } from "react-router-dom";
import ResumePage from "./pages/ResumePage";
import BoardPage from "./pages/BoardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BoardWritePage from "./pages/BoardWritePage";
import BoardDetailPage from "./pages/BoardDetailPage";
import { useDispatch } from "react-redux";
import { tokenCheck } from "./modules/auth";
import Auth from "./hooks/auth";
const AppForm = styled.div`
  width: 100%;
  /* height: 1200px; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`;
function App() {
  const dispatch = useDispatch();
  try {
    const token = localStorage.getItem("token");

    dispatch(tokenCheck(token));
  } catch (e) {
    console.log("localstorage가 작동하지 않습니다.");
  }
  return (
    <AppForm>
      <Route path={["", "/"]} exact component={Auth(MainPage, null)} />
      <Route path="/resume" exact component={Auth(ResumePage, null)} />
      <Route path="/login" exact component={Auth(LoginPage, false)} />
      <Route path="/register" exact component={Auth(RegisterPage, false)} />
      <Route path="/board" exact component={Auth(BoardPage, null)} />
      <Route path="/board/detail/:id" component={Auth(BoardDetailPage, null)} />
      <Route path="/board/write" exact component={Auth(BoardWritePage, true)} />
    </AppForm>
  );
}

export default App;
