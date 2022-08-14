import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
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
  return (
    <BoardDetailForm>
      <BoardTitleForm>
        <h2>
          제목입니다.제목입니다.
          제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.
        </h2>
      </BoardTitleForm>
      <BoardEtcForm>
        <BoardEtcTitle>작성자</BoardEtcTitle>
        <BoardEtcContent>givejeong2468</BoardEtcContent>
      </BoardEtcForm>
      <BoardEtcForm>
        <BoardEtcTitle>생성일</BoardEtcTitle>
        <BoardEtcContent>2020.08.02</BoardEtcContent>
      </BoardEtcForm>
      <BoardEtcForm>
        <BoardEtcTitle>조회수</BoardEtcTitle>
        <BoardEtcContent>12355534</BoardEtcContent>
      </BoardEtcForm>
      <BoardContentForm>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          perspiciatis itaque aliquid, nam repellendus eaque voluptatum hic
          facilis dicta minus, laborum magnam tempore omnis, deserunt soluta
          dolorum numquam fugiat saepe. Natus aliquid, nam sunt consequatur
          necessitatibus nostrum in sit nulla enim quia odit adipisci
          aspernatur, libero impedit dolorum aperiam! Nulla id sunt commodi quas
          minus deserunt voluptatibus exercitationem officia rerum. Illum quasi
          est blanditiis dignissimos incidunt provident vitae libero earum culpa
          accusantium esse at sapiente neque corporis ducimus reprehenderit
          mollitia id, possimus numquam ad laudantium deleniti! Autem eveniet
          nam dolore expedita repellat magnam voluptatem praesentium commodi,
          iste officia quas sed.
        </p>
      </BoardContentForm>
      <BtnForm>
        <Button variant="contained" fullWidth>
          목록으로
        </Button>
      </BtnForm>
    </BoardDetailForm>
  );
}

export default BoardDetailContainer;
