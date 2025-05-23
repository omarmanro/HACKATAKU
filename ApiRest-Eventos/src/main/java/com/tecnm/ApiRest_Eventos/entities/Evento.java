package com.tecnm.ApiRest_Eventos.entities;

import java.sql.Date;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//UUID uuid = UUID.fromString(uuidHexDigitString);

@Entity
@Table(name = "evento")
public class Evento {

	@Id
	private UUID uuid;
	private int salon;
	private int equipo;
	private int invitados;//10%
	private int cocineros; //5%
	private int meseros; //5%	
	private int menu;
	private Date fecha;
	private int decoracion;
	private String nombreCliente;
	private String telefono;
	private String correo;
	private String estado;

	public Evento(int salon, int equipo, int invitados, int menu, Date fecha, int decoracion, String nombreCliente, String telefono, String correo, String estado) {
		this.uuid = UUID.randomUUID();
		this.salon = salon;
		this.equipo = equipo;
		this.invitados = invitados;
		this.cocineros = Math.max(1, (int) Math.ceil(invitados * 0.05));
		this.meseros = Math.max(1, (int) Math.ceil(invitados * 0.05));
		this.menu = menu;
		this.fecha = fecha;
		this.decoracion = decoracion;
		this.nombreCliente = nombreCliente;
		this.telefono = telefono;
		this.correo = correo;
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

	public int getSalon() {
		return salon;
	}

	public void setSalon(int salon) {
		this.salon = salon;
	}

	public int getEquipo() {
		return equipo;
	}

	public void setEquipo(int equipo) {
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

	public String getNombreCliente() {
		return nombreCliente;
	}

	public void setNombreCliente(String nombreCliente) {
		this.nombreCliente = nombreCliente;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	

	@Override
	public String toString() {
        return String.format("{\"uuid\":\"%s\", \"nombreCliente\":\"%s\", \"telefono\":\"%s\", \"correo\":\"%s\", \"salon\":%d, \"equipo\":%d, \"invitados\":%d, \"menu\":%d, \"cocineros\":%d, \"meseros\":%d, \"fecha\":\"%s\", \"decoracion\":%d, \"estado\":\"%s\"}",
                uuid, nombreCliente, telefono, correo, salon, equipo, invitados, menu, cocineros, meseros, fecha, decoracion, estado);
    }

}
