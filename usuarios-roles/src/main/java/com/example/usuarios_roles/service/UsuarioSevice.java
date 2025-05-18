package com.example.usuarios_roles.service;

import com.example.usuarios_roles.entity.Rol;
import com.example.usuarios_roles.entity.Usuario;
import com.example.usuarios_roles.repository.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioSevice implements IUsuario  {
    @Autowired
    private UsuarioRepositorio repositorio;

    @Override
    public List<Usuario> getAll(){return(List<Usuario>) repositorio.findAll();}

    @Override
    public Usuario getById(Long id){return (Usuario) repositorio.findById(id).get();}

    @Override
    public Usuario getByUsername(String username) {
        return repositorio.findByUsername(username).orElse(null);
    }

    public void remove(Long id){repositorio.deleteById(id);}
    public void save(Usuario usuario){repositorio.save(usuario);}

    public List<String> getNombreRolesByLogin(String username, String password) {
        return repositorio.findNombreRolesByUsernameAndPassword(username, password);
    }

}
