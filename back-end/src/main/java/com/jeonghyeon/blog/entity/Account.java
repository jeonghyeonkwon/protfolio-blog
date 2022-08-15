package com.jeonghyeon.blog.entity;

import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "ACCOUNT_TABLE")
@Getter
public class Account extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String uuid;

    private String userId;

    private String userPassword;

    @Enumerated(EnumType.STRING)
    private AccountRole accountRole;

    @OneToMany(mappedBy = "account")
    private List<Board> boardList = new ArrayList<>();

    protected Account(){}

    public Account(String uuid,
                   String userId,
                   String userPassword){
        this.uuid = uuid;
        this.userId = userId;
        this.userPassword = userPassword;
        this.accountRole = AccountRole.BASIC;
    }

}
