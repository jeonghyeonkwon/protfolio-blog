import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../modules/board";
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
  const { title, content, error } = useSelector(({ board }) => ({
    title: board.write.title,
    content: board.write.content,
    error: board.write.error,
  }));
  const dispatch = useDispatch();
  const onChangeField = (e) => {
    const { name, value } = e.target;

    dispatch(
      changeField({
        key: name,
        value,
      })
    );
  };
  return (
    <BoardWriteForm>
      <h1>글쓰기</h1>
      <TextField
        label="제목"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={onChangeField}
        name="title"
      />
      <TextField
        label="제목"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={8}
        value={content}
        onChange={onChangeField}
        name="content"
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
