package com.example.unidades.repository;

import com.example.unidades.entities.Unidades;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryU extends CrudRepository<Unidades, Long> {
}
