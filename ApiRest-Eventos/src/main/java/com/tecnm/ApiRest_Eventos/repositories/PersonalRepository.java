package com.tecnm.ApiRest_Eventos.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.tecnm.ApiRest_Eventos.entities.Empleado;

public interface PersonalRepository extends CrudRepository<Empleado, Integer> {
	List<Empleado> findByNombre(String nombre);
	List<Empleado> findByRol(String rol);
	Empleado findById(int id);
	@Override
	List<Empleado> findAll();

}
