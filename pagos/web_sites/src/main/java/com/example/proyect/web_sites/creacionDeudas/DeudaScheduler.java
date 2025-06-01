    package com.example.proyect.web_sites.creacionDeudas;

    import com.example.proyect.web_sites.entities.Deuda;
    import com.example.proyect.web_sites.repository.DeudaRepository;
    import lombok.RequiredArgsConstructor;
    import org.springframework.http.ResponseEntity;
    import org.springframework.scheduling.annotation.Scheduled;
    import org.springframework.stereotype.Component;
    import org.springframework.web.client.RestTemplate;

    import java.math.BigDecimal;
    import java.time.LocalDate;
    import java.time.LocalDateTime;

    @Component
    @RequiredArgsConstructor
    public class DeudaScheduler {

        private final RestTemplate restTemplate;
        private final DeudaRepository deudaRepository;

        @Scheduled(cron = "0 0 0/1 * * ?")
        public void generarDeudasMensuales() {
            try {
                String url = "http://localhost:8080/api/usuario"; // Vía API Gateway

                ResponseEntity<Usuario[]> response = restTemplate.getForEntity(url, Usuario[].class);
                Usuario[] usuarios = response.getBody();

                if (usuarios != null) {
                    for (Usuario usuario : usuarios) {
                        Deuda deuda = new Deuda();
                        deuda.setUsuario(usuario.getId());
                        deuda.setDescripcion("Condominio");
                        deuda.setMonto(2000L);
                        deuda.setPagado(false);
                        deuda.setFechaInicio(LocalDate.now());
                        deuda.setFechaFin(LocalDate.now().plusMonths(1).withDayOfMonth(1));

                        deudaRepository.save(deuda);
                    }
                    System.out.println("✅ Deudas generadas correctamente");
                }

            } catch (Exception e) {
                System.out.println("❌ Error al generar deudas: " + e.getMessage());
            }
        }
    }
