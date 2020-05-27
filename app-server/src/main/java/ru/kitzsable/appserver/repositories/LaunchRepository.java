package ru.kitzsable.appserver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kitzsable.appserver.models.CarrierRocket;
import ru.kitzsable.appserver.models.Company;
import ru.kitzsable.appserver.models.Launch;
import ru.kitzsable.appserver.models.Spaceport;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Repository
public interface LaunchRepository extends JpaRepository<Launch, Integer> {
    List<Launch> findAllByCarrierRocket_Company(Company company);
    List<Launch> findAllByCarrierRocket(CarrierRocket carrierRocket);
    Long countByCarrierRocket_Company(Company company);
    Long countByCarrierRocket(CarrierRocket carrierRocket);
    Long countBySpaceport(Spaceport spaceport);
    List<Launch> findAllBySpaceport(Spaceport spaceport);
    List<Launch> findAllByDateAfter(LocalDateTime date);
}
