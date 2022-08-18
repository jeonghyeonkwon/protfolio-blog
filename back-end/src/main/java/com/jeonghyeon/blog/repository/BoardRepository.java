package com.jeonghyeon.blog.repository;

import com.jeonghyeon.blog.entity.Account;
import com.jeonghyeon.blog.entity.Board;
import com.jeonghyeon.blog.repository.querydsl.BoardRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board, Long>, BoardRepositoryCustom {

    @Query("SELECT board" +
            " FROM Board board" +
            " WHERE board.uuid = :uuid")
    Optional<Account> findByUuid(String uuid);
}
