import React from "react";
import { DiGit } from "react-icons/di";
import styled from "styled-components";
import ExperienceComponent from "../components/ExperienceComponent";
import SkillStackComponent from "../components/SkillStackComponent";
const ResumeContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;
const Resume = styled.div`
  width: 80%;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  & > div {
    margin-bottom: 20px;
  }

  & hr {
    text-align: center;
    width: 80%;
  }
`;
const NameDiv = styled.div`
  & h1 {
  }
  & em {
    color: grey;
  }
`;
const LinkDivForm = styled.div`
  & div {
    /* display: inline-block; */
    margin-right: 10px;
  }
  & h4 {
    font-size: 19px;
    display: inline;
  }
`;

const LinkDiv = styled.div`
  & > div {
    margin-bottom: 20px;
  }
  & a {
    transition: 0.8s;
    &:hover {
      color: dodgerblue;
    }
  }
`;
const LinkTitle = styled.div`
  display: inline-block;
  text-align: right;
  width: 80px;
`;
const ResumeForm = styled.div``;
const ResumeTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #51779c;
  &::before {
    height: 1px;
    background-color: grey;
    width: 40%;
    display: inline-block;
    content: "";
    vertical-align: middle;
    margin-right: 20px;
  }
  &::after {
    height: 1px;
    background-color: grey;
    width: 40%;
    display: inline-block;
    content: "";
    margin-left: 20px;
    vertical-align: middle;
  }
  text-align: center;
`;
const ResumeDetail = styled.div`
  padding: 15px;
  & h3 {
    margin-bottom: 10px;
  }
`;
function ResumeContainer(props) {
  return (
    <ResumeContainerForm>
      <Resume>
        <NameDiv>
          <h1>권정현 (JeongHyeon Kwon)</h1>
          <em>백앤드 개발자</em>
        </NameDiv>
        <LinkDivForm>
          <LinkDiv>
            <LinkTitle>
              <DiGit color="crimson" size={"23px"} />
            </LinkTitle>
            <a href="https://github.com/jeonghyeonkwon?tab=repositories">
              <em>https://github.com/jeonghyeonkwon?tab=repositories</em>
            </a>
          </LinkDiv>
          <LinkDiv>
            <LinkTitle>
              <h4>Blog : </h4>
            </LinkTitle>
            <a href="https://givejeong.tistory.com/">
              <em>https://givejeong.tistory.com/</em>
            </a>
          </LinkDiv>
          <LinkDiv>
            <LinkTitle>
              <h4>Email : </h4>
            </LinkTitle>

            <em>givejeong2468@gmail.com</em>
          </LinkDiv>
        </LinkDivForm>

        <SkillStackComponent></SkillStackComponent>
        <ExperienceComponent></ExperienceComponent>
      </Resume>
    </ResumeContainerForm>
  );
}

export default ResumeContainer;
