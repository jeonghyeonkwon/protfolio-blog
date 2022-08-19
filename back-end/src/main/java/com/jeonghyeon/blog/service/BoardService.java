package com.jeonghyeon.blog.service;

import com.jeonghyeon.blog.dto.BoardDetailResponse;
import com.jeonghyeon.blog.dto.BoardListResponse;
import com.jeonghyeon.blog.dto.BoardRequest;
import com.jeonghyeon.blog.dto.PageListResponse;
import com.jeonghyeon.blog.entity.Account;
import com.jeonghyeon.blog.entity.AccountRole;
import com.jeonghyeon.blog.entity.Board;
import com.jeonghyeon.blog.repository.AccountRepository;
import com.jeonghyeon.blog.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

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


    @Transactional
    public BoardDetailResponse boardDetail(String boardUUID) {
        boardRepository.updateView(boardUUID);
        Optional<BoardDetailResponse> opBoardDetailResponse = boardRepository.boardDetailResponseByUUID(boardUUID);
        if(!opBoardDetailResponse.isPresent()){
            throw new IllegalStateException("해당 게시글은 존재하지 않습니다.");
        }
        BoardDetailResponse boardDetailResponse = opBoardDetailResponse.get();
        return boardDetailResponse;
    }


    public PageListResponse pageList(Pageable pageable) {

        Page<BoardListResponse> page = boardRepository.boardList(pageable);
        PageListResponse<BoardListResponse> pages = new PageListResponse<>(
                page.isFirst(),
                page.isLast(),
                page.getNumber(),
                page.getTotalPages(),
                page.getTotalElements(),
                page.getContent()
        );
        return pages;
    }
    @Transactional
    public void removeBoard() {
        List<Board> board = boardRepository.findBoardRemove(AccountRole.BASIC);
        board.stream().forEach((data)->data.mappingRemove());
        boardRepository.deleteAll(board);

    }
}
