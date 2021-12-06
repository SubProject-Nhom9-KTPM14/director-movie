package com.se.director.repository;

import com.se.director.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

public interface TokenRepository
        extends JpaRepository<Token, Long> {
    Token findByToken(String token);
    @Query("SELECT t from Token t where t.createdBy=:id")
    public Token findIdUser (@PathVariable("id") Long id);

}
