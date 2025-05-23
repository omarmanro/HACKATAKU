
import React, { useState } from "react";
import { format, addDays } from "date-fns";

export default function EventScheduler() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: format(new Date(), "yyyy-MM-dd"),
    location: "",
  });

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date) return alert("Complete all fields");
    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setNewEvent({ title: "", date: format(new Date(), "yyyy-MM-dd"), location: "" });
  };

  const daysToShow = 7;
  const today = new Date();
  const dates = Array.from({ length: daysToShow }, (_, i) => addDays(today, i));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Calendario de eventos</h2>

      {/* Create Event Form */}
      <div className="bg-white shadow p-4 rounded mb-6">
        <h3 className="text-lg font-semibold mb-2">Organizacion de eventos</h3>
        <div className="flex flex-col gap-2 md:flex-row md:items-end">
          <input
            type="text"
            name="title"
            placeholder="Nombre del evento"
            value={newEvent.title}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="location"
            placeholder="Salon"
            value={newEvent.location}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={addEvent}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Agregar evento
          </button>
        </div>
      </div>

      {/* Calendar Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dates.map((date) => {
          const dateStr = format(date, "yyyy-MM-dd");
          const dayEvents = events.filter((ev) => ev.date === dateStr);

          return (
            <div key={dateStr} className="bg-gray-50 p-4 rounded shadow">
              <h4 className="text-lg font-semibold mb-2">
                {format(date, "EEEE, MMM dd")}
              </h4>
              {dayEvents.length > 0 ? (
                <ul className="space-y-2">
                  {dayEvents.map((ev) => (
                    <li key={ev.id} className="p-2 bg-white rounded shadow">
                      <strong>{ev.title}</strong>
                      <p className="text-sm text-gray-600">{ev.location}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No events scheduled.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
