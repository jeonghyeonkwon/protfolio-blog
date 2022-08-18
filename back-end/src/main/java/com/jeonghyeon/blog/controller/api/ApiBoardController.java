package com.jeonghyeon.blog.controller.api;

import com.jeonghyeon.blog.dto.BoardDetailResponse;
import com.jeonghyeon.blog.dto.BoardListResponse;
import com.jeonghyeon.blog.dto.BoardRequest;
import com.jeonghyeon.blog.dto.PageListResponse;
import com.jeonghyeon.blog.exhandler.CustomValidationException;
import com.jeonghyeon.blog.exhandler.ValidationExceptionDto;
import com.jeonghyeon.blog.security.util.SecurityUtil;
import com.jeonghyeon.blog.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/board")
@Slf4j
public class ApiBoardController {
    private final BoardService boardService;

    @GetMapping({"","/"})
    public ResponseEntity boardList(
            @PageableDefault(size=10, page = 1, sort = "id",direction = Sort.Direction.DESC)Pageable pageable
            ){
        PageListResponse pages = boardService.pageList(pageable);
        return new ResponseEntity(pages,HttpStatus.OK);
    }

    @PostMapping({"","/"})
    public ResponseEntity writeBoard(@RequestBody @Valid BoardRequest dto, BindingResult result){
        Optional<String> opUserId = SecurityUtil.getCurrnetAccountId();
        if(!opUserId.isPresent()) throw new IllegalStateException("잘못된 요청입니다. 로그인 후 이용해 주세요");
        if(result.hasErrors()){
            List<FieldError> fieldErrors = result.getFieldErrors();
            ValidationExceptionDto errorList = new ValidationExceptionDto(fieldErrors);
            throw new CustomValidationException("검증 오류",errorList);
        }
        String uuid = boardService.writeBoard(opUserId.get(), dto);
        return new ResponseEntity(uuid,HttpStatus.CREATED);
    }

    @GetMapping("/{boardUUID}")
    public ResponseEntity boardDetail(@PathVariable String boardUUID){

        BoardDetailResponse boardDetailResponse = boardService.boardDetail(boardUUID);
        return new ResponseEntity(boardDetailResponse,HttpStatus.OK);
    }


}
