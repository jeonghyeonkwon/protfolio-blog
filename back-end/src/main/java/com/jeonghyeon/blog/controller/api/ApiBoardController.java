package com.jeonghyeon.blog.controller.api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@Slf4j
public class ApiBoardController {
    @GetMapping("/")
    public ResponseEntity board(){
        return new ResponseEntity("테스트",HttpStatus.OK);
    }
}
