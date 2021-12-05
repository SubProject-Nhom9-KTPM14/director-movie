package com.se.director.repository;

import com.se.director.model.Director;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DirectorRepository extends JpaRepository<Director, Long> {
    Director findByUsername(String username);
}
