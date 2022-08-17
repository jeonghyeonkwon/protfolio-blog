package com.jeonghyeon.blog.dto;

import lombok.Data;

@Data
public class TokenInfoResponse {
    private String token;
    private String userId;

    public TokenInfoResponse(String token, String userId) {
        this.token = token.replace("Bearer ","");
        this.userId = userId;
    }
}
