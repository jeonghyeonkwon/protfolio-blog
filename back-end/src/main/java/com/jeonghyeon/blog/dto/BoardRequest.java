package com.jeonghyeon.blog.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class BoardRequest {
    @NotBlank(message="빈 값을 채워주세요")
    private String title;
    @NotBlank(message="빈 값을 채워주세요")
    private String content;
}
