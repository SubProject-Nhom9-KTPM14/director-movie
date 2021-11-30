package com.se.director.controller;

import com.se.director.model.Director;
import com.se.director.service.DirectorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/directors")
@Slf4j
public class DirectorController {
    @Autowired
    private DirectorService directorService;

    @GetMapping("/{id}")
    public Director getDirectorById(@PathVariable("id")Long id){
        return directorService.getDirectorById(id);
    }


}
