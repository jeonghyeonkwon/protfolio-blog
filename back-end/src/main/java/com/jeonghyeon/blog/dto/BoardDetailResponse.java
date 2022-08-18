package com.jeonghyeon.blog.dto;

import lombok.Getter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
public class BoardDetailResponse {
    private String uuid;
    private String title;
    private String createDate;
    private String writer;
    private Long views;
    private String content;

    public BoardDetailResponse(String uuid,
                               String title,
                               LocalDateTime createDate,
                               String writer,
                               Long views,
                               String content) {
        this.uuid = uuid;
        this.title = title;
        this.createDate = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(createDate);
        this.writer = writer;
        this.views = views;
        this.content = content;
    }
}
