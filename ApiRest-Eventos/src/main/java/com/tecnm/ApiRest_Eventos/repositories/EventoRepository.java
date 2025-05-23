package com.tecnm.ApiRest_Eventos.repositories;

import java.sql.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.tecnm.ApiRest_Eventos.entities.Evento;

public interface EventoRepository extends CrudRepository<Evento, UUID>{ 
        @Override
	List<Evento> findAll();
	Optional<Evento> findByClienteUuid(UUID uuid);
	List<Evento> findBySalon(int salon);
	List<Evento> findByFecha(Date fecha);
	List<Evento> findByEstado(String estado);
}
