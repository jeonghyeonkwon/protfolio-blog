package com.jeonghyeon.blog;

import com.jeonghyeon.blog.entity.Account;
import com.jeonghyeon.blog.entity.AccountRole;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Component
public class InitDB {
    private final InitService initService;

    @PostConstruct
    public void init(){
        initService.createAdmin();
    }


    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService{
        private final EntityManager em;
        private final PasswordEncoder passwordEncoder;
        @Value("${account.admin.adminId}")
        private String adminId;

        @Value("${account.admin.adminPw}")
        private String adminPw;

        public void createAdmin(){
            Optional<Account> opAccount = em
                    .createQuery("SELECT account FROM Account account WHERE account.userId = :accountId", Account.class)
                    .setParameter("accountId", adminId)
                    .getResultList().stream().findFirst();
            if(!opAccount.isPresent()){
                Account account = new Account(UUID.randomUUID().toString(),adminId,passwordEncoder.encode(adminPw), AccountRole.ADMIN);
                em.persist(account);
            }
        }
    }

}
