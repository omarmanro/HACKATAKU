package com.tecnm.ApiRest_Eventos.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnm.ApiRest_Eventos.entities.Person;
import com.tecnm.ApiRest_Eventos.repositories.PersonRepository;

@Service
public class PersonService  {
	@Autowired 
	private final PersonRepository repository;

	public PersonService(PersonRepository repository) {
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
	
	public Optional<Person> findByNombreCliente(String nombreCliente) {
		List<Person> result = repository.findByNombreCliente(nombreCliente);
		return result.isEmpty() ? Optional.empty() : Optional.of(result.get(0));
	}

	public List<Person> findAllByNombreCliente(String nombreCliente) {
		return repository.findByNombreCliente(nombreCliente);
	}

	public Optional<Person> findByNumero(int numero) {
		List<Person> result = repository.findByNumero(numero);
		return result.isEmpty() ? Optional.empty() : Optional.of(result.get(0));
	}

	public List<Person> findAllByNumero(int numero) {
		return repository.findByNumero(numero);
	}
}
