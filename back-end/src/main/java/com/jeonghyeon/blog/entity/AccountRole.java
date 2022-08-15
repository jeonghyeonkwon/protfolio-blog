package com.jeonghyeon.blog.entity;

public enum AccountRole {
    ADMIN("관리자"),
    BASIC("일반 회원");

    String kor;

    AccountRole(String kor){
        this.kor = kor;
    }

}
