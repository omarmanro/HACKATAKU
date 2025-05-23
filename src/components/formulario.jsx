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

const Formulario = ({formData2 ={}, habilitado = false, id=-1}) => {
  const [employees] = useState([
    { id: 1, name: 'John Doe', position: 'Event Manager', avatar: '/avatars/john.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Coordinator', avatar: '/avatars/jane.jpg' },
    { id: 3, name: 'Mike Johnson', position: 'Staff', avatar: '/avatars/mike.jpg' },
  ]);


  const [equipment] = useState([
    { id: 1, name: 'Projector', status: 'Available', location: 'Storage Room' },
    { id: 2, name: 'Sound System', status: 'In Use', location: 'Ballroom' },
    { id: 3, name: 'Lighting Kit', status: 'Maintenance', location: 'Technical Room' },
  ]);
  const [events, setEvents] = useState([]);
  const [dropzoneEmployees, setDropzoneEmployees] = useState([]);
  const [dropzoneEquipment, setDropzoneEquipment] = useState([]);
  const [formData, setFormData] = useState({
    id: id,
    name: formData2.name || "",
    email: formData2.email || "",
    phone: formData2.phone || "",
    date: formData2.date || getToday(),
    salon: formData2.salon || "Salon playa",
    personas: formData2.personas || 100,
    comida: formData2.comida || "Combo sencillo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullData = {
      ...formData,
      empleadosSeleccionados: dropzoneEmployees,
      equipoSeleccionado: dropzoneEquipment
    };
    localStorage.setItem("formularioData", JSON.stringify(fullData));
    alert("Datos guardados localmente. Listos para enviar a la API.\n" + JSON.stringify(fullData, null, 2));
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required disabled={habilitado} value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required disabled={habilitado} value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" required disabled={habilitado} value={formData.phone} onChange={handleChange} />
        </div>
        
        <div className="form-field">
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
        </div>
        <div className="form-field">
        <label>Salon:</label>
        <div className="radio-group">
          <label htmlFor="salon1">
            <input type="radio" id="salon1" name="salon" 
            value="Salon playa" required disabled={habilitado} 
            checked={formData.salon === "Salon playa"} onChange={handleChange} />
            Salon playa
          </label>
          <label htmlFor="salon2">
            <input type="radio" id="salon2" name="salon" 
            value="Salon elegante" disabled={habilitado} 
            checked={formData.salon === "Salon elegante"} onChange={handleChange} />
            Salon elegante
          </label>
          <label htmlFor="salon3">
            <input type="radio" id="salon3" name="salon" 
            value="Salon infantil" disabled={habilitado} 
            checked={formData.salon === "Salon infantil"} onChange={handleChange} />
            Salon infantil
          </label>
        </div>
        </div>
        <div className="form-field">
        <label>Personas:</label>
        <div className="radio-group">
          <label htmlFor="personas1">
            <input type="radio" id="personas1"
             name="personas" value={100} required disabled={habilitado} 
             checked={formData.personas === 100} onChange={handleChange} />
            100
          </label>
          <label htmlFor="personas2">
            <input type="radio" id="personas2" 
            name="personas" value={200} disabled={habilitado} 
            checked={formData.personas === 200} onChange={handleChange} />
            200
          </label>
          <label htmlFor="personas3">
            <input type="radio" id="personas3"
             name="personas" value={300} disabled={habilitado}
             checked={formData.personas === 300} onChange={handleChange} />
            300
          </label>
        </div>
        </div>
        <div className="form-field">
        <label>Comida:</label>
        <div className="radio-group">
          <label htmlFor="comida1">
            <input type="radio" id="comida1"
             name="comida" value="Combo sencillo" required disabled={habilitado} 
             checked={formData.comida === "Combo sencillo"} onChange={handleChange} />
            Combo sencillo
          </label>
          <label htmlFor="comida2">
            <input type="radio" id="comida2" 
            name="comida" value="Combo intermedio" disabled={habilitado} 
            checked={formData.comida === "Combo intermedio"} onChange={handleChange} />
            Combo intermedio
          </label>
          <label htmlFor="comida3">
            <input type="radio" id="comida3"
             name="comida" value="Combo deluxe" disabled={habilitado}
             checked={formData.comida === "Combo deluxe"} onChange={handleChange} />
            Combo deluxe
          </label>
        </div>
        </div>
        {
          habilitado && (
          <div className="form-field">
          <DraggableList
            items={employees}
            type="employee"
            onItemsChange={(items) => setEvents(items)}
            onDropzoneChange={setDropzoneEmployees}
          />
          </div>  
        )}
        {
          habilitado && (
          <div className="form-field">
          <DraggableList
            items={equipment}
            type="equipment"
            onItemsChange={(items) => setEvents(items)}
            onDropzoneChange={setDropzoneEquipment}
          />
          </div>  
        )}
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default Formulario;
