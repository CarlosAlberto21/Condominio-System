package com.example.proyect.web_sites.services;


import com.example.proyect.web_sites.entities.Deuda;

import java.util.List;

public interface IDeudaServices {
     List<Deuda> getAll();
    Deuda getById(Long id);
    List<Deuda> obtenerDatosDeudaPorUsuarioId(Long usuarioId);
    void remove(Long id);
    void save(Deuda deuda);
}
