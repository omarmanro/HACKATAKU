import { useState } from "react";
import "./css/Formulario.css";
import DraggableList from "./DraggableList";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaMugHot } from 'react-icons/fa';

const getDateTimeLocal = () => {
  const now = new Date();
  return now.toISOString().slice(0, 16);
};

const Formulario = ({ habilitado = true, initialData = {} }) => {
  const [employees] = useState([
    { id: 1, name: 'John Doe', position: 'Event Manager', avatar: '/avatars/john.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Coordinator', avatar: '/avatars/jane.jpg' },
    { id: 3, name: 'Mike Johnson', position: 'Staff', avatar: '/avatars/mike.jpg' },
  ]);

  const [events, setEvents] = useState([]);
  const [dropzoneEmployees, setDropzoneEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    dateTime: initialData.dateTime || getDateTimeLocal(),
    salon: initialData.salon || 1,
    personas: initialData.personas || 100,
    comida: initialData.comida || 1,
    equipo: initialData.equipo || 1,
    decoracion: initialData.decoracion || 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convertir a número si el campo es personas, salon o comida
    const numericFields = ["personas", "salon", "comida", "equipo", "decoracion"];
    setFormData((prev) => ({
      ...prev,
      [name]: numericFields.includes(name) ? Number(value) : value
    }));
  };

  // URL de la API (usar variable de entorno VITE_API_URL o fallback)
  const API_URL = import.meta.env.VITE_API_URL || 'http://192.168.252.218:8080/api/eventos';

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Formatear fecha solo con día si es necesario
    const fullData = {
      salon: formData.salon,
      equipo: formData.equipo,
      invitados: formData.personas,
      menu: formData.comida,
      fecha: formData.dateTime, // o usa formData.dateTime si necesitas fecha y hora
      decoracion: formData.decoracion,
      nombreCliente: formData.name,
      telefono: formData.phone,
      correo: formData.email,
      estado: "espera",
    };
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullData)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Error al enviar datos');
      alert('Formulario enviado con éxito.\n' + JSON.stringify(result, null, 2));
    } catch (err) {
      console.error('Error al enviar formulario:', err);
      alert('Ocurrió un error al enviar los datos: ' + err.message);
    }
  };
  
  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Registro de Evento</h2>
          <p>Complete los detalles del evento y seleccione el personal necesario</p>
        </div>

        <div className="form-group">
          <label htmlFor="name">
            <FaUser /> Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={habilitado}
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={habilitado}
            value={formData.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            <FaPhone /> Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            disabled={habilitado}
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="dateTime">Fecha y hora:</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            required
            disabled={habilitado}
            value={formData.dateTime}
            min={getDateTimeLocal()}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            <FaUser /> Personas
          </label>
          <div className="radio-group">
            <label htmlFor="personas1">
              <input
                type="radio"
                id="personas1"
                name="personas"
                value={100}
                required
                disabled={habilitado}
                checked={formData.personas === 100}
                onChange={handleChange}
              />
              100
            </label>
            <label htmlFor="personas2">
              <input
                type="radio"
                id="personas2"
                name="personas"
                value={200}
                disabled={habilitado}
                checked={formData.personas === 200}
                onChange={handleChange}
              />
              200
            </label>
            <label htmlFor="personas3">
              <input
                type="radio"
                id="personas3"
                name="personas"
                value={300}
                disabled={habilitado}
                checked={formData.personas === 300}
                onChange={handleChange}
              />
              300
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>
            <FaMugHot /> Comida
          </label>
          <div className="radio-group">
            <label htmlFor="comida1">
              <input
                type="radio"
                id="comida1"
                name="comida"
                value={1}
                required
                disabled={habilitado}
                checked={formData.comida === 1}
                onChange={handleChange}
              />
              Combo Sencillo
            </label>
            <label htmlFor="comida2">
              <input
                type="radio"
                id="comida2"
                name="comida"
                value={2}
                disabled={habilitado}
                checked={formData.comida === 2}
                onChange={handleChange}
              />
              Combo Completo
            </label>
            <label htmlFor="comida3">
              <input
                type="radio"
                id="comida3"
                name="comida"
                value={3}
                disabled={habilitado}
                checked={formData.comida === 3 }
                onChange={handleChange}
              />
              Combo Premium
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>
            <FaBuilding /> Salón
          </label>
          <div className="radio-group">
            <label htmlFor="salon1">
              <input
                type="radio"
                id="salon1"
                name="salon"
                value={1}
                required
                disabled={habilitado}
                checked={formData.salon === 1}
                onChange={handleChange}
              />
              Salón Playa
            </label>
            <label htmlFor="salon2">
              <input
                type="radio"
                id="salon2"
                name="salon"
                value={2}
                disabled={habilitado}
                checked={formData.salon === 2}
                onChange={handleChange}
              />
              Salón Elegante
            </label>
            <label htmlFor="salon3">
              <input
                type="radio"
                id="salon3"
                name="salon"
                value={3}
                disabled={habilitado}
                checked={formData.salon === 3}
                onChange={handleChange}
              />
              Salón Infantil
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Equipo</label>
          <div className="radio-group">
            <label htmlFor="equipo1">
              <input
                type="radio"
                id="equipo1"
                name="equipo"
                value={1}
                required
                disabled={habilitado}
                checked={formData.equipo === 1}
                onChange={handleChange}
              />
              Equipo Básico
            </label>
            <label htmlFor="equipo2">
              <input
                type="radio"
                id="equipo2"
                name="equipo"
                value={2}
                disabled={habilitado}
                checked={formData.equipo === 2}
                onChange={handleChange}
              />
              Equipo Plus
            </label>
            <label htmlFor="equipo3">
              <input
                type="radio"
                id="equipo3"
                name="equipo"
                value={3}
                disabled={habilitado}
                checked={formData.equipo === 3}
                onChange={handleChange}
              />
              Equipo Plus Max
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Decoración</label>
          <div className="radio-group">
            <label htmlFor="decoracion1">
              <input
                type="radio"
                id="decoracion1"
                name="decoracion"
                value={1}
                required
                disabled={habilitado}
                checked={formData.decoracion === 1}
                onChange={handleChange}
              />
              Decoración Clásica
            </label>
            <label htmlFor="decoracion2">
              <input
                type="radio"
                id="decoracion2"
                name="decoracion"
                value={2}
                disabled={habilitado}
                checked={formData.decoracion === 2}
                onChange={handleChange}
              />
              Decoración Moderna
            </label>
            <label htmlFor="decoracion3">
              <input
                type="radio"
                id="decoracion3"
                name="decoracion"
                value={3}
                disabled={habilitado}
                checked={formData.decoracion === 3}
                onChange={handleChange}
              />
              Decoración Infantil
            </label>
            <label htmlFor="decoracion4">
              <input
                type="radio"
                id="decoracion4"
                name="decoracion"
                value={4}
                disabled={habilitado}
                checked={formData.decoracion === 4}
                onChange={handleChange}
              />
              Decoración Romántica
            </label>
          </div>
        </div>

        {habilitado && (
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label>Seleccionar Personal</label>
            <DraggableList
              items={employees}
              type="employee"
              onItemsChange={(items) => setEvents(items)}
              onDropzoneChange={setDropzoneEmployees}
            />
          </div>
        )}
        
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default Formulario;
