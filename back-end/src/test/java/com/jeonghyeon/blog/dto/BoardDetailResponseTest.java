package com.jeonghyeon.blog.dto;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
class BoardDetailResponseTest {

    @Test
    public void localDateTimeToString(){
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        String format = dateTimeFormatter.format(now);
        log.info("format = {}",format);
    }
}