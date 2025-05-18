package com.example.usuarios_roles.contollers;

import com.example.usuarios_roles.dto.LoginRequest;
import com.example.usuarios_roles.entity.Rol;
import com.example.usuarios_roles.entity.Usuario;
import com.example.usuarios_roles.service.IUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioC {

    @Autowired
    private IUsuario service;

    @GetMapping("/api/usuario")
    public List<Usuario> getAll(){return service.getAll();}

    @GetMapping("/api/usuario/{username}")
    public Usuario getByUsername(@PathVariable String username) {
        return service.getByUsername(username);
    }

    @DeleteMapping("/api/usuario/delete")
    public void remove(@PathVariable String id){service.remove(Long.parseLong(id));}

    @PostMapping("/api/usuario")
    public void save(@RequestBody Usuario usuario){service.save(usuario);}


    @PostMapping("/api/usuario/rol")
    public ResponseEntity<List<String>> obtenerNombreRoles(@RequestBody LoginRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();

        List<String> nombres = service.getNombreRolesByLogin(username, password);

        if (nombres == null || nombres.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(nombres);
    }




}
