package com.jeonghyeon.blog.repository.querydsl;

import com.jeonghyeon.blog.dto.BoardDetailResponse;
import com.querydsl.jpa.impl.JPAQueryFactory;

import java.util.Optional;

public interface BoardRepositoryCustom {

    Optional<BoardDetailResponse> boardDetailResponseByUUID(String uuid);

    void updateView(String uuid);

}
