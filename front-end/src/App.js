import "./App.css";
import MainPage from "./pages/MainPage";
import styled from "styled-components";
import { Route } from "react-router-dom";
import ResumePage from "./pages/ResumePage";
import BoardPage from "./pages/BoardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
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
  return (
    <AppForm>
      <Route path={["", "/"]} exact component={MainPage} />
      <Route path="/resume" exact component={ResumePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
      <Route path="/board" exact component={BoardPage} />
    </AppForm>
  );
}

export default App;
