package com.se.movie;

import com.se.movie.VO.ResponseTemplateVO;
import com.se.movie.service.MovieService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MovieApplicationTests {
	@Autowired
	private MovieService movieService;

	@Test
	void contextLoads() {
		for (int i=0; i<10; i++) {
			System.out.println(movieService.getMovieWithDirectorById(Long.parseLong("1")));
		}

	}

}
