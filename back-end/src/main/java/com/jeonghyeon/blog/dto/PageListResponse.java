package com.jeonghyeon.blog.dto;


import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class PageListResponse<T> {

    private Boolean isFirst;
    private Boolean isLast;
    private int currentPage;
    private int totalPage;
    private long totalElement;
    private int startBlockPage;
    private int endBlockPage;

    private List<T> dataList;

    public PageListResponse(Boolean isFirst,
                            Boolean isLast,
                            int currentPage,
                            int totalPage,
                            long totalElement,
                            List<T> dataList) {
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.currentPage = currentPage+1;
        this.totalPage = totalPage;
        this.totalElement = totalElement;
        this.dataList = dataList;

        this.startBlockPage = ((currentPage)/10)*10+1;
        int endBlock = startBlockPage + 10 -1;
        endBlock = totalPage < endBlock?totalPage:endBlock;
        this.endBlockPage = endBlock;
    }
}
