package ru.kitzsable.appserver.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kitzsable.appserver.services.LaunchService;

import java.time.LocalDateTime;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("privateSpaceStats/stats/launches")
public class LaunchesController {

    private final LaunchService launchService;

    public LaunchesController(LaunchService launchService) {
        this.launchService = launchService;
    }

    @GetMapping("upcoming")
    public void getUpcomingLaunches() {

    }

    @GetMapping("nextDate")
    public LocalDateTime getDateOfNextLaunch() {
        return launchService.getDateOfNextLaunch();
    }
}
