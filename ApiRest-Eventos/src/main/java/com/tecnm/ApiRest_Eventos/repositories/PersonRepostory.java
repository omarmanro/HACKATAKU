package com.tecnm.ApiRest_Eventos.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tecnm.ApiRest_Eventos.entities.Person;
@Repository
public interface PersonRepostory extends CrudRepository<Person, UUID> {
	List<Person> findByNombreCliente(String nombreCliente);
	List<Person> findByNumero(int numero);
	Person findByUuid(UUID uuid);
	@Override
	List<Person> findAll();
}
