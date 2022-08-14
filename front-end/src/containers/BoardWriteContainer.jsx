import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
const BoardWriteForm = styled.div`
  width: 50%;
  /* background-color: #eee; */

  height: 700px;
  padding: 50px 20px;

  h1 {
    margin-bottom: 20px;
  }
`;
const ButtonForm = styled.div`
  & button {
    margin: 10px 0px;
  }
`;
function BoardWriteContainer(props) {
  return (
    <BoardWriteForm>
      <h1>글쓰기</h1>
      <TextField label="제목" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="제목"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={8}
      />
      <ButtonForm>
        <Button variant="contained" fullWidth>
          작성하기
        </Button>
        <Button variant="contained" fullWidth color="error">
          취소하기
        </Button>
      </ButtonForm>
    </BoardWriteForm>
  );
}

export default BoardWriteContainer;
