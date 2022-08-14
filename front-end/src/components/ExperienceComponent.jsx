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
  /* background-color: yellowgreen; */
  width: 100%;
  display: flex;
`;
const CompanyTitle = styled.div`
  padding: 20px;
  width: 40%;
  & > * {
    margin-bottom: 5px;
  }
  & h2 {
  }
  & p {
  }
  & em {
    color: gray;
    display: block;
  }
  & strong {
    color: dodgerblue;
  }
`;
const CompanyDetail = styled.div`
  /* background-color: grey; */
  padding: 20px;
  width: 60%;
  & li {
    margin-bottom: 5px;
    & a {
      color: grey;

      text-decoration: underline;
      transition: 0.8s;
      &:hover {
        color: dodgerblue;
      }
    }
  }
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
            <strong>웹 개발자</strong>
          </CompanyTitle>
          <CompanyDetail>
            <ul>
              <li>
                SI 외주 프로젝트 3개 진행(프로젝트 모두 80% 이상 설계 및 개발)
              </li>
              <li>SpringBoot, MySQL, Spring JPA,Jquery 환경에서 개발 경험</li>
              <li>라이센스 문제 ExpressJS로 문제 해결 결험</li>
              <li>
                <a href="https://givejeong.tistory.com/2">
                  브라우저 캐시 문제로 인한 반영 안되는 현상 해결 경험
                </a>
              </li>
              <li>JPA N+1 실무 문제 해결 경험</li>
              <li>소셜 로그인 관련 요구사항 OAuth2-client로 개발 경험</li>
              <li>페이팔 결제 테스트 환경에서 구현 경험</li>
            </ul>
          </CompanyDetail>
        </CompanyForm>
      </ResumeDetail>
    </ResumeForm>
  );
}

export default ExperienceComponent;
