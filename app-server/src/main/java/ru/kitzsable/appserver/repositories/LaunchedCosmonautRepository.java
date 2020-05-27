package ru.kitzsable.appserver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kitzsable.appserver.models.LaunchedCosmonaut;

@Repository
public interface LaunchedCosmonautRepository extends JpaRepository<LaunchedCosmonaut, Integer> {
}
