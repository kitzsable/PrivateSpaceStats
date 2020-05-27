package ru.kitzsable.appserver.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("privateSpaceStats/cosmonaut/{cosmonaut-id}")
public class CosmonautController {

    @GetMapping("info")
    public void getCosmonautInfo(@PathVariable("cosmonaut-id") String cosmonautId) {

    }
}
