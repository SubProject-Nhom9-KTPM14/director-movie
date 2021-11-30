package com.se.movie.VO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Director {
    private Long id;
    private String firstName;
    private String lastName;
    private int age;
    private String address;
    private boolean gender;
}
