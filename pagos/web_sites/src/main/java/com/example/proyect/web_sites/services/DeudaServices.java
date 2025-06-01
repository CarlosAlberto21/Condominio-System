package com.example.proyect.web_sites.services;


    import com.example.proyect.web_sites.entities.Deuda;
    import com.example.proyect.web_sites.repository.DeudaRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Service;


    import java.util.ArrayList;
    import java.util.List;

    @Service
    public class DeudaServices implements IDeudaServices {

        @Autowired
        private DeudaRepository repository;

        @Override
        public List<Deuda> getAll() {
        return (List<Deuda>) repository.findAll();
        }

        public List<Deuda> obtenerDatosDeudaPorUsuarioId(Long usuarioId){
                List<Object[]> resultados = repository.findDatosDeudaByUsuarioId(usuarioId);

            List<Deuda> deudas = new ArrayList<>();
            for (Object[] fila : resultados) {
                Deuda d = new Deuda();
                d.setMonto((String) fila[0]);
                d.setDescripcion((String) fila[1]);
                d.setFechaFin((String) fila[2]);
                d.setPagado((Boolean) fila[3]);
                deudas.add(d);
            }
            return deudas;
        };

        @Override
        public Deuda getById(Long id) {
            return (Deuda) repository.findById(id).get();
        }

        public void remove(Long id){
            repository.deleteById(id);
        }

        public void save(Deuda deuda){
            repository.save(deuda);
        }
    }

