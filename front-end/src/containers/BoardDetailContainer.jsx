import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { boardDetail, initialize } from "../modules/board";
const BoardDetailForm = styled.div`
  width: 50%;
  height: 700px;
  padding: 30px;
  border: 1px solid gray;
  border-radius: 10px;
`;
const BoardTitleForm = styled.div`
  margin-bottom: 20px;
`;
const BoardEtcForm = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0px;
  border-top: 1px solid gray;
`;
const BoardEtcTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  flex: 1;
`;
const BoardEtcContent = styled.div`
  flex: 5;
`;
const BoardContentForm = styled.div`
  font-size: 20px;
  border-top: 1px solid gray;
  padding-top: 15px;

  height: 350px;
`;
const BtnForm = styled.div`
  width: 100%;
  margin: 10px 0px;
`;
function BoardDetailContainer(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { title, createDate, writer, views, content, error } = useSelector(
    ({ board }) => ({
      title: board.detail.title,
      content: board.detail.content,
      createDate: board.detail.createDate,
      writer: board.detail.writer,
      views: board.detail.views,
      error: board.detail.error,
    })
  );
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    dispatch(initialize());
    dispatch(boardDetail(id));
    return () => dispatch(initialize());
  }, []);
  return (
    <BoardDetailForm>
      <BoardTitleForm>
        <h2>{title}</h2>
      </BoardTitleForm>
      <BoardEtcForm>
        <BoardEtcTitle>작성자</BoardEtcTitle>
        <BoardEtcContent>{writer}</BoardEtcContent>
      </BoardEtcForm>
      <BoardEtcForm>
        <BoardEtcTitle>생성일</BoardEtcTitle>
        <BoardEtcContent>{createDate}</BoardEtcContent>
      </BoardEtcForm>
      <BoardEtcForm>
        <BoardEtcTitle>조회수</BoardEtcTitle>
        <BoardEtcContent>{views}</BoardEtcContent>
      </BoardEtcForm>
      <BoardContentForm>
        <p>{content}</p>
      </BoardContentForm>
      <BtnForm>
        <Link to="/board">
          <Button variant="contained" fullWidth>
            목록으로
          </Button>
        </Link>
      </BtnForm>
    </BoardDetailForm>
  );
}

export default BoardDetailContainer;
