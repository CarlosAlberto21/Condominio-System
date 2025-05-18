package com.example.unidades.services;

import com.example.unidades.entities.Unidades;

import java.util.List;

public interface IUnidadesServices {
    List<Unidades> getAll();

    Unidades getById(Long id);
    void remove(Long id);
    void save(Unidades apartamentos);
}
