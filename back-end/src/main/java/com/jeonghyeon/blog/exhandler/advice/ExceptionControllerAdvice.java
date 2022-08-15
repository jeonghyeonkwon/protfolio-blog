package com.jeonghyeon.blog.exhandler.advice;

import com.jeonghyeon.blog.exhandler.CustomValidationException;
import com.jeonghyeon.blog.exhandler.ErrorResult;
import com.jeonghyeon.blog.exhandler.ValidationExceptionDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;

@Slf4j
@RestControllerAdvice
public class ExceptionControllerAdvice {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(CustomValidationException.class)
    public ErrorResult validationException(CustomValidationException e){
        List<ValidationExceptionDto.ErrorInfo> errorDto = e.getErrorDto();
        return new ErrorResult(HttpStatus.BAD_REQUEST.value(), errorDto);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalStateException.class)
    public ErrorResult illegalStateException(IllegalStateException e){
        String message = e.getMessage();
        log.error("error = {}",message);
        return new ErrorResult(HttpStatus.BAD_REQUEST.value(), message);
    }
}
