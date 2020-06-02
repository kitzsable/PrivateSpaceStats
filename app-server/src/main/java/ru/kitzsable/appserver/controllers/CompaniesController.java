package ru.kitzsable.appserver.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kitzsable.appserver.services.LaunchService;
import ru.kitzsable.appserver.transfer.YearlyCharacteristicValuesDTO;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("privateSpaceStats/stats/companies")
public class CompaniesController {

    private final LaunchService launchService;

    public CompaniesController(LaunchService launchService) {
        this.launchService = launchService;
    }

    @GetMapping("launches")
    public List<YearlyCharacteristicValuesDTO> getLaunchesOfCompanyPerYear() {
        return launchService.getLaunchesOfCompanyPerYear();
    }

    @GetMapping("payload")
    public List<YearlyCharacteristicValuesDTO>  getLaunchedPayloadOfCompanyPerYear() {
        return launchService.getDerivedPayloadsOfCompanyPerYear();
    }

    @GetMapping("satellites")
    public List<YearlyCharacteristicValuesDTO> getLaunchedSatellitesOfCompanyPerYear() {
        return launchService.getDerivedSatellitesOfCompanyPerYear();
    }

    @GetMapping("spaceships")
    public List<YearlyCharacteristicValuesDTO> getLaunchedSpaceshipsOfCompanyPerYear() {
        return launchService.getDerivedSpaceshipsOfCompanyPerYear();
    }

    @GetMapping("people")
    public List<YearlyCharacteristicValuesDTO> getLaunchedPeopleOfCompanyPerYear() {
        return launchService.getDerivedPeoplesOfCompanyPerYear();
    }
}
