package com.example.usuarios_roles.repository;

import com.example.usuarios_roles.entity.Rol;
import com.example.usuarios_roles.entity.Usuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepositorio extends CrudRepository<Usuario, Long> {
    Optional<Usuario> findByUsername(String username);


    @Query("SELECT r.nombre FROM Usuario u JOIN u.roles r WHERE u.username = :username AND u.password = :password")
    List<String> findNombreRolesByUsernameAndPassword(@Param("username") String username, @Param("password") String password);


}
