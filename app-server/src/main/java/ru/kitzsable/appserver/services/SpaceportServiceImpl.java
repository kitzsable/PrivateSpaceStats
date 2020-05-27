package ru.kitzsable.appserver.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.kitzsable.appserver.repositories.LaunchRepository;
import ru.kitzsable.appserver.repositories.SpaceportRepository;
import ru.kitzsable.appserver.transfer.ShortSpaceportDTO;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class SpaceportServiceImpl implements SpaceportService {

    private final SpaceportRepository spaceportRepository;
    private final LaunchRepository launchRepository;

    public SpaceportServiceImpl(SpaceportRepository spaceportRepository,
                                LaunchRepository launchRepository) {
        this.spaceportRepository = spaceportRepository;
        this.launchRepository = launchRepository;
    }

    public List<ShortSpaceportDTO> getSpaceportShortStats() {
        return spaceportRepository.findAll().stream()
                .map(spaceport -> {
                    ShortSpaceportDTO dto = new ShortSpaceportDTO();
                    dto.name = spaceport.getName();
                    dto.location = spaceport.getLocation();
                    dto.allLaunch = launchRepository.countBySpaceport(spaceport);
                    dto.launchByLastYear = launchRepository.findAllBySpaceport(spaceport)
                            .stream()
                            .filter(launch ->
                                    launch.getDate().getYear() == LocalDate.now().getYear())
                            .count();
                    return dto;
                }).collect(Collectors.toList());
    }
}
