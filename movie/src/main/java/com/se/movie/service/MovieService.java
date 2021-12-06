package com.se.movie.service;

import com.se.movie.VO.Director;
import com.se.movie.VO.ResponseTemplateVO;
import com.se.movie.model.Movie;
import com.se.movie.repository.MovieRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
@Slf4j
public class MovieService {
    final Logger logger = LoggerFactory.getLogger(MovieService.class);

    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private RestTemplate restTemplate;

    private HashOperations hashOperations;
    private RedisTemplate redisTemplate;

    public MovieService(RedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
        this.hashOperations = redisTemplate.opsForHash();
    }

    public Movie saveMovie (Movie mov){
        Movie movie = movieRepository.saveAndFlush(mov);
        hashOperations.put("MOVIE", movie.getId(), movie);
        logger.info(String.format("MOVIE with ID %s saved", movie.getId()));
        return movie;
    }

    public Movie getMovieById(Long id){
//        Optional<Movie> obj = movieRepository.findById(id);
//        if(obj.isPresent()){
//            return obj.get();
//        }
//        return null;
        return (Movie) hashOperations.get("MOVIE", id);
    }

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
