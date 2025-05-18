package com.example.usuarios_roles.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "roles") // nombre exacto de la tabla en la BD
@Getter
@Setter
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    @ManyToMany(mappedBy = "roles")
    private List<Usuario> usuarios;



}

