package com.jeonghyeon.blog.schedule;

import com.jeonghyeon.blog.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class ScheduleTasks {
    @Autowired
    private BoardService boardService;
    /*
    * 초
    * 분
    * 시
    * 일
    * 월
    * 년
    * */
    @Scheduled(cron = "0 0 0 * * *")
    public void removeBoard(){
        log.info("게시글 삭제");
        boardService.removeBoard();
    }
}
