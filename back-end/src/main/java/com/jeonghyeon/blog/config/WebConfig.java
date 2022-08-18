package com.jeonghyeon.blog.config;

import org.springframework.context.annotation.Bean;
import org.springframework.data.web.config.PageableHandlerMethodArgumentResolverCustomizer;
import org.springframework.stereotype.Component;

@Component
public class WebConfig {

    /*
    page 번호를 1번 부터 하고 싶으면

    application.yml에서
    spring:
        data:
            web:
                pageable:
                    one-indexed-parameters: true
      또는
    */
    @Bean
    public PageableHandlerMethodArgumentResolverCustomizer customizer(){
        return p -> p.setOneIndexedParameters(true);
    }
}
