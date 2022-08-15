import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Button,
} from "@mui/material";
import styled from "styled-components";

const BoardContainerForm = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: crimson; */
  & a {
    transition: 0.8s;
    &:hover {
      color: dodgerblue;
    }
  }
`;

const BoardTitle = styled.div`
  /* background-color: dodgerblue; */
  width: 100%;
  padding: 20px 0 20px 0;
  & h1 {
    margin-bottom: 10px;
  }

  & em {
    color: gray;
  }
  /* padding: 10px; */
`;
const BoardWriteBtn = styled.div`
  width: 100%;
  margin-bottom: 10px;
  text-align: right;
`;
const PaginationForm = styled.div`
  /* background-color: crimson; */
  margin-top: 20px;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function createData(no, title, writer, createDate, views) {
  return { no, title, writer, createDate, views };
}

const rows = [
  createData(1, "제목 1 입니다.. 자세한 내용은", "admin", "2022.08.14", 2004),
  createData(
    23451,
    "제목 1 입니다.. 자세한 내용은",
    "admin",
    "2022.08.14",
    2004
  ),
  createData(
    11235,
    "제목 1 입니다.. 자세한 내용은",
    "admin",
    "2022.08.14",
    2004
  ),
  createData(
    18865,
    "제목 1 입니다.. 자세한 내용은",
    "admin",
    "2022.08.14",
    2004
  ),
  createData(
    1123451,
    "제목 1 입니다.. 자세한 내용은",
    "admin",
    "2022.08.14",
    2004
  ),
  createData(
    11255,
    "제목 1 입니다.. 자세한 내용은",
    "admin",
    "2022.08.14",
    2004
  ),
];

const columns = [
  { id: "no", label: "No.", width: "10%", align: "left" },
  { id: "title", label: "제목", width: "50%", align: "left" },
  { id: "writer", label: "작성자", width: "15%", align: "center" },
  { id: "date", label: "생성일", width: "15%", align: "left" },
  { id: "views", label: "조회수", width: "10%", align: "left" },
];
function BoardContainer(props) {
  return (
    <BoardContainerForm>
      <BoardTitle>
        <h1>게시판</h1>
        <em>
          스프링 배치를 이용하여 다음날로 넘어갈 시 admin을 제외한 모든 게시글은
          삭제됩니다.
        </em>
      </BoardTitle>
      <BoardWriteBtn>
        <Button variant="contained">글쓰기</Button>
      </BoardWriteBtn>
      <TableContainer component={Paper}>
        <Table sx={{}}>
          <TableHead>
            <TableRow>
              {columns.map((data) => (
                <TableCell id={data.id} width={data.width} align={data.align}>
                  {data.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.no}>
                <TableCell component="th" scope="row">
                  {row.no}
                </TableCell>
                <TableCell align="left">
                  <Link to={row.id}>{row.title}</Link>
                </TableCell>
                <TableCell align="center">{row.writer}</TableCell>
                <TableCell align="left">{row.createDate}</TableCell>
                <TableCell align="left">{row.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationForm>
        <Pagination
          count={10}
          size="large"
          variant="outlined"
          color="primary"
        />
      </PaginationForm>
    </BoardContainerForm>
  );
}

export default BoardContainer;
