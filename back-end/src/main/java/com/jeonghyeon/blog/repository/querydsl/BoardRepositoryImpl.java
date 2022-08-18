package com.jeonghyeon.blog.repository.querydsl;

import com.jeonghyeon.blog.dto.BoardDetailResponse;
import com.jeonghyeon.blog.entity.QAccount;
import com.jeonghyeon.blog.entity.QBoard;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import java.time.LocalDateTime;
import java.util.Optional;

import static com.jeonghyeon.blog.entity.QAccount.account;
import static com.jeonghyeon.blog.entity.QBoard.*;

public class BoardRepositoryImpl implements BoardRepositoryCustom{
    private final JPAQueryFactory jpaQueryFactory;

    public BoardRepositoryImpl(EntityManager em){
        this.jpaQueryFactory = new JPAQueryFactory(em);
    }

    /*
    * 인덱스처리하기 위해 id로 조회 하지만
    * msa라는 가정하에 uuid로 조회
    * */

    @Override
    public Optional<BoardDetailResponse> boardDetailResponseByUUID(String uuid) {
        BoardDetailResponse boardDetailResponse = jpaQueryFactory.select(
                        Projections.constructor(
                                BoardDetailResponse.class,
                                Expressions.asString(uuid),
                                board.title,
                                board.createdDate,
                                account.userId,
                                board.views,
                                board.content
                        )
                )
                .from(board)
                .innerJoin(board.account,account)
                .where(board.uuid.eq(uuid))
                .fetchOne();
        return Optional.ofNullable(boardDetailResponse);
    }

    @Override
    public void updateView(String uuid) {
        jpaQueryFactory
                .update(board)
                .where(board.uuid.eq(uuid))
                .set(board.views, board.views.add(1))
                .execute();
    }
}
