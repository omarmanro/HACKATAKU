package com.tecnm.ApiRest_Eventos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecnm.ApiRest_Eventos.entities.Empleado;
import com.tecnm.ApiRest_Eventos.services.PersonalService;

@RestController
@RequestMapping("/api/personal")
public class PersonalController {

    @Autowired
    private PersonalService personalService;

    @GetMapping("/personal")
    public ResponseEntity<List<Empleado>> getAllPersonal() {
        return ResponseEntity.ok(personalService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empleado> getPersonalById(@PathVariable("id") int id) {
        Empleado empleado = personalService.findById(id);
        if (empleado != null) {
            return ResponseEntity.ok(empleado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/nombre/{nombre}")
    public ResponseEntity<List<Empleado>> getByNombre(@PathVariable("nombre") String nombre) {
        return ResponseEntity.ok(personalService.findByNombre(nombre));
    }

    @GetMapping("/rol/{rol}")
    public ResponseEntity<List<Empleado>> getByRol(@PathVariable("rol") String rol) {
        return ResponseEntity.ok(personalService.findByRol(rol));
    }
}