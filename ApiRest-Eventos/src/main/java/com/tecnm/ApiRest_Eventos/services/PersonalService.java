package com.tecnm.ApiRest_Eventos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tecnm.ApiRest_Eventos.entities.Empleado;
import com.tecnm.ApiRest_Eventos.repositories.PersonalRepository;


@Service
public class PersonalService {
	
	 	@Autowired
	 	private final PersonalRepository personalRepository;
	
	 	public PersonalService(PersonalRepository personalRepository) {
	 		this.personalRepository = personalRepository;
	 	}
	 	public List<Empleado> findAll() {
	 		return personalRepository.findAll();
	 	}
	 	public Empleado findById(int id) {
	 		return personalRepository.findById(id);
	 	}
	 	public List<Empleado> findByNombre(String nombre) {
	 		return personalRepository.findByNombre(nombre);
	 	}
	 	public List<Empleado> findByRol(String rol) {
	 		return personalRepository.findByRol(rol);
	 	}
	 	
	 	

}
