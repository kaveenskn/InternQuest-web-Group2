import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import'../styles/Calendar.css'


const CalendarPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    type: "Interview",
  });

  const handleAddEvent = () => setShowForm(true);
  const handleCloseForm = () => {
    setFormData({ title: "", type: "Interview" });
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { ...formData, date: selectedDate }]);
    handleCloseForm();
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>InternQuest Calendar</h1>
        <p>Track your interviews, deadlines, and networking events</p>
        <button className="add-btn" onClick={handleAddEvent}>+ Add Event</button>
      </div>

      <div className="calendar-body">
        <Calendar onChange={setSelectedDate} value={selectedDate} />
        <div className="events-list">
          <h3>Events on {selectedDate.toDateString()}</h3>
          <ul>
            {events
              .filter((e) => new Date(e.date).toDateString() === selectedDate.toDateString())
              .map((e, i) => (
                <li key={i}>
                  <strong>{e.title}</strong> - <span>{e.type}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {showForm && (
        <div className="popup-form">
          <form onSubmit={handleSubmit}>
            <h2>Add New Event</h2>
            <label>Event Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
            <label>Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option>Interview</option>
              <option>Deadline</option>
              <option>Event</option>
            </select>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCloseForm}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
