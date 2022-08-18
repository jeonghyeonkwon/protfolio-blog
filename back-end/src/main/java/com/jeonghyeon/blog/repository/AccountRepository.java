package com.jeonghyeon.blog.repository;

import com.jeonghyeon.blog.entity.Account;
import com.jeonghyeon.blog.repository.querydsl.AccountRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> , AccountRepositoryCustom {

    @Query("SELECT account" +
            " FROM Account account" +
            " WHERE account.uuid = :uuid")
    Optional<Account> findByUuid(String uuid);

    @Query("SELECT account" +
            " FROM Account account" +
            " WHERE account.userId = :userId")
    Optional<Account> findByUserId(String userId);
}
