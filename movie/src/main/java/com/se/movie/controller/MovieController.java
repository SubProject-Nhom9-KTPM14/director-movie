package com.se.movie.controller;

import com.se.movie.VO.ResponseTemplateVO;
import com.se.movie.model.Movie;
import com.se.movie.service.MovieService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/movies")
@Slf4j
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping("/")
    public String welcome(){
        return "hello!!";
    }

    @GetMapping("/{id}")
    public ResponseTemplateVO getMovieWithDirectorById(@PathVariable("id") Long id){
        return movieService.getMovieWithDirectorById(id);
    }

    @PostMapping("/saveMovie")
    public Movie saveMovie(@RequestBody Movie movie){
        return movieService.saveMovie(movie);
    }
}
