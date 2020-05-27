package ru.kitzsable.appserver.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * 17.05.2020
 * CarrierRocket
 *
 * @author Aleks Kitzkalov
 * @version v1.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "carrier_rocket")
public class CarrierRocket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String imagePath;
    @Column
    private Integer boosterCount;
    @Column
    private Integer stageCount;
    @Column
    private Integer carrying;
    @Column
    private Double cost;
}
