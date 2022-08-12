import "./App.css";
import MainPage from "./pages/MainPage";
import styled from "styled-components";
import { Route } from "react-router-dom";
const AppForm = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ddd;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;
function App() {
  return (
    <AppForm>
      <Route path={["", "/"]} component={MainPage} />
    </AppForm>
  );
}

export default App;
