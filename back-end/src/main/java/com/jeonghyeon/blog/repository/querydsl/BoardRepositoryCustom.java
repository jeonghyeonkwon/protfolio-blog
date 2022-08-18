package com.jeonghyeon.blog.repository.querydsl;

import com.jeonghyeon.blog.dto.BoardDetailResponse;
import com.jeonghyeon.blog.dto.BoardListResponse;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface BoardRepositoryCustom {

    Optional<BoardDetailResponse> boardDetailResponseByUUID(String uuid);

    void updateView(String uuid);

    Page<BoardListResponse> boardList(Pageable pageable);

}
