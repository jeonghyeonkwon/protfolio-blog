import React from "react";
import styled from "styled-components";
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

const CompanyForm = styled.div`
  background-color: yellowgreen;
  width: 100%;
  display: flex;
`;
const CompanyTitle = styled.div`
  background-color: dodgerblue;
  padding: 20px;
  width: 40%;
`;
const CompanyDetail = styled.div`
  background-color: grey;
  width: 60%;
`;
function ExperienceComponent(props) {
  return (
    <ResumeForm>
      <ResumeTitle>경력</ResumeTitle>
      <ResumeDetail>
        <CompanyForm>
          <CompanyTitle>
            <h2>드림 아이디어 소프트</h2>
            <p>게임, SI, SM, 메타버스 관련 IT회사</p>
            <em>(2021.07 ~ 2022.03)</em>
            <strong>백앤드 개발자</strong>
          </CompanyTitle>
          <CompanyDetail></CompanyDetail>
        </CompanyForm>
      </ResumeDetail>
    </ResumeForm>
  );
}

export default ExperienceComponent;
