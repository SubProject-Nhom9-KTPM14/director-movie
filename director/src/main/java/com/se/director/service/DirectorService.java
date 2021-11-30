package com.se.director.service;

import com.se.director.model.Director;
import com.se.director.repository.DirectorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
public class DirectorService {
    @Autowired
    private DirectorRepository directorRepository;

    public Director getDirectorById(Long id){
        Optional<Director> obj = directorRepository.findById(id);
        if(obj.isPresent()){
            return obj.get();
        }
        return null;
    }
}
