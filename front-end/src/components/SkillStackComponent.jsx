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
function SkillStackComponent(props) {
  return (
    <ResumeForm>
      <ResumeTitle>기술 스택</ResumeTitle>
      <ResumeDetail>
        <h3>BackEnd</h3>
        <ul>
          <li>Java, JavaScript, SpringBoot, ExpressJS(TypeScript)</li>
          <li>Spring MVC, Spring JPA, Spring Security, Sequelize, SocketIO</li>
          <li>Gradle, Maven, IntelliJ</li>
        </ul>
      </ResumeDetail>

      <ResumeDetail>
        <h3>FrontEnd</h3>
        <ul>
          <li>HTML5 / CSS, JavaScript, ReactJs, JQuery</li>
          <li>redux-saga, styled-component, Immer</li>
          <li>Visual Studio Code</li>
        </ul>
      </ResumeDetail>
      <ResumeDetail>
        <h3>DevOps</h3>
        <ul>
          <li>Docker, docker-compose</li>
          <li>Nginx, EC2, S3, RDS, CentOS, Shell Script Programming</li>
        </ul>
      </ResumeDetail>
    </ResumeForm>
  );
}

export default SkillStackComponent;
