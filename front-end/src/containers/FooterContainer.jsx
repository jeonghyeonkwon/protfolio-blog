import React from "react";
import styled from "styled-components";

const FooterContainerForm = styled.div`
  width: 100%;
  border-top: 1px solid #000;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
`;

const FooterInfo = styled.div`
  /* margin-top: 20px; */
  /* background-color: dodgerblue; */
  width: 95%;
  text-align: right;
  & p {
    display: block;
    width: 100%;
    margin-bottom: 5px;
  }
`;

function FooterContainer(props) {
  return (
    <FooterContainerForm>
      <FooterInfo>
        <p>* 이 사이트는 포트폴리오 용으로 작업한 사이트 입니다.</p>
        <p>
          게시글 작성은 가능 하나 다음날로 넘어갈 시 게시글 내용은 삭제 되도록
          설계했습니다.
        </p>
        <p>
          회원가입 아이디 비밀 번호는 정말 간단한 아이디 비밀번호로 가입해
          주세요.
        </p>
      </FooterInfo>
    </FooterContainerForm>
  );
}

export default FooterContainer;
