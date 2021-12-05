package com.se.director.service;

import com.se.director.model.Director;
import com.se.director.repository.DirectorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class DirectorService {
    @Autowired
    private DirectorRepository directorRepository;


    @Cacheable(value = "Director", key = "#id")
    public Director getDirectorById(Long id){
        Optional<Director> obj = directorRepository.findById(id);
        if(obj.isPresent()){
            return obj.get();
        }
        return null;
    }

    @Cacheable(value = "Director")
    public List<Director>getAllDirector(){
        return directorRepository.findAll();
    }

    @CachePut(value = "Director", key = "#id")
    public Director updateDirector(Director director, Long id){
        Director dir = directorRepository.findById(id).get();
        dir.setFirstName(director.getFirstName());
        dir.setLastName(director.getLastName());
        dir.setAge(director.getAge());
        dir.setAddress(director.getAddress());
        dir.setGender(director.isGender());
        dir.setUsername(director.getUsername());
        dir.setPassword(director.getPassword());
        return directorRepository.save(dir);
    }

    @CacheEvict(value = "Director", key = "#id")
    public void deleteDirector(Long id){
        directorRepository.deleteById(id);
    }
}
