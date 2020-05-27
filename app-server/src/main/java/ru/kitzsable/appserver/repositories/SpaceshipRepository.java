package ru.kitzsable.appserver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kitzsable.appserver.models.Spaceship;

@Repository
public interface SpaceshipRepository extends JpaRepository<Spaceship, Integer> {
}
