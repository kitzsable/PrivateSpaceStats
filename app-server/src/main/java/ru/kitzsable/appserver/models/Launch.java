package ru.kitzsable.appserver.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * 17.05.2020
 * Launch
 *
 * @author Aleks Kitzkalov
 * @version v1.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Launch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private LocalDateTime date;
    @ManyToOne
    @JoinColumn(name = "carrier_rocket_id")
    private CarrierRocket carrierRocket;
    @ManyToOne
    @JoinColumn(name = "spaceport_id")
    private Spaceport spaceport;
    @Column
    private String description;
    @Column
    private String cargo;
    @Column
    private Integer payloadMass;
    @Column
    private Integer satelliteCount;
    @Column
    private Integer peopleCount;
    @Column
    private Integer plannedReturnBooster;
    @Column
    private Integer plannedReturnStage;
    @Column
    private Integer returnBooster;
    @Column
    private Integer returnStage;
    @Column
    private Boolean success;
}
