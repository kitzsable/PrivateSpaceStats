package ru.kitzsable.appserver.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("privateSpaceStats/spaceport/{spaceport-id}")
public class SpaceportController {

    @GetMapping("info")
    public void getSpaceportInfo(@PathVariable("spaceport-id") String spaceportName) {

    }
}
