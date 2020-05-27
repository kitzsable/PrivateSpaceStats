package ru.kitzsable.appserver.transfer;

import lombok.NoArgsConstructor;

/**
 * 27.05.2020
 * ShortSpaceportDTO
 * Класс DTO с информацией о космодроме
 *
 * @author Aleks Kitzkalov
 * @version v1.0
 */
@NoArgsConstructor
public class ShortSpaceportDTO {
    public String name;
    public String location;
    public long allLaunch;
    public long launchByLastYear;
}
