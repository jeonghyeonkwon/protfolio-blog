import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MainContainerForm = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: crimson; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Intro = styled.div`
  width: 70%;
  height: 900px;
  background-color: aliceblue;

  & h1 {
    display: inline-block;
    margin-bottom: 20px;
  }
  & h3 {
    margin-bottom: 10px;
  }
  & p {
    width: 1100px;
    margin-bottom: 10px;
  }
  & div {
    padding: 20px;
  }
  & hr {
    margin-bottom: 10px;
  }

  & a {
    color: dodgerblue;
    transition: 0.6s;
    &:hover {
      color: #0e0c8a;
    }
  }
`;
const SimpleIntro = styled.div`
  margin-bottom: 10px;
`;
const DetailIntro = styled.div`
  background-color: #eee;
  margin-bottom: 10px;
`;
function MainContainer(props) {
  return (
    <MainContainerForm>
      <Intro>
        <SimpleIntro>
          <h1>프로젝트 소개</h1>
          <p>
            간단한 게시판 예제와 저의 대한 내용을 소개하기 위해 제작한
            포트폴리오용 사이트입니다
          </p>
          <p>
            회원 가입 로그인은 가능하지만 예시를 보여드리기 위한 목적이므로
            아이디 비밀번호는 한번도 사용한 적 없는 간단한 것으로 만들어주세요
            (ex 아이디 : abc 비밀번호 : 1234)
          </p>
          <p>
            해당 사이트에 대한 코드는 &nbsp;
            <a href="https://github.com/jeonghyeonkwon">여기 클릭!</a>
          </p>
        </SimpleIntro>
        <hr />
        <DetailIntro>
          <h1>백앤드</h1>
          <h3>사용 기술</h3>
          <ul>
            <li>SpringBoot</li>
            <li>Spring JPA</li>
            <li>Spring QueryDSL</li>
            <li>Spring Security</li>
          </ul>
        </DetailIntro>
        <hr />
        <DetailIntro>
          <h1>프론트앤드</h1>
          <h3>사용 기술</h3>
          <ul>
            <li>NodeJS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>redux-saga</li>
            <li>styled-component</li>
            <li>material-ui</li>
          </ul>
        </DetailIntro>
        <hr />
        <DetailIntro>
          <h1>etc...</h1>
          <h3>사용 기술</h3>
          <ul>
            <li>git</li>
            <li>docker</li>
          </ul>
        </DetailIntro>
      </Intro>
    </MainContainerForm>
  );
}

export default MainContainer;
