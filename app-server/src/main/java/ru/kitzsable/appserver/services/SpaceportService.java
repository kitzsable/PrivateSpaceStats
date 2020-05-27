package ru.kitzsable.appserver.services;

import ru.kitzsable.appserver.transfer.ShortSpaceportDTO;

import java.util.List;

public interface SpaceportService {
    List<ShortSpaceportDTO> getSpaceportShortStats();
}
