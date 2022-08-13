import "./App.css";
import MainPage from "./pages/MainPage";
import styled from "styled-components";
import { Route } from "react-router-dom";
import ResumePage from "./pages/ResumePage";
const AppForm = styled.div`
  width: 100%;
  /* height: 1200px; */
  background-color: #ddd;
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
    </AppForm>
  );
}

export default App;
