package com.jeonghyeon.blog.exhandler;

import lombok.Data;

@Data
public class ErrorResult<T> {
    private int errorCode;
    private T data;

    public ErrorResult(int errorCode, T data) {
        this.errorCode = errorCode;
        this.data = data;
    }
}
