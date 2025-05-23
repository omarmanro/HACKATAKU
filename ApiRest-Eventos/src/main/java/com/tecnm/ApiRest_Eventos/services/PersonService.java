package com.tecnm.ApiRest_Eventos.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnm.ApiRest_Eventos.entities.Person;
import com.tecnm.ApiRest_Eventos.repositories.PersonRepostory;

@Service
public class PersonService  {
	@Autowired 
	private final PersonRepostory repository;

	public PersonService(PersonRepostory repository) {
		this.repository = repository;
	}
	public Iterable<Person> getAllPersons() {
		return repository.findAll();
	}

	public Optional<Person> getPersonById(UUID id) {
	    return repository.findById(id);
	}

	public Person createPerson(Person person) {
		return repository.save(person);
	}
	
	public Optional<Person> updatePerson(UUID id, Person person) {
		Optional<Person> opPerson = repository.findById(id);
		if (opPerson.isPresent()) {
			Person personActual = opPerson.get();
			personActual.setNombreCliente(person.getNombreCliente());
			personActual.setNumero(person.getNumero());
			personActual.setUuid(person.getUuid());
			repository.save(personActual);
			return Optional.of(personActual);
		} else {
			return Optional.empty();
		}
	}

	public void deletePerson(UUID id) {
		repository.deleteById(id);
	}
	
	public List<Person> findByNombreCliente(String nombreCliente) {
		return repository.findByNombreCliente(nombreCliente);
	}

	public List<Person> findByNumero(int numero) {
		return repository.findByNumero(numero);
	}
}
