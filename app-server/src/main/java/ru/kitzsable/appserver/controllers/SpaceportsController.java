package ru.kitzsable.appserver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kitzsable.appserver.services.SpaceportService;
import ru.kitzsable.appserver.transfer.ShortSpaceportDTO;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("privateSpaceStats/stats/spaceports")
public class SpaceportsController {

    private final SpaceportService spaceportService;

    public SpaceportsController(SpaceportService spaceportService) {
        this.spaceportService = spaceportService;
    }

    @GetMapping("all")
    public List<ShortSpaceportDTO> getSpaceportsShortStats() {
        return spaceportService.getSpaceportShortStats();
    }
}
