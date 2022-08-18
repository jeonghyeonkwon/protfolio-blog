package com.jeonghyeon.blog.service;


import com.jeonghyeon.blog.dto.AccountRequest;
import com.jeonghyeon.blog.entity.Account;
import com.jeonghyeon.blog.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    private final PasswordEncoder passwordEncoder;
    public boolean validateUserId(String userId) {
        validateUser(accountRepository, userId);
        return true;

    }

    @Transactional
    public Long regitser(AccountRequest dto) {
        String userId = dto.getUserId();
        validateUser(accountRepository, userId);
        Account account = new Account(UUID.randomUUID().toString(),dto.getUserId(),passwordEncoder.encode(dto.getUserPassword()));
        Account savedAccount = accountRepository.save(account);
        return savedAccount.getId();

    }

    private void validateUser(AccountRepository accountRepository, String userId) {
        boolean isExistUser =  accountRepository.existUserId(userId);
        if(isExistUser){
            throw new IllegalStateException("이미 사용하는 아이디를 가진 회원이 있습니다");
        }
    }
}

