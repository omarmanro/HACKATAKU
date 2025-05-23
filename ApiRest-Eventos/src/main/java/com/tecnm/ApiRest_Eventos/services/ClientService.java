package com.tecnm.ApiRest_Eventos.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnm.ApiRest_Eventos.entities.Client;
import com.tecnm.ApiRest_Eventos.repositories.ClientRepostory;

@Service
public class ClientService  {
	@Autowired 
	private final ClientRepostory repository;

	public ClientService(ClientRepostory repository) {
		this.repository = repository;
	}
	public Iterable<Client> getAllPersons() {
		return repository.findAll();
	}

	public Optional<Client> getPersonById(UUID id) {
	    return repository.findById(id);
	}

	public Client createPerson(Client person) {
		return repository.save(person);
	}
	
	public Optional<Client> updatePerson(UUID id, Client person) {
		Optional<Client> opPerson = repository.findById(id);
		if (opPerson.isPresent()) {
			Client personActual = opPerson.get();
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
	
	public List<Client> findByNombreCliente(String nombreCliente) {
		return repository.findByNombreCliente(nombreCliente);
	}

	public List<Client> findByNumero(int numero) {
		return repository.findByNumero(numero);
	}
}
