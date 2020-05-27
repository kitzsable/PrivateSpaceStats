package ru.kitzsable.appserver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kitzsable.appserver.models.Spaceport;

@Repository
public interface SpaceportRepository extends JpaRepository<Spaceport, Integer> {
}
