// CalendarPage.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Calendar.css"

const CalendarPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
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

  const filteredEvents = events.filter(
    (e) =>
      new Date(e.date).toDateString() === selectedDate.toDateString() &&
      e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="calendar-page">
      <div className="header">
        <h1>InternQuest Calendar</h1>
        <p>Track your interviews, deadlines, and networking events</p>
        <div className="top-bar">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="add-event-btn" onClick={handleAddEvent}>
            + Add Event
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="calendar-section">
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>

        <div className="sidebar">
          <div className="event-section">
            <h3>Upcoming Events</h3>
            {filteredEvents.length === 0 ? (
              <p>No events on this day.</p>
            ) : (
              filteredEvents.map((e, i) => (
                <div className="event-card" key={i}>
                  <h4>{e.title}</h4>
                  <p>{e.type}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="popup-form">
          <form onSubmit={handleSubmit}>
            <h2>Add New Event</h2>
         <label style={{ color: "black" }}>Event Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
             <label style={{ color: "black" }}>Type</label>
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <option>Interview</option>
              <option>Deadline</option>
              <option>Event</option>
            </select>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCloseForm}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
