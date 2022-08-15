package com.jeonghyeon.blog.repository;

import com.jeonghyeon.blog.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {

    @Query("SELECT account" +
            " FROM Account account" +
            " WHERE account.uuid = :uuid")
    Optional<Account> findByUuid(String uuid);
}
