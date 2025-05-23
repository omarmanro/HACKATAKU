import { useState } from "react";
import "./css/Formulario.css";
import DraggableList from "./DraggableList";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaBuilding, FaMugHot } from 'react-icons/fa';
import Logo from '../assets/logito.png';

const getToday = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const Formulario = ({ habilitado = true }) => {
  const [employees] = useState([
    { id: 1, name: 'John Doe', position: 'Event Manager', avatar: '/avatars/john.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Coordinator', avatar: '/avatars/jane.jpg' },
    { id: 3, name: 'Mike Johnson', position: 'Staff', avatar: '/avatars/mike.jpg' },
  ]);

  const [events, setEvents] = useState([]);
  const [dropzoneEmployees, setDropzoneEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: getToday(),
    salon: "Salon playa"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullData = {
      ...formData,
      empleadosSeleccionados: dropzoneEmployees
    };
    localStorage.setItem("formularioData", JSON.stringify(fullData));
    alert("Datos guardados exitosamente");
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
        
        <div className="form-group">
          <label htmlFor="date">
            <FaCalendarAlt /> Fecha del Evento
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            disabled={habilitado}
            value={formData.date}
            min={getToday()}
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
                value="100"
                required
                disabled={habilitado}
                checked={formData.salon === "100"}
                onChange={handleChange}
              />
              100
            </label>
            <label htmlFor="personas2">
              <input
                type="radio"
                id="personas2"
                name="personas"
                value="200"
                disabled={habilitado}
                checked={formData.salon === "200"}
                onChange={handleChange}
              />
              200
            </label>
            <label htmlFor="personas3">
              <input
                type="radio"
                id="personas3"
                name="personas"
                value="300"
                disabled={habilitado}
                checked={formData.salon === "300"}
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
                value="Combo sencillo"
                required
                disabled={habilitado}
                checked={formData.salon === "Combo sencillo"}
                onChange={handleChange}
              />
              Combo Sencillo
            </label>
            <label htmlFor="comida2">
              <input
                type="radio"
                id="comida2"
                name="comida"
                value="Combo completo"
                disabled={habilitado}
                checked={formData.salon === "Combo completo"}
                onChange={handleChange}
              />
              Combo Completo
            </label>
            <label htmlFor="comida3">
              <input
                type="radio"
                id="comida3"
                name="comida"
                value="Combo premium"
                disabled={habilitado}
                checked={formData.salon === "Combo premium"}
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
                value="Salon playa"
                required
                disabled={habilitado}
                checked={formData.salon === "Salon playa"}
                onChange={handleChange}
              />
              Salón Playa
            </label>
            <label htmlFor="salon2">
              <input
                type="radio"
                id="salon2"
                name="salon"
                value="Salon elegante"
                disabled={habilitado}
                checked={formData.salon === "Salon elegante"}
                onChange={handleChange}
              />
              Salón Elegante
            </label>
            <label htmlFor="salon3">
              <input
                type="radio"
                id="salon3"
                name="salon"
                value="Salon infantil"
                disabled={habilitado}
                checked={formData.salon === "Salon infantil"}
                onChange={handleChange}
              />
              Salón Infantil
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
        {habilitado && (
          <div className="form-group">
            <DraggableList
              items={equipment}
              type="equipment"
              onItemsChange={(items) => setEvents(items)}
              onDropzoneChange={setDropzoneEmployees}
            />
          </div>)}
          <div className="form-group">
            <img src="../src/assets/logito.png" alt="Imagen de ejemplo" />
          </div>


        <button type="submit" disabled={habilitado && dropzoneEmployees.length === 0}>
          Registrar Evento
        </button>
      </form>
    </div>
  );
};

export default Formulario;
