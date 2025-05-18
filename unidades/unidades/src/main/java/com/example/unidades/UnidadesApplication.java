package com.example.unidades;

import com.example.unidades.entities.Unidades;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UnidadesApplication {

	public static void main(String[] args) {

		Unidades asd = new Unidades();

		asd.getEstado();

		SpringApplication.run(UnidadesApplication.class, args);
	}

}
