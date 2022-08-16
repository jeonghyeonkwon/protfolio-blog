package com.jeonghyeon.blog.security.config;

import com.jeonghyeon.blog.repository.AccountRepository;
import com.jeonghyeon.blog.security.auth.PrincipalDetails;
import com.jeonghyeon.blog.security.auth.PrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SecurityConfig{

    @Autowired
    private PrincipalDetailsService principalDetailsService;


    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http)throws Exception{
        return http.authorizeRequests()
                .mvcMatchers("/**").permitAll()
                .and()
                .userDetailsService(principalDetailsService)
                .build();

    }
}
