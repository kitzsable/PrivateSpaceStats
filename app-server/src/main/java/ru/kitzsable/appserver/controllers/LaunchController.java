package ru.kitzsable.appserver.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("privateSpaceStats/launch/{launch-id}")
public class LaunchController {

    @GetMapping("info")
    public void getLaunchInfo(@PathVariable("launch-id") String launchId) {

    }
}
