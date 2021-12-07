package com.se.director.controller;

import com.se.director.model.Director;
import com.se.director.service.DirectorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/directors")
@CrossOrigin
@Slf4j
@CrossOrigin
public class DirectorController {
    @Autowired
    private DirectorService directorService;

    @RequestMapping("/")
    public String Welcome(){
        return "hello";
    }

    @GetMapping("/{id}")
    public Director getDirectorById(@PathVariable("id")Long id){
        return directorService.getDirectorById(id);
    }

    @GetMapping("/allDirector")
    public ResponseEntity<List<Director>> getAllDirector(){
        return ResponseEntity.ok(directorService.getAllDirectors());
    }

    @PostMapping("/saveDirector")
    public Director saveDirector(@RequestBody Director director){
        return directorService.createDirector(director);
    }

    @PutMapping("/modify/{id}")
    public Director updateDirector(@RequestBody Director director, @PathVariable Long id){
        return directorService.updateDirector(director, id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteDirector (@PathVariable Long id){
        directorService.deleteDirector(id);
        return "Director with id: " + id + " Delete!";
    }
}
