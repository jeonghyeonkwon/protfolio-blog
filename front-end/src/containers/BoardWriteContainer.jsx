import React, { useEffect } from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { boardWrite, changeField, initialize } from "../modules/board";
import { Link, useHistory } from "react-router-dom";
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
  const { title, content, success, error } = useSelector(({ board }) => ({
    title: board.write.title,
    content: board.write.content,
    error: board.write.error,
    success: board.write.success,
  }));
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      alert("게시글 작성을 완료했습니다.");
      history.push(`/board/detail/${success}`);
    }
    if (error) {
      alert(error);
      window.location.reload();
    }
  }, [success, error]);
  useEffect(() => {
    dispatch(initialize());
    return () => dispatch(initialize());
  }, []);
  const onChangeField = (e) => {
    const { name, value } = e.target;

    dispatch(
      changeField({
        key: name,
        value,
      })
    );
  };

  const onClickWrite = () => {
    if (title === "" || content === "") {
      alert("내용을 채워 주세요");
      return;
    }
    dispatch(
      boardWrite({
        title,
        content,
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
        <Button variant="contained" fullWidth onClick={onClickWrite}>
          작성하기
        </Button>
        <Link to="/board">
          <Button variant="contained" fullWidth color="error">
            취소하기
          </Button>
        </Link>
      </ButtonForm>
    </BoardWriteForm>
  );
}

export default BoardWriteContainer;
