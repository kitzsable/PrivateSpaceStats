package ru.kitzsable.appserver.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("privateSpaceStats/spaceship/{spaceship-id}")
public class SpaceshipController {

    @GetMapping("info")
    public void getSpaceshipInfo(@PathVariable("spaceship-id") String spaceshipName) {

    }
}
