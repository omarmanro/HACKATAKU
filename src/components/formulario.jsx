import { useState } from "react";
import "./css/Formulario.css";
import DraggableList from "./DraggableList";


const getToday = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const Formulario = ({ habilitado = false }) => {
  const [employees] = useState([
    { id: 1, name: 'John Doe', position: 'Event Manager', avatar: '/avatars/john.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Coordinator', avatar: '/avatars/jane.jpg' },
    { id: 3, name: 'Mike Johnson', position: 'Staff', avatar: '/avatars/mike.jpg' },
  ]);

  const [salons] = useState([
    { id: 1, name: 'Grand Ballroom', capacity: 200, available: true },
    { id: 2, name: 'Conference Room A', capacity: 50, available: false },
    { id: 3, name: 'Garden Terrace', capacity: 100, available: true },
  ]);

  const [equipment] = useState([
    { id: 1, name: 'Projector', status: 'Available', location: 'Storage Room' },
    { id: 2, name: 'Sound System', status: 'In Use', location: 'Ballroom' },
    { id: 3, name: 'Lighting Kit', status: 'Maintenance', location: 'Technical Room' },
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
    // Concatenar datos del formulario y empleados seleccionados
    const fullData = {
      ...formData,
      empleadosSeleccionados: dropzoneEmployees
    };
    localStorage.setItem("formularioData", JSON.stringify(fullData));
    alert("Datos guardados localmente. Listos para enviar a la API.\n" + JSON.stringify(fullData, null, 2));
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required disabled={habilitado} value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required disabled={habilitado} value={formData.email} onChange={handleChange} />

        <label htmlFor="phone">Teléfono:</label>
        <input type="tel" id="phone" name="phone" required disabled={habilitado} value={formData.phone} onChange={handleChange} />
        
        <label htmlFor="date">Fecha:</label>
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

        <label>Salon:</label>
        <div className="radio-group">
          <label htmlFor="salon1">
            <input type="radio" id="salon1" name="salon" value="Salon playa" required disabled={habilitado} checked={formData.salon === "Salon playa"} onChange={handleChange} />
            Salon playa
          </label>
          <label htmlFor="salon2">
            <input type="radio" id="salon2" name="salon" value="Salon elegante" disabled={habilitado} checked={formData.salon === "Salon elegante"} onChange={handleChange} />
            Salon elegante
          </label>
          <label htmlFor="salon3">
            <input type="radio" id="salon3" name="salon" value="Salon infantil" disabled={habilitado} checked={formData.salon === "Salon infantil"} onChange={handleChange} />
            Salon infantil
          </label>
        </div>
        {
          habilitado && (<DraggableList
            items={employees}
            type="employee"
            onItemsChange={(items) => setEvents(items)}
            onDropzoneChange={setDropzoneEmployees}
          />)
        }
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default Formulario;
