package com.yanto;

import com.yanto.RestAPIEats.security.JWTAuthorizationFilter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@SpringBootApplication
public class EatsApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(EatsApplication.class, args);
	}
		@EnableWebSecurity
		@Configuration
		class WebSecurityConfig extends WebSecurityConfigurerAdapter {
			
			@Override
			protected void configure(HttpSecurity http) throws Exception {
				http.csrf().disable()
						.addFilterAfter(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class)
						.authorizeRequests()
						.antMatchers(HttpMethod.POST, "/user/login").permitAll()
						.antMatchers(HttpMethod.POST, "/user/registrasi").permitAll()
						.antMatchers(HttpMethod.GET, "/eats/viewall").permitAll()
						.antMatchers(HttpMethod.POST, "/eats/viewbylokasi").permitAll()
						.anyRequest().authenticated();
			}
		}
}
