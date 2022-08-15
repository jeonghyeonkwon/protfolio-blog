package com.jeonghyeon.blog.exhandler;

import lombok.Getter;

import java.util.List;

@Getter
public class CustomValidationException extends RuntimeException{
    private List<ValidationExceptionDto.ErrorInfo> errorDto;

    public CustomValidationException(String message,
                                     ValidationExceptionDto dto){
        super(message);
        List<ValidationExceptionDto.ErrorInfo> errorInfoList = dto.getErrorInfoList();
        this.errorDto = errorInfoList;
    }

}
