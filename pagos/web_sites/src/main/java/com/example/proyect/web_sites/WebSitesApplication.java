package com.example.proyect.web_sites;

import com.example.proyect.web_sites.entities.Customer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebSitesApplication {

	public static void main(String[] args) {

		Customer asd = new Customer();

		asd.getComentario();


		SpringApplication.run(WebSitesApplication.class, args);
	}

}
