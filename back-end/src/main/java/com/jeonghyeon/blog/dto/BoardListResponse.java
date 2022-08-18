package com.jeonghyeon.blog.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
public class BoardListResponse {
    private Long id;
    private String uuid;
    private String title;
    private String writer;
    private String createDate;
    private Long views;
    public BoardListResponse(Long id,
                             String uuid,
                             String title,
                             String writer,
                             LocalDateTime createDate,
                             Long views){
        this.id = id;
        this.uuid = uuid;
        this.title = title;
        this.writer = writer;
        this.createDate = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(createDate);
        this.views = views;
    }
}
