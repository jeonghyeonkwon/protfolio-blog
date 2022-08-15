package com.jeonghyeon.blog.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class AccountRequest {

    @NotBlank(message="빈 값을 채워주세요")
    private String userId;

    @NotBlank(message = "빈 값을 채워주세요")
    private String userPassword;
}
