package com.jeonghyeon.blog.service;

import com.jeonghyeon.blog.dto.BoardDetailResponse;
import com.jeonghyeon.blog.dto.BoardRequest;
import com.jeonghyeon.blog.entity.Account;
import com.jeonghyeon.blog.entity.Board;
import com.jeonghyeon.blog.repository.AccountRepository;
import com.jeonghyeon.blog.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BoardService {
    private final AccountRepository accountRepository;
    private final BoardRepository boardRepository;

    @Transactional
    public String writeBoard(String userId, BoardRequest dto) {
        Optional<Account> opAccount = accountRepository.findByUserId(userId);
        if(!opAccount.isPresent()) throw new IllegalStateException("로그인 한 회원과 일치하는 유저 정보가 없습니다. 다시 시도해 주세요");
        Account account = opAccount.get();
        Board board = new Board(UUID.randomUUID().toString(),dto.getTitle(),dto.getContent(),account);
        Board savedBoard = boardRepository.save(board);
        return savedBoard.getUuid();
    }


    public BoardDetailResponse boardDetail(String boardUUID) {
        boardRepository.updateView(boardUUID);
        Optional<BoardDetailResponse> opBoardDetailResponse = boardRepository.boardDetailResponseByUUID(boardUUID);
        if(!opBoardDetailResponse.isPresent()){
            throw new IllegalStateException("해당 게시글은 존재하지 않습니다.");
        }
        BoardDetailResponse boardDetailResponse = opBoardDetailResponse.get();
        return boardDetailResponse;
    }
}
