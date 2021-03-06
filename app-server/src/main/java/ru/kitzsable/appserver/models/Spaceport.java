package ru.kitzsable.appserver.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * 17.05.2020
 * Spaceport
 *
 * @author Aleks Kitzkalov
 * @version v1.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Spaceport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String name;
    @Column
    private String location;
    @Column
    private String description;
    @Column
    private String imagePath;
}
