package ru.kitzsable.appserver.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * 17.05.2020
 * LaunchedSpaceship
 *
 * @author Aleks Kitzkalov
 * @version v1.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "launched_spaceship")
public class LaunchedSpaceship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "spaceship_id")
    private Spaceship spaceship;
    @ManyToOne
    @JoinColumn(name = "launch_id")
    private Launch launch;
    @Column
    private Integer deliveredCargo;
    @Column
    private Integer returnedCargo;
}
