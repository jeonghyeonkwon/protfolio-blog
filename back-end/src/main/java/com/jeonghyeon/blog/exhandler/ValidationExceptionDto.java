package com.jeonghyeon.blog.exhandler;

import lombok.Data;
import lombok.Getter;
import org.springframework.validation.FieldError;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class ValidationExceptionDto {
    List<ErrorInfo> errorInfoList;

    public ValidationExceptionDto(List<FieldError> fieldErrors){
        List<ErrorInfo> collect = fieldErrors
                .stream()
                .map(
                        err ->
                        new ErrorInfo(err.getDefaultMessage(), err.getField())
                )
                .collect(Collectors.toList());
        this.errorInfoList = collect;

    }

    @Getter
    public class ErrorInfo{
        private String defaultMessage;
        private String fieldName;

        public ErrorInfo(String defaultMessage,
                         String fieldName){
            this.defaultMessage = defaultMessage;
            this.fieldName = fieldName;
        }
    }
}
