package com.cg.loginapp.contoller;

/**
 * author --> Sai Vineeth Neeli 
 */

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import com.google.common.base.Predicates;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import springfox.documentation.builders.ApiInfoBuilder;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean 
    public Docket docket() {
        return new Docket(DocumentationType.SWAGGER_2)
            .select().apis(Predicates.alwaysTrue())
            .paths(Predicates.alwaysTrue())
            .build();
    }

    private ApiInfo apiinfo() {
        return new ApiInfoBuilder()
            .title("Login and SignUp API")
            .description("Swagger Documentation for Authentication Services")
            .version("1.0")
            .build();
    }
}
