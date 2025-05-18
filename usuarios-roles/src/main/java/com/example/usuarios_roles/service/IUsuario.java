package com.example.usuarios_roles.service;

import com.example.usuarios_roles.entity.Rol;
import com.example.usuarios_roles.entity.Usuario;


import java.util.List;

public interface IUsuario {


    List<Usuario> getAll();

    Usuario getById(Long id);

    Usuario getByUsername(String username);

    List<String> getNombreRolesByLogin(String username, String password);

    void remove(Long id);
    void save(Usuario usuario);
}
