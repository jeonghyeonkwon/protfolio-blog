package com.jeonghyeon.blog.controller.api;

import com.jeonghyeon.blog.dto.AccountRequest;
import com.jeonghyeon.blog.service.AccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
public class ApiAccountController {
    private final AccountService accountService;


    @PostMapping("/register")
    public ResponseEntity register(@RequestBody AccountRequest dto){
        return accountService.regitser(dto);
    }
}
