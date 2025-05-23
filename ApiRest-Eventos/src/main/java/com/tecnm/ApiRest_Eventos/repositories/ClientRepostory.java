package com.tecnm.ApiRest_Eventos.repositories;

import java.util.List;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tecnm.ApiRest_Eventos.entities.Client;
@Repository
public interface ClientRepostory extends CrudRepository<Client, UUID> {
	List<Client> findByNombreCliente(String nombreCliente);
	List<Client> findByNumero(int numero);
	Client findByUuid(UUID uuid);
	List<Client> findAll();
}
