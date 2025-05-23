package com.tecnm.ApiRest_Eventos.entities;

import java.sql.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//UUID uuid = UUID.fromString(uuidHexDigitString);

@Entity
@Table(name = "evento")
public class Evento {

	@Id
	private UUID uuid;
	private int salon;
	@Column(length = 50)
	private String equipo;
	private int invitados;//10%
	private int cocineros; //5%
	private int meseros; //5%	
	private int menu;
	private Date fecha;
	private int decoracion;

	@Column(name = "cliente_id", columnDefinition = "BINARY(16)")
	private UUID clienteId;

	private String estado;

	public Evento(UUID uuid, int salon, String equipo, int invitados,int menu, Date fecha, int decoracion,UUID clienteId, String estado) {
		this.uuid = uuid;
		this.salon = salon;
		this.equipo = equipo;
		this.invitados = invitados;
		this.cocineros = Math.max(1, (int) Math.ceil(invitados * 0.05));
		this.meseros = Math.max(1, (int) Math.ceil(invitados * 0.05));
		this.menu = menu;
		this.fecha = fecha;
		this.decoracion = decoracion;
		this.clienteId = clienteId;
		this.estado = estado;
	}

	public Evento() {

	}

	public UUID getUuid() {
		return uuid;
	}

	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}

	public UUID getCliente_id() {
		return clienteId;
	}

	public void setCliente_id(UUID cliente_id) {
		this.clienteId = cliente_id;
	}

	public int getSalon() {
		return salon;
	}

	public void setSalon(int salon) {
		this.salon = salon;
	}

	public String getEquipo() {
		return equipo;
	}

	public void setEquipo(String equipo) {
		this.equipo = equipo;
	}

	public int getInvitados() {
		return invitados;
	}

	public void setInvitados(int invitados) {
		this.invitados = invitados;
		this.cocineros = Math.max(1, (int) Math.ceil(invitados * 0.05));
		this.meseros = Math.max(1, (int) Math.ceil(invitados * 0.05));

	}

	public int getCocineros() {
		return cocineros;
	}

	public void setCocineros(int cocineros) {
		this.cocineros = cocineros;
	}

	public int getMeseros() {
		return meseros;
	}

	public void setMeseros(int meseros) {
		this.meseros = meseros;
	}

	public int getMenu() {
		return menu;
	}

	public void setMenu(int menu) {
		this.menu = menu;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public int getDecoracion() {
		return decoracion;
	}

	public void setDecoracion(int decoracion) {
		this.decoracion = decoracion;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	@Override

	public String toString() {
		return String.format("{\"uuid\":\"%s\", \"cliente_id\":\"%s\", \"salon\":%d, \"equipo\":\"%s\", \"invitados\":%d, \"menu\":%d, \"cocineros\":%d, \"meseros\":%d, \"fecha\":\"%s\", \"decoracion\":%d, \"estado\":\"%s\"}",
				uuid, clienteId, salon, equipo, invitados, menu, cocineros, meseros, fecha, decoracion, estado);
	}

}
