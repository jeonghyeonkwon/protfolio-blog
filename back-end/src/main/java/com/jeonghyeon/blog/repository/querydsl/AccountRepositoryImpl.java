package com.jeonghyeon.blog.repository.querydsl;

import com.jeonghyeon.blog.entity.QAccount;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;

import static com.jeonghyeon.blog.entity.QAccount.account;

public class AccountRepositoryImpl implements AccountRepositoryCustom{
    private final JPAQueryFactory jpaQueryFactory;

    public AccountRepositoryImpl(EntityManager em){
        this.jpaQueryFactory = new JPAQueryFactory(em);
    }
    @Override
    public boolean existUserId(String userId) {
        /*
        * querydsl의 exist는 count(1) > 1 쿼리를 사용하므로 다 조회 후 하나를 반환
        * 그래서 fetchFirst로 조회해야 된다.
        * */
        Integer fetchOne = jpaQueryFactory
                .selectOne()
                .from(account)
                .where(account.userId.eq(userId))
                .fetchFirst();
        return fetchOne!=null;
    }
}
