package com.tecnm.ApiRest_Eventos.controllers;

import java.sql.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tecnm.ApiRest_Eventos.entities.Evento;
import com.tecnm.ApiRest_Eventos.services.EventoService;

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

    @GetMapping("/cliente/{uuid}")
    public ResponseEntity<Evento> getEventosByCliente(@PathVariable("uuid") UUID uuid) {
        return ResponseEntity.ok(eventoService.findByClienteUuid(uuid));
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
    public ResponseEntity<Evento> postEvento(@RequestBody Evento evento) {
        Evento nuevoEvento = eventoService.createEvento(evento);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoEvento);
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