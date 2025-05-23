package com.tecnm.ApiRest_Eventos.controllers;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecnm.ApiRest_Eventos.entities.Evento;
import com.tecnm.ApiRest_Eventos.services.EventoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/eventos")
public class EventController {

    @Autowired
    private EventoService eventoService;

    @GetMapping
    public ResponseEntity<List<Evento>> getAllEventos() {
        return ResponseEntity.ok(eventoService.findAll());
    }

    @GetMapping("/{idEvento}")
    public ResponseEntity<Evento> getEvento(@PathVariable("idEvento") UUID idEvento) {
        Optional<Evento> evento = eventoService.findAll()
                .stream()
                .filter(e -> e.getUuid().equals(idEvento))
                .findFirst();
        return evento.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/salon/{salon}")
    public ResponseEntity<List<Evento>> getEventosBySalon(@PathVariable("salon") int salon) {
        return ResponseEntity.ok(eventoService.findBySalon(salon));
    }

    @GetMapping("/fecha/{fecha}")
    public ResponseEntity<List<Evento>> getEventosByFecha(@PathVariable("fecha") Date fecha) {
        return ResponseEntity.ok(eventoService.findByFecha(fecha));
    }

    @GetMapping("/estado/{estado}")
    public ResponseEntity<List<Evento>> getEventosByEstado(@PathVariable("estado") String estado) {
        return ResponseEntity.ok(eventoService.findByEstado(estado));
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> createEvento(@RequestBody Evento evento) {
        Map<String, String> response = new HashMap<>();
        try {
            eventoService.createEvento(evento);
            response.put("status", "success");
            response.put("message", "Evento recibido e insertado correctamente.");
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Hubo un problema al procesar el evento: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/{idEvento}")
    public ResponseEntity<Evento> putEvento(@PathVariable("idEvento") UUID id, @RequestBody Evento evento) {
        Optional<Evento> updatedEvento = eventoService.updateEvento(id, evento);
        return updatedEvento.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{idEvento}")
    public ResponseEntity<Void> deleteEvento(@PathVariable("idEvento") UUID id) {
        eventoService.deleteEvento(id);
        return ResponseEntity.ok().build();
    }
}