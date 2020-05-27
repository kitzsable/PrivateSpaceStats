package ru.kitzsable.appserver.transfer;

import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 27.05.2020
 * ShortLaunchDTO
 * Класс DTO с информацией о космодроме
 *
 * @author Aleks Kitzkalov
 * @version v1.0
 */
@NoArgsConstructor
public class ShortLaunchDTO {
    public int id;
    public LocalDateTime date;
    public String rocketName;
    public String spaceportName;
}
