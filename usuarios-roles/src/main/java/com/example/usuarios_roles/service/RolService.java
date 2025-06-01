package com.example.usuarios_roles.service;

import com.example.usuarios_roles.entity.Rol;
import com.example.usuarios_roles.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolService {
    @Autowired
    private RolRepository rolRepository;

    public Rol getByNombre(String nombre) {
        return rolRepository.findByNombre(nombre).orElse(null);
    }

    public Rol save(Rol rol) {
        return rolRepository.save(rol);
    }
}
