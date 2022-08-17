package com.jeonghyeon.blog.controller.api;

import com.jeonghyeon.blog.dto.AccountRequest;
import com.jeonghyeon.blog.dto.LoginRequest;
import com.jeonghyeon.blog.security.jwt.TokenProvider;
import com.jeonghyeon.blog.service.AccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
public class ApiAccountController {
    private final AccountService accountService;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final TokenProvider tokenProvider;
    @GetMapping("/find")
    public ResponseEntity validateUserId(@RequestParam("userId") String userId){
        accountService.validateUserId(userId);
        return new ResponseEntity("사용가능한 아이디 입니다", HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody AccountRequest dto){
        Long id = accountService.regitser(dto);
        return new ResponseEntity(id,HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequest dto){
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(dto.getUsername(),dto.getPassword());
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(token);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwtToken = tokenProvider.createToken(authentication);

        return new ResponseEntity(jwtToken,HttpStatus.OK);
    }
}
