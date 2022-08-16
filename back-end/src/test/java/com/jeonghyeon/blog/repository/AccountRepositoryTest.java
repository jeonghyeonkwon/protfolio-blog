package com.jeonghyeon.blog.repository;

import com.jeonghyeon.blog.entity.Account;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class AccountRepositoryTest {

    @Autowired
     AccountRepository accountRepository;

    @BeforeEach
    void initUser(){
        Account account = new Account("1234","userId","password");
        accountRepository.save(account);

    }


    @AfterEach
    void deleteUser(){
        accountRepository.deleteAll();
    }
    @Test
    void 사용중인_아이디로_유저_조회(){
        Optional<Account> opAccount = accountRepository.findByUserId("userId");
        Assertions.assertThat(opAccount.isPresent()).isTrue();
    }

    @Test
    void 만든적_없는_아이디로_유저_조회(){
        Optional<Account> opAccount = accountRepository.findByUserId("userId2");
        Assertions.assertThat(opAccount.isPresent()).isFalse();
    }
}