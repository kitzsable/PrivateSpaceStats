package ru.kitzsable.appserver.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("privateSpaceStats/rocket/{rocket-id}")
public class CarrierRocketController {

    @GetMapping("info")
    public void getRocketInfo(@PathVariable("rocket-id") String rocketName) {

    }
}
