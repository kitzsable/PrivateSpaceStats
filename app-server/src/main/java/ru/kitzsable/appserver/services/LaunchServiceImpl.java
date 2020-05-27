package ru.kitzsable.appserver.services;

import org.springframework.stereotype.Service;
import ru.kitzsable.appserver.models.*;
import ru.kitzsable.appserver.repositories.CarrierRocketRepository;
import ru.kitzsable.appserver.repositories.CompanyRepository;
import ru.kitzsable.appserver.repositories.LaunchRepository;
import ru.kitzsable.appserver.repositories.LaunchedSpaceshipRepository;
import ru.kitzsable.appserver.transfer.YearlyCharacteristicValuesDTO;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
@Transactional
public class LaunchServiceImpl implements LaunchService{

    private final CompanyRepository companyRepository;
    private final LaunchRepository launchRepository;
    private final LaunchedSpaceshipRepository launchedSpaceshipRepository;
    private final CarrierRocketRepository carrierRocketRepository;

    public LaunchServiceImpl(CompanyRepository companyRepository, LaunchRepository launchRepository,
                             LaunchedSpaceshipRepository launchedSpaceshipRepository, CarrierRocketRepository carrierRocketRepository) {
        this.companyRepository = companyRepository;
        this.launchRepository = launchRepository;
        this.launchedSpaceshipRepository = launchedSpaceshipRepository;
        this.carrierRocketRepository = carrierRocketRepository;
    }

    public LocalDateTime getDateOfNextLaunch() {
        return launchRepository.findAllByDateAfter(LocalDateTime.now())
                .stream()
                .min(Comparator.comparing(Launch::getDate))
                .orElseThrow(() -> new RuntimeException("Нет будущих дат"))
                .getDate();
    }

    /**
     *
     * @return
     */
    public List<YearlyCharacteristicValuesDTO> getLaunchesOfRocketPerYear() {
        return getStatsByRocketsPerYear(Collectors.counting());
    }

    /**
     *
     * @return
     */
    public List<YearlyCharacteristicValuesDTO> getDerivedPayloadsOfRocketPerYear() {
        return getStatsByRocketsPerYear(Collectors
                .summingLong(Launch::getPayloadMass));
    }

    /**
     *
     * @return
     */
    public List<YearlyCharacteristicValuesDTO> getDerivedSatellitesOfRocketPerYear() {
        return getStatsByRocketsPerYear(Collectors
                .summingLong(Launch::getSatelliteCount));
    }

    /**
     *
     * @return
     */
    public List<YearlyCharacteristicValuesDTO> getDerivedPeoplesOfRocketPerYear() {
        return getStatsByRocketsPerYear(Collectors
                .summingLong(Launch::getPeopleCount));
    }

    /**
     *
     * @return
     */
    public List<YearlyCharacteristicValuesDTO> getDerivedSpaceshipsOfRocketPerYear() {
        return getStatsByRocketsPerYear(Collectors
                .summingLong(launchedSpaceshipRepository::countByLaunch));
    }

    /**
     *
     * @return
     */
    public List<YearlyCharacteristicValuesDTO> getLaunchesOfCompanyPerYear() {
        return getStatsByCompaniesPerYear(Collectors.counting());
    }

    /**
     *
     * @return
     */
    public List<YearlyCharacteristicValuesDTO> getDerivedPayloadsOfCompanyPerYear() {
        return getStatsByCompaniesPerYear(Collectors
                .summingLong(Launch::getPayloadMass));
    }

    /**
     *
     * @return
     */
    public List<YearlyCharacteristicValuesDTO> getDerivedSatellitesOfCompanyPerYear() {
        return getStatsByCompaniesPerYear(Collectors
                .summingLong(Launch::getSatelliteCount));
    }

    /**
     *
     * @return
     */
    public List<YearlyCharacteristicValuesDTO> getDerivedPeoplesOfCompanyPerYear() {
        return getStatsByCompaniesPerYear(Collectors
                .summingLong(Launch::getPeopleCount));
    }

    /**
     *
     * @return
     */
    public List<YearlyCharacteristicValuesDTO> getDerivedSpaceshipsOfCompanyPerYear() {
        return getStatsByCompaniesPerYear(Collectors
                .summingLong(launchedSpaceshipRepository::countByLaunch));
    }

    /**
     *
     * @param collector
     * @return
     */
    private List<YearlyCharacteristicValuesDTO>
    getStatsByCompaniesPerYear(Collector<Launch, ?, Long> collector) {

        return companyRepository.findAll().stream()
                .filter(company -> launchRepository.countByCarrierRocket_Company(company) != 0)
                .map(company ->
                        new YearlyCharacteristicValuesDTO(company.getName(),
                                launchRepository.findAllByCarrierRocket_Company(company)
                                        .stream()
                                        .collect(Collectors.groupingBy(launch ->
                                                        launch.getDate().getYear(),
                                                collector))))
                .collect(Collectors.toList());
    }

    /**
     *
     * @param collector
     * @return
     */
    private List<YearlyCharacteristicValuesDTO>
    getStatsByRocketsPerYear(Collector<Launch, ?, Long> collector) {

        return carrierRocketRepository.findAll().stream()
                .filter(carrierRocket -> launchRepository.countByCarrierRocket(carrierRocket) != 0)
                .map(carrierRocket ->
                        new YearlyCharacteristicValuesDTO(carrierRocket.getName(),
                                launchRepository.findAllByCarrierRocket(carrierRocket)
                                        .stream()
                                        .collect(Collectors.groupingBy(launch ->
                                                        launch.getDate().getYear(),
                                                collector))))
                .collect(Collectors.toList());
    }
}
