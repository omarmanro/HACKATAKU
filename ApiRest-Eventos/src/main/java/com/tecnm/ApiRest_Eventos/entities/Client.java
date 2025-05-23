package com.tecnm.ApiRest_Eventos.entities;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cliente")

public class Client {

    @Id
    @Column(columnDefinition = "BINARY(16)")
    private UUID uuid;
	private String nombreCliente;
	private int numero;
	
	public Client(UUID uuid, String nombreCliente, int numero) {
		this.uuid = uuid;
		this.nombreCliente = nombreCliente;
		this.numero = numero;
	}
	public Client() {
		
	}
	public UUID getUuid() {
		return uuid;
	}
	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}
	public String getNombreCliente() {
		return nombreCliente;
	}
	public void setNombreCliente(String nombreCliente) {
		this.nombreCliente = nombreCliente;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	@Override
	public String toString() {
		return "{uuid:" + uuid + 
				", nombreCliente:" + nombreCliente + 
				", numero:" + numero + "}";
	}
	
	

}
