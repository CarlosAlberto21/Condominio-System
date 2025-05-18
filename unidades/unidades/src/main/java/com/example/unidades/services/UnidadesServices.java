package com.example.unidades.services;

import com.example.unidades.entities.Unidades;
import com.example.unidades.repository.RepositoryU;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UnidadesServices implements IUnidadesServices {
    @Autowired
    private RepositoryU repository;

    @Override
    public List<Unidades> getAll() {
        return (List<Unidades>) repository.findAll();

    }

    @Override
    public Unidades getById(Long id) {
        return (Unidades) repository.findById(id).get();
    }

    public void remove(Long id){
        repository.deleteById(id);
    }

    public void save(Unidades customer){
        repository.save(customer);
    }
}
