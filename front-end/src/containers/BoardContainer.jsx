import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
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
import QueryString from "qs";
import { useDispatch, useSelector } from "react-redux";
import { boardList } from "../lib/api/board";
import { fetchBoard, initialize } from "../modules/board";
const BoardContainerForm = styled.div`
  width: 80%;
  height: 700px;
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

const columns = [
  { id: "no", label: "No.", width: "10%", align: "left" },
  { id: "title", label: "제목", width: "50%", align: "left" },
  { id: "writer", label: "작성자", width: "15%", align: "center" },
  { id: "date", label: "생성일", width: "15%", align: "left" },
  { id: "views", label: "조회수", width: "10%", align: "left" },
];
function BoardContainer(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const search = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  useEffect(() => {
    dispatch(initialize());
    return () => dispatch(initialize());
  }, []);
  useEffect(() => {
    dispatch(fetchBoard(search.page));
  }, [search.page]);

  const {
    isFirst,
    isList,
    currentPage,
    totalPage,
    totalElement,
    startBlockPage,
    endBlockPage,
    dataList,
  } = useSelector(({ board }) => ({
    isFirst: board.boardList.isFirst,
    isLast: board.boardList.isLast,
    currentPage: board.boardList.currentPage,
    totalPage: board.boardList.totalPage,
    totalElement: board.boardList.totalElement,
    startBlockPage: board.boardList.totalBlockPage,
    endBlockPage: board.boardList.endBlockPage,
    dataList: board.boardList.dataList,
  }));
  const onClickFetch = (event, page) => {
    history.push(`/board?page=${page}`);
  };

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
            {dataList.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">
                  <Link to={`board/detail/${row.uuid}`}>{row.title}</Link>
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
          size="large"
          variant="outlined"
          color="primary"
          count={totalPage}
          hidePrevButton={isFirst}
          hideNextButton={isList}
          page={currentPage}
          onChange={onClickFetch}
        />
      </PaginationForm>
    </BoardContainerForm>
  );
}

export default BoardContainer;
