package com.se.director.service;

import com.se.director.authen.UserPrincipal;
import com.se.director.model.Director;
import com.se.director.repository.DirectorRepository;
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;
import io.github.resilience4j.retry.annotation.Retry;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Slf4j
public class DirectorService {
    final Logger logger = LoggerFactory.getLogger(DirectorService.class);

    @Autowired
    private DirectorRepository directorRepository;

    private HashOperations hashOperations;
    private RedisTemplate redisTemplate;

    public DirectorService(RedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
        this.hashOperations = redisTemplate.opsForHash();
    }
    @Retry(name="basic")
    @RateLimiter(name="basicExample")
    public Director getDirectorById(Long id){
        Director director = (Director) hashOperations.get("DIRECTOR", id);
        if(director != null){
            return director;
        }
        director = directorRepository.findById(id).get();
        if(director != null){
            hashOperations.put("DIRECTOR", director.getId(), director);
            logger.info(String.format("DIRECTOR with ID %s saved", director.getId()));
            return director;
        }
        return null;
    }
    @Retry(name="basic")
    @RateLimiter(name="basicExample")
    public List<Director> getAllDirectors(){
//            return directorRepository.findAll();
        return hashOperations.values("DIRECTOR");
    }
    @Retry(name="basic")
    @RateLimiter(name="basicExample")
    public Director updateDirector(Director director, Long id){
        Director dir = directorRepository.findById(id).get();
        dir.setFirstName(director.getFirstName());
        dir.setLastName(director.getLastName());
        dir.setAge(director.getAge());
        dir.setAddress(director.getAddress());
        dir.setGender(director.isGender());
        dir.setUsername(director.getUsername());
        dir.setPassword(director.getPassword());
        hashOperations.put("DIRECTOR", dir.getId(), dir);
        logger.info(String.format("User with ID %s updated", id));
        return directorRepository.save(dir);
    }
    @Retry(name="basic")
    @RateLimiter(name="basicExample")
    public void deleteDirector(Long id){
        hashOperations.delete("DIRECTOR", id);
        directorRepository.deleteById(id);
        logger.info(String.format("User with ID %s deleted", id));
    }
    @Retry(name="basic")
    @RateLimiter(name="basicExample")
    public Director createDirector(Director user) {
        Director director = directorRepository.saveAndFlush(user);
        hashOperations.put("DIRECTOR", director.getId(), director);
        logger.info(String.format("DIRECTOR with ID %s saved", user.getId()));
        return director;
    }
    @Retry(name="basic")
    @RateLimiter(name="basicExample")
    public UserPrincipal findByUsername(String username) {
        Director user = directorRepository.findByUsername(username);
        UserPrincipal userPrincipal = new UserPrincipal();
        if (null != user) {
            Set<String> authorities = new HashSet<>();
            authorities.add("USER");
            userPrincipal.setUserId(user.getId());
            userPrincipal.setUsername(user.getUsername());
            userPrincipal.setPassword(user.getPassword());
            userPrincipal.setAuthorities(authorities);
        }
        return userPrincipal;
    }
    @Retry(name="basic")
    @RateLimiter(name="basicExample")
    public Director get(Long id){
        return directorRepository.findById(id).get();
    }
}
