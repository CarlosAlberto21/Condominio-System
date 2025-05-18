package com.example.unidades.react;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration



public class React implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Configuración de CORS para todas las rutas que comienzan con "/api/"
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:5173/")  // Permitir solicitudes desde React (puerto 3000)
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Métodos permitidos
                .allowCredentials(true);  // Permitir credenciales (cookies, cabeceras de autenticación)
    }
}
