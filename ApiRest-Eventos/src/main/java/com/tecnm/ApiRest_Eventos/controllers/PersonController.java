package com.tecnm.ApiRest_Eventos.controllers;

import com.tecnm.ApiRest_Eventos.entities.Person;
import com.tecnm.ApiRest_Eventos.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/persons")
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping
    public ResponseEntity<Iterable<Person>> getAllPersons() {
        return ResponseEntity.ok(personService.getAllPersons());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable("id") UUID id) {
        Optional<Person> person = personService.getPersonById(id);
        return person.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/nombre/{nombreCliente}")
    public ResponseEntity<List<Person>> getByNombreCliente(@PathVariable("nombreCliente") String nombreCliente) {
        return ResponseEntity.ok(personService.findByNombreCliente(nombreCliente));
    }

    @GetMapping("/numero/{numero}")
    public ResponseEntity<List<Person>> getByNumero(@PathVariable("numero") int numero) {
        return ResponseEntity.ok(personService.findByNumero(numero));
    }

    @PostMapping
    public ResponseEntity<Person> createPerson(@RequestBody Person person) {
        Person nueva = personService.createPerson(person);
        return ResponseEntity.status(HttpStatus.CREATED).body(nueva);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Person> updatePerson(@PathVariable("id") UUID id, @RequestBody Person person) {
        Optional<Person> updated = personService.updatePerson(id, person);
        return updated.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePerson(@PathVariable("id") UUID id) {
        personService.deletePerson(id);
        return ResponseEntity.ok().build();
    }
}