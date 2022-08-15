package com.jeonghyeon.blog.entity;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name="BOARD_TABLE")
public class Board extends BaseTimeEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String uuid;

    private String title;
    @Lob
    private String content;

    private Long views;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_pk")
    private Account account;

    protected Board(){}

    public Board(String uuid,
                 String title,
                 String content,
                 Account account){
        this.uuid = uuid;
        this.title = title;
        this.content = content;
        this.account = account;
        this.views = (long) 0;
        account.getBoardList().add(this);
    }

    public void updateViews(){
        this.views += 1;
    }
}
