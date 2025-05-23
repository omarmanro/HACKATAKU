package com.tecnm.ApiRest_Eventos.controllers;

import com.tecnm.ApiRest_Eventos.entities.Empleado;
import com.tecnm.ApiRest_Eventos.services.PersonalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personal")
public class PersonalController {

    @Autowired
    private PersonalService personalService;

    @GetMapping
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