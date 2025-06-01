package com.example.proyect.web_sites.entities;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "deuda")
@Getter @Setter
@ToString
@EqualsAndHashCode
public class Deuda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long usuario_id;
    private String monto;
    private String descripcion;
    @Column(name = "fecha_fin")
    private String fechaFin;
    private Boolean pagado;

}
