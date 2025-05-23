package com.tecnm.ApiRest_Eventos.services;

import java.sql.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnm.ApiRest_Eventos.entities.Evento;
import com.tecnm.ApiRest_Eventos.repositories.EventoRepository;

@Service
public class EventoService {
	@Autowired
	private EventoRepository eventoRepository;
	
	public List<Evento> findAll() {
		return eventoRepository.findAll();
	}
	public List<Evento> findBySalon(int salon) {
		return eventoRepository.findBySalon(salon);
	}
	public List<Evento> findByFecha(Date fecha) {
		return eventoRepository.findByFecha(fecha);
	}
	public List<Evento> findByEstado(String estado) {
		return eventoRepository.findByEstado(estado);
	}
	public Optional<Evento> updateEvento(UUID id, Evento evento) {
		Optional<Evento> opEvento = eventoRepository.findById(id);
		if (opEvento.isPresent()) {

			Evento eventoActual = opEvento.get();
			eventoActual.setSalon(evento.getSalon());
			eventoActual.setEquipo(evento.getEquipo());
			eventoActual.setInvitados(evento.getInvitados());
			eventoActual.setCocineros((evento.getInvitados() / 100) * 5); // recalculado
			eventoActual.setMeseros((evento.getInvitados() / 100) * 5);   // recalculado
			eventoActual.setMenu(evento.getMenu());
			eventoActual.setFecha(evento.getFecha());
			eventoActual.setDecoracion(evento.getDecoracion());
			eventoActual.setEstado(evento.getEstado());
			// Nuevos campos
			eventoActual.setNombreCliente(evento.getNombreCliente());
			eventoActual.setTelefono(evento.getTelefono());
			eventoActual.setCorreo(evento.getCorreo());


			eventoRepository.save(eventoActual);
			return Optional.of(eventoActual);
		} else {
			return Optional.empty();
		}
		
	}
	public void deleteEvento(UUID id) {
		eventoRepository.deleteById(id);
	}
	public Evento createEvento(Evento evento) {
		return eventoRepository.save(evento);
	}


}
