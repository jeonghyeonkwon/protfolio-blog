package com.jeonghyeon.blog.security.jwt;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.stream.Collectors;

@Component
@Slf4j
public class TokenProvider implements InitializingBean {
    private static final String AUTHORITIES_KEY="auth";


    @Value("${token.expriation_time}")
    private long tokenValidityInMilliseconds;

    @Value("${token.secret}")
    private String secret;


    public String createToken(Authentication authentication){
        String authorities = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));
        Date expiration = new Date(System.currentTimeMillis() + tokenValidityInMilliseconds);

        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY,authorities)
                .signWith(SignatureAlgorithm.HS512,this.secret)
                .setExpiration(expiration)
                .compact();
    }



    @Override
    public void afterPropertiesSet() throws Exception {

    }
}
