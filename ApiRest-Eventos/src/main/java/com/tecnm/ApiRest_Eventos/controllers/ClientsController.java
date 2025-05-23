package com.tecnm.ApiRest_Eventos.controllers;

import com.tecnm.ApiRest_Eventos.entities.Client;
import com.tecnm.ApiRest_Eventos.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/persons")
public class ClientsController {

    @Autowired
    private ClientService personService;

    @GetMapping
    public ResponseEntity<Iterable<Client>> getAllPersons() {
        return ResponseEntity.ok(personService.getAllPersons());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getPersonById(@PathVariable("id") UUID id) {
        Optional<Client> person = personService.getPersonById(id);
        return person.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/nombre/{nombreCliente}")
    public ResponseEntity<List<Client>> getByNombreCliente(@PathVariable("nombreCliente") String nombreCliente) {
        return ResponseEntity.ok(personService.findByNombreCliente(nombreCliente));
    }

    @GetMapping("/numero/{numero}")
    public ResponseEntity<List<Client>> getByNumero(@PathVariable("numero") int numero) {
        return ResponseEntity.ok(personService.findByNumero(numero));
    }

    @PostMapping
    public ResponseEntity<Client> createPerson(@RequestBody Client person) {
        Client nueva = personService.createPerson(person);
        return ResponseEntity.status(HttpStatus.CREATED).body(nueva);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Client> updatePerson(@PathVariable("id") UUID id, @RequestBody Client person) {
        Optional<Client> updated = personService.updatePerson(id, person);
        return updated.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePerson(@PathVariable("id") UUID id) {
        personService.deletePerson(id);
        return ResponseEntity.ok().build();
    }
}