package ru.kitzsable.appserver.services;

import ru.kitzsable.appserver.transfer.YearlyCharacteristicValuesDTO;

import java.time.LocalDateTime;
import java.util.List;

public interface LaunchService {
    LocalDateTime getDateOfNextLaunch();

    List<YearlyCharacteristicValuesDTO> getLaunchesOfRocketPerYear();
    List<YearlyCharacteristicValuesDTO> getDerivedPayloadsOfRocketPerYear();
    List<YearlyCharacteristicValuesDTO> getDerivedSatellitesOfRocketPerYear();
    List<YearlyCharacteristicValuesDTO> getDerivedPeoplesOfRocketPerYear();
    List<YearlyCharacteristicValuesDTO> getDerivedSpaceshipsOfRocketPerYear();

    List<YearlyCharacteristicValuesDTO> getLaunchesOfCompanyPerYear();
    List<YearlyCharacteristicValuesDTO> getDerivedPayloadsOfCompanyPerYear();
    List<YearlyCharacteristicValuesDTO> getDerivedSatellitesOfCompanyPerYear();
    List<YearlyCharacteristicValuesDTO> getDerivedPeoplesOfCompanyPerYear();
    List<YearlyCharacteristicValuesDTO> getDerivedSpaceshipsOfCompanyPerYear();
}
