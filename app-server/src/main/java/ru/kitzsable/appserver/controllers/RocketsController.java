package ru.kitzsable.appserver.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kitzsable.appserver.services.LaunchService;
import ru.kitzsable.appserver.transfer.YearlyCharacteristicValuesDTO;

import java.util.List;

@RestController
@RequestMapping("privateSpaceStats/stats/rockets")
public class RocketsController {

    private final LaunchService launchService;

    public RocketsController(LaunchService launchService) {
        this.launchService = launchService;
    }

    @GetMapping("launches")
    public List<YearlyCharacteristicValuesDTO> getLaunchesOfRocketPerYear() {
        return launchService.getLaunchesOfRocketPerYear();
    }

    @GetMapping("payload")
    public List<YearlyCharacteristicValuesDTO> getPayloadOnRocketPerYear() {
        return launchService.getDerivedPayloadsOfRocketPerYear();
    }

    @GetMapping("satellites")
    public List<YearlyCharacteristicValuesDTO> getSatellitesOnRocketPerYear() {
        return launchService.getDerivedSatellitesOfRocketPerYear();
    }

    @GetMapping("spaceships")
    public List<YearlyCharacteristicValuesDTO> getSpaceshipsOnRocketPerYear() {
        return launchService.getDerivedSpaceshipsOfRocketPerYear();
    }

    @GetMapping("people")
    public List<YearlyCharacteristicValuesDTO> getPeopleOnRocketPerYear() {
        return launchService.getDerivedPeoplesOfRocketPerYear();
    }
}
