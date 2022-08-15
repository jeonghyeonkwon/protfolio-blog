package com.jeonghyeon.blog.service;


import com.jeonghyeon.blog.dto.AccountRequest;
import com.jeonghyeon.blog.entity.Account;
import com.jeonghyeon.blog.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class AccountService {
    private final AccountRepository accountRepository;

    @Transactional
    public ResponseEntity regitser(AccountRequest dto) {
        String userId = dto.getUserId();
        Optional<Account> opAccount = accountRepository.findByUserId(userId);
        if(opAccount.isPresent()){
            throw new IllegalStateException("이미 사용하는 아이디를 가진 회원이 있습니다");
        }

        // 시큐리티 적용후 비밀번호 인코딩 예정
        Account account = new Account(UUID.randomUUID().toString(),dto.getUserId(),"1234");
        Account savedAccount = accountRepository.save(account);
        return new ResponseEntity(savedAccount,HttpStatus.CREATED);
    }


}

