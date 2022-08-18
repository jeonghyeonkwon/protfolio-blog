package com.jeonghyeon.blog.controller.api;

import com.jeonghyeon.blog.dto.BoardRequest;
import com.jeonghyeon.blog.exhandler.CustomValidationException;
import com.jeonghyeon.blog.exhandler.ValidationExceptionDto;
import com.jeonghyeon.blog.security.util.SecurityUtil;
import com.jeonghyeon.blog.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/")
@Slf4j
public class ApiBoardController {
    private final BoardService boardService;

    @GetMapping("/")
    public ResponseEntity boardList(){
        return new ResponseEntity("테스트",HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity writeBoard(@RequestBody @Valid BoardRequest dto, BindingResult result){
        Optional<String> opUserId = SecurityUtil.getCurrnetAccountId();
        if(!opUserId.isPresent()) throw new IllegalStateException("잘못된 요청입니다. 로그인 후 이용해 주세요");
        if(result.hasErrors()){
            List<FieldError> fieldErrors = result.getFieldErrors();
            ValidationExceptionDto errorList = new ValidationExceptionDto(fieldErrors);
            throw new CustomValidationException("검증 오류",errorList);
        }
        boardService.writeBoard(opUserId.get(),dto);
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
