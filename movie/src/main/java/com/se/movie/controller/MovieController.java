package com.se.movie.controller;

import com.se.movie.VO.ResponseTemplateVO;
import com.se.movie.model.Movie;
import com.se.movie.service.MovieService;
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;
import io.github.resilience4j.retry.annotation.Retry;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/movies")
@Slf4j
public class MovieController {
    final Logger logger = LoggerFactory.getLogger(MovieController.class);

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

    @GetMapping("/movies-by-director/{directorid}")
    public List<Movie> getMoviesByDirectorId(@PathVariable("directorid") Long id){
        List<Movie> list = new ArrayList<Movie>();
        List<Movie> movies = movieService.getMoviesByDirectorId(id);
        if(movies != null && movies.size() > 0 ){
            list = movies;
        }

        return list;
    }


}
