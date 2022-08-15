package com.jeonghyeon.blog.service;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;

@RequiredArgsConstructor
@Component
public class AccountService {
    private final InitService initService;

    @PostConstruct
    public void init(){
        initService.createAdmin();
    }


    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService{
        private final EntityManager em;

        @Value("${account.admin.adminId}")
        private String adminId;

        @Value("${account.admin.adminPw}")
        private String adminPw;

        public void createAdmin(){}
    }



}

