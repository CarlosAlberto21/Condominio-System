package com.example.unidades.entities;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "apartamentos")
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Unidades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String propietario;
    private int numero;
    private int piso;
    private int torre;
    private String estado;
}
