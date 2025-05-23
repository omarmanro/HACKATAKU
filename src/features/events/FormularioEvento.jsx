
import React, { useState } from "react";
import { format, addDays } from "date-fns";
import { es } from "date-fns/locale";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUserFriends, FaPlus } from "react-icons/fa";
import "../../components/css/FormularioEvento.css";

export default function EventScheduler() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: format(new Date(), "yyyy-MM-dd"),
    time: "12:00",
    location: "",
    description: "",
    attendees: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const errors = {};
    if (!newEvent.title.trim()) errors.title = "El título es requerido";
    if (!newEvent.date) errors.date = "La fecha es requerida";
    if (!newEvent.time) errors.time = "La hora es requerida";
    if (!newEvent.location.trim()) errors.location = "La ubicación es requerida";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const addEvent = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const eventDateTime = `${newEvent.date}T${newEvent.time}`;
    const newEventData = {
      ...newEvent,
      id: Date.now(),
      dateTime: eventDateTime,
    };

    setEvents([...events, newEventData]);
    setNewEvent({
      title: "",
      date: format(new Date(), "yyyy-MM-dd"),
      time: "12:00",
      location: "",
      description: "",
      attendees: "",
    });
  };

  const daysToShow = 7;
  const today = new Date();
  const dates = Array.from({ length: daysToShow }, (_, i) => addDays(today, i));
  return (
    <div className="event-scheduler">
      <h2 className="page-title">Planificador de Eventos</h2>

      <div className="event-form">
        <h3 className="form-title">Crear Nuevo Evento</h3>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">
              <FaCalendarAlt className="icon" /> Título del Evento
            </label>
            <input
              type="text"
              name="title"
              placeholder="Ej: Reunión de Equipo"
              value={newEvent.title}
              onChange={handleChange}
              className={`form-input ${errors.title ? 'error' : ''}`}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                <FaCalendarAlt className="icon" /> Fecha
              </label>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleChange}
                className={`form-input ${errors.date ? 'error' : ''}`}
              />
              {errors.date && <span className="error-message">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaClock className="icon" /> Hora
              </label>
              <input
                type="time"
                name="time"
                value={newEvent.time}
                onChange={handleChange}
                className={`form-input ${errors.time ? 'error' : ''}`}
              />
              {errors.time && <span className="error-message">{errors.time}</span>}
            </div>
          </div>          <div className="form-group">
            <label className="form-label">
              <FaMapMarkerAlt className="icon" /> Ubicación
            </label>
            <input
              type="text"
              name="location"
              placeholder="Ej: Sala de Conferencias"
              value={newEvent.location}
              onChange={handleChange}
              className={`form-input ${errors.location ? 'error' : ''}`}
            />
            {errors.location && <span className="error-message">{errors.location}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              <FaUserFriends className="icon" /> Asistentes
            </label>
            <input
              type="text"
              name="attendees"
              placeholder="Ej: Juan, Maria, Carlos"
              value={newEvent.attendees}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Descripción</label>
            <textarea
              name="description"
              placeholder="Detalles del evento..."
              value={newEvent.description}
              onChange={handleChange}
              className="form-input"
              rows="3"
            />
          </div>

          <div className="form-actions">
            <button
              onClick={addEvent}
              className="submit-button"
            >
              Crear Evento
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Display */}
      <div className="calendar-grid">
        {dates.map((date) => {
          const dateStr = format(date, "yyyy-MM-dd");
          const dayEvents = events.filter((ev) => ev.date === dateStr);          return (
            <div key={dateStr} className="calendar-day">
              <h4 className="day-header">
                {format(date, "EEEE, d 'de' MMMM", { locale: es })}
              </h4>
              {dayEvents.length > 0 ? (
                <ul className="event-list">
                  {dayEvents.map((ev) => (
                    <li key={ev.id} className="event-item">
                      <div className="event-title">{ev.title}</div>
                      <div className="event-time">
                        <FaClock className="icon" /> {ev.time}
                      </div>
                      <div className="event-location">
                        <FaMapMarkerAlt className="icon" /> {ev.location}
                      </div>
                      {ev.attendees && (
                        <div className="event-attendees">
                          <FaUserFriends className="icon" /> {ev.attendees}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-events">No hay eventos programados</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
