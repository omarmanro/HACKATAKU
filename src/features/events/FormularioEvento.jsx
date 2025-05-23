import React, { useState, useEffect } from "react";
import { format, addDays } from "date-fns";
import { es } from "date-fns/locale";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUserFriends, FaPlus } from "react-icons/fa";
import "../../components/css/FormularioEvento.css";

export default function EventScheduler() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://192.168.252.218:8080/api/preview")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar eventos");
        return res.json();
      })
      .then((data) => {
        // Si la API devuelve un objeto tipo map, conviértelo a array
        // Ejemplo: { "2025-05-23": [evento1, evento2], ... }
        let eventos = [];
        if (Array.isArray(data)) {
          eventos = data;
        } else if (typeof data === "object" && data !== null) {
          Object.entries(data).forEach(([fecha, lista]) => {
            lista.forEach(ev => {
              eventos.push({ ...ev, date: fecha });
            });
          });
        }
        setEvents(eventos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const daysToShow = 7;
  const today = new Date();
  const dates = Array.from({ length: daysToShow }, (_, i) => addDays(today, i));

  return (
    <div className="calendar-container">
      {loading && <div>Cargando eventos...</div>}
      {error && <div style={{color:'red'}}>Error: {error}</div>}
      <div className="calendar-grid">
        {dates.map((date) => {
          const dateStr = format(date, "yyyy-MM-dd");
          const dayEvents = events.filter((ev) => ev.date === dateStr);
          return (
            <div key={dateStr} className="calendar-day">
              <h4 className="day-header">
                {format(date, "EEEE, d 'de' MMMM", { locale: es })}
              </h4>
              {dayEvents.length > 0 ? (
                <ul className="event-list">
                  {dayEvents.map((ev, idx) => (
                    <li key={ev.id || idx} className="event-item">
                      <div className="event-title">{ev.title || ev.nombreCliente || ev.titulo || 'Evento'}</div>
                      <div className="event-time">
                        <FaClock className="icon" /> {ev.time || ev.hora || (ev.fecha && ev.fecha.split('T')[1]) || ''}
                      </div>
                      <div className="event-location">
                        <FaMapMarkerAlt className="icon" /> {ev.location || ev.salon || ev.lugar || ''}
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
