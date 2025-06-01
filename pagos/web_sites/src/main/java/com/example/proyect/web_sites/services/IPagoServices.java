package com.example.proyect.web_sites.services;

import com.example.proyect.web_sites.entities.Pago;

import java.util.List;

public interface PagoServices {

    List<Pago> getAll();

    void save(Pago pago);
}
