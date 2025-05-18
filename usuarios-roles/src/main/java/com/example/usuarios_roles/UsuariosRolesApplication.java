package com.example.usuarios_roles;

import com.example.usuarios_roles.entity.Usuario;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UsuariosRolesApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsuariosRolesApplication.class, args);

		Usuario bd = new Usuario();
		bd.getEmail();

	}

}
