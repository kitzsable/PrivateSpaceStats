package ru.kitzsable.appserver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kitzsable.appserver.models.CarrierRocket;

@Repository
public interface CarrierRocketRepository extends JpaRepository<CarrierRocket, Integer> {
}
