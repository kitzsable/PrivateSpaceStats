package ru.kitzsable.appserver.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * 17.05.2020
 * Spaceship
 *
 * @author Aleks Kitzkalov
 * @version v1.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Spaceship {
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
    private Integer deliveryCarrying;
    @Column
    private Integer returnCarrying;
}
