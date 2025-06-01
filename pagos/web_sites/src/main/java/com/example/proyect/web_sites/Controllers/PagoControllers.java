package com.example.proyect.web_sites.Controllers;

import com.example.proyect.web_sites.entities.Deuda;
import com.example.proyect.web_sites.services.IDeudaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class PagoControllers {

    @Autowired
    private IDeudaServices service;

    @GetMapping("/api/customers")
    public List<Deuda> getAll() {
            return service.getAll();
    }

    @GetMapping("/api/customers/deuda")
    public List<Deuda> getByUsuarioId(@RequestHeader("X-User-Id") String userId) {

        Long id = Long.parseLong(userId);
        return service.obtenerDatosDeudaPorUsuarioId(id);
    }


    @DeleteMapping("/api/customers/{id}")
    public void remove(@PathVariable String id){
        service.remove(Long.parseLong(id));
    }

    @PostMapping("/api/customers")
    public void save(@RequestBody Deuda deuda){
        service.save(deuda);
    }


}
