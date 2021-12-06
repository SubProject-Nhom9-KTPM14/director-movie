package com.se.director.service;


import com.se.director.model.Token;

public interface TokenService {
    Token createToken(Token token);

    Token findByToken(String token);
}
