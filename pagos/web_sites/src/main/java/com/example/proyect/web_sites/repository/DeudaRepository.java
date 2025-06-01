package com.example.proyect.web_sites.repository;

import com.example.proyect.web_sites.entities.Deuda;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeudaRepository extends CrudRepository<Deuda, Long> {
    @Query("SELECT d.monto, d.descripcion, d.fechaFin, d.pagado FROM Deuda d WHERE d.usuario_id = :usuarioId")
    List<Object[]> findDatosDeudaByUsuarioId(Long usuarioId);
}
