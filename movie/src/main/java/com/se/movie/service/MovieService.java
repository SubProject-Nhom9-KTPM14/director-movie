package com.se.movie.service;

import com.se.movie.VO.Director;
import com.se.movie.VO.ResponseTemplateVO;
import com.se.movie.model.Movie;
import com.se.movie.repository.MovieRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
@Slf4j
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private RestTemplate restTemplate;

//    @Cacheable(value = "Movie", key = "#id")
    public Movie getMovieById(Long id){
        Optional<Movie> obj = movieRepository.findById(id);
        if(obj.isPresent()){
            return obj.get();
        }
        return null;
    }

//    @Cacheable(value = "MovieApplication", key = "movieId")
    public ResponseTemplateVO getMovieWithDirectorById(Long movieId) {
        ResponseTemplateVO vo = new ResponseTemplateVO();
        Movie movie = getMovieById(movieId);

        System.out.println(movie);

        Director director = restTemplate.getForObject("http://localhost:9001/directors/" + movie.getDirectorId(),Director.class);

        vo.setMovie(movie);
        vo.setDirector(director);

        return  vo;
    }
}
