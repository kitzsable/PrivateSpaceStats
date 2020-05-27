package ru.kitzsable.appserver.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * 17.05.2020
 * LaunchedCosmonaut
 *
 * @author Aleks Kitzkalov
 * @version v1.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "launched_cosmonaut")
public class LaunchedCosmonaut {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "cosmonaut_id")
    private Cosmonaut cosmonaut;
    @ManyToOne
    @JoinColumn(name = "launched_spaceship_id")
    private LaunchedSpaceship spaceship;
    @Column
    private Boolean delivered;
    @Column
    private Boolean returned;
}
