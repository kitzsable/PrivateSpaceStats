package ru.kitzsable.appserver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kitzsable.appserver.models.Launch;
import ru.kitzsable.appserver.models.LaunchedSpaceship;

@Repository
public interface LaunchedSpaceshipRepository extends JpaRepository<LaunchedSpaceship, Integer> {
    Long countByLaunch(Launch launch);
}
