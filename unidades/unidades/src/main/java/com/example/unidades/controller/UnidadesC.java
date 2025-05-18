package com.example.unidades.controller;

import com.example.unidades.entities.Unidades;
import com.example.unidades.services.IUnidadesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UnidadesC {
    @Autowired
    private IUnidadesServices service;

    @GetMapping("/api/apartamentos")
    public List<Unidades> getAll() {
        return service.getAll();
    }

    @GetMapping("/api/apartamentos/{id}")
    public Unidades getById(@PathVariable String id) {
        return  service.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/apartamentos/{id}")
    public void remove(@PathVariable String id){
        service.remove(Long.parseLong(id));
    }

    @PostMapping("/api/apartamentos")
    public void save(@RequestBody Unidades apartamentos){
        service.save(apartamentos);}
}
