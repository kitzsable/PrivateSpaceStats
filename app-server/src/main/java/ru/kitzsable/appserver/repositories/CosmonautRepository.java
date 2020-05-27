package ru.kitzsable.appserver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kitzsable.appserver.models.Cosmonaut;

@Repository
public interface CosmonautRepository extends JpaRepository<Cosmonaut, Integer> {
}
