package com.se.movie.controller;

import com.se.movie.VO.ResponseTemplateVO;
import com.se.movie.service.MovieService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies")
@Slf4j
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping("/{id}")
    private ResponseTemplateVO getMovieWithDirectorById(@PathVariable("id") Long id){
        return movieService.getMovieWithDirectorById(id);
    }

}
