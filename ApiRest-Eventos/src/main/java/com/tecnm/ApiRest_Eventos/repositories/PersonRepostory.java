package com.tecnm.ApiRest_Eventos.repositories;

import java.util.List;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;
import com.tecnm.ApiRest_Eventos.entities.Person;

public interface PersonRepostory extends CrudRepository<Person, UUID> {
	List<Person> findByNombreCliente(String nombreCliente);
	List<Person> findByNumero(int numero);
	List<Person> findByUuid(UUID uuid);
	List<Person> findAll();
}
