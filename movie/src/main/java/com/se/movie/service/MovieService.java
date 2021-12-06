package com.se.movie.service;

import com.se.movie.VO.Director;
import com.se.movie.VO.ResponseTemplateVO;
import com.se.movie.model.Attendance;
import com.se.movie.model.Movie;
import com.se.movie.model.SearchRequest;
import com.se.movie.repository.MovieRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import io.github.resilience4j.retry.annotation.Retry;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private RestTemplate restTemplate;

    @Cacheable(value = "Movie", key = "#id")
    public Movie getMovieById(Long id){
        Optional<Movie> obj = movieRepository.findById(id);
        if(obj.isPresent()){
            return obj.get();
        }
        return null;
    }
    @Retry(name="basic")
    @Cacheable(value = "MovieApplication", key = "movieId")
    public ResponseTemplateVO getMovieWithDirectorById(Long movieId) {
        ResponseTemplateVO vo = new ResponseTemplateVO();
        Movie movie = getMovieById(movieId);

        System.out.println(movie);

        Director director = restTemplate.getForObject("http://localhost:9001/directors/" + movie.getDirectorId(),Director.class);

        vo.setMovie(movie);
        vo.setDirector(director);

        return  vo;
    }
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss SSS");

    public List<Movie> searchFlights(SearchRequest request) {
        System.out.println("Searching for flights; "
                + "current time = " + LocalDateTime.now().format(formatter) +
                "; current thread = " + Thread.currentThread().getName());

        List<Movie> flights = Arrays.asList(
//                new Flight("XY 765", request.getFlightDate(), request.getFrom(), request.getTo()),
//                new Flight("XY 746", request.getFlightDate(), request.getFrom(), request.getTo())
        );
        System.out.println("Flight search successful");
        return flights;
    }

    public List<Movie> searchFlightsThrowingException(SearchRequest request) throws Exception {
        System.out.println("Searching for flights; "
                + "current time = " + LocalDateTime.now().format(formatter) +
                "; current thread = " + Thread.currentThread().getName());

        throw new Exception("Exception when searching for flights");
    }
}
