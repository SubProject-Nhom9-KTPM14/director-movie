package com.se.director.controller;

import com.se.director.authen.UserPrincipal;
import com.se.director.model.Director;
import com.se.director.model.Token;
import com.se.director.service.DirectorService;
import com.se.director.service.TokenService;
import com.se.director.util.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/directors")
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class AuthController {

    @Autowired
    private DirectorService directorService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/register")
    public Director register(@RequestBody Director director){
        director.setPassword(new BCryptPasswordEncoder().encode(director.getPassword()));
        director.setRole("USER");
        return directorService.createDirector(director);
    }
    @PostMapping("/register-admin")
    public Director registerAddmin(@RequestBody Director director){
        director.setPassword(new BCryptPasswordEncoder().encode(director.getPassword()));
        director.setRole("ADMIN");
        return directorService.createDirector(director);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Director user){
        UserPrincipal userPrincipal = directorService.findByUsername(user.getUsername());
        if (null == user || !new BCryptPasswordEncoder()
                .matches(user.getPassword(), userPrincipal.getPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Account or password is not valid!");
        }
        Token token = tokenService.findById(userPrincipal.getUserId());
        System.out.println(userPrincipal.toString());

        if(token==null) {
            Token newToken= new Token();
            newToken.setToken(jwtUtil.generateToken(userPrincipal));
            newToken.setTokenExpDate(jwtUtil.generateExpirationDate());
            newToken.setCreatedBy(userPrincipal.getUserId());
            tokenService.createToken(newToken);
            return ResponseEntity.ok(newToken.getToken());
        }else {
            token.setToken(jwtUtil.generateToken(userPrincipal));
            token.setTokenExpDate(jwtUtil.generateExpirationDate());
            token.setCreatedBy(userPrincipal.getUserId());
            tokenService.createToken(token);
            return ResponseEntity.ok(token.getToken());
        }

    }
    @GetMapping("/hello")
    @PreAuthorize("hasAnyAuthority('USER')")
    public ResponseEntity hello(){
        return ResponseEntity.ok("hello");
    }

}
