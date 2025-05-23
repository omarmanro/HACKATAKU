package com.tecnm.ApiRest_Eventos.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "personal")
@Entity
public class Empleado {
	@Id
	private int id;
    @Column(length = 50)
	private String nombre;
	private String rol;

	public Empleado(int id, String nombre, String rol) {
		this.id = id;
		this.nombre = nombre;
		this.rol = rol;
	}
	public Empleado() {
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getRol() {
		return rol;
	}
	public void setRol(String rol) {
		this.rol = rol;
	}
	
	//Json format
	@Override
	public String toString() {
		return "{id:" + id + 
				", nombre:" + nombre + 
				", rol:" + rol + "}";
	}
}
