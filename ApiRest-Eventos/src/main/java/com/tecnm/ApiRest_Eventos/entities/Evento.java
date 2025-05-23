package com.tecnm.ApiRest_Eventos.entities;

import java.sql.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//UUID uuid = UUID.fromString(uuidHexDigitString);

@Entity
@Table(name = "evento")
public class Evento {
		@Id
		private UUID uuid;
	    private UUID cliente_id;
	    private int salon;
	    @Column(length = 50)
	    private String equipo;
	    private int invitados;//10%
	    private int cocineros; //5%
	    private int meseros; //5%	
	    private int menu;
	    private Date fecha;
	    private int decoracion;
	    private String estado;
	        		
	    public Evento(UUID uuid, UUID cliente_id, int salon, String equipo, int invitados,int menu, Date fecha, int decoracion, String estado) {
			super();
			this.uuid = uuid;
			this.cliente_id = cliente_id;
			this.salon = salon;
			this.equipo = equipo;
			this.invitados = invitados;
			this.cocineros = (invitados/100)*5;
			this.meseros = (invitados/100)*5;
			this.menu = menu;
			this.fecha = fecha;
			this.decoracion = decoracion;
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
			return cliente_id;
		}

		public void setCliente_id(UUID cliente_id) {
			this.cliente_id = cliente_id;
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
		//Json format
		public String toString() {
			return "{uuid:" + uuid + 
					", cliente_id:" + cliente_id + 
					", salon:" + salon + 
					", equipo:" + equipo + 
					", invitados:" + invitados + 
					", menu:" + menu + 
					", cocineros:" + cocineros + 
					", meseros:" + meseros +
					", fecha:" + fecha +
					", decoracion:" + decoracion +
					", estado:" + estado + "}";
			
		}

}
