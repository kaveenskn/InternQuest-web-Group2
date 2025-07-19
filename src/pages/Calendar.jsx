import React, { useState } from 'react';
import "../styles/Calendar.css";


const Calendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

 const currentDate = new Date();
    
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

   const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
};

const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
};
    
  return (
      <div className="calendar-app">
            <div className="calendar">
                <h1 className="heading">Calendar</h1>
                <div className="navigate-date">
                    <h2 className="month">{monthsOfYear[currentMonth]}</h2>
                    <h2 className="year">{currentYear}</h2>
                    <div className="buttons">
    <i 
        className="bx bx-chevron-left" 
        onClick={prevMonth}
    ></i>
    <i 
        className="bx bx-chevron-right" 
        onClick={nextMonth}
    ></i>
</div>
                </div>
                <div className="weekdays">
    {daysOfWeek.map((day) => (
        <span key={day}>{day}</span>
    ))}
</div>
                <div className="days">
    {/* Empty cells for days before the 1st of the month */}
    {[...Array(firstDayOfMonth).keys()].map((_, index) => (
        <span key={`empty-${index}`} className="empty" />
    ))}
    
    {/* Days of the current month */}
    {[...Array(daysInMonth).keys()].map((day) => {
        const date = day + 1;
        const isCurrentDay = 
            date === currentDate.getDate() && 
            currentMonth === currentDate.getMonth() && 
            currentYear === currentDate.getFullYear();
            
        return (
            <span 
                key={`day-${date}`} 
                className={isCurrentDay ? 'current-day' : ''}
            >
                {date}
            </span>
        );
    })}
</div>
            </div>
            
            {/* Event Management Section */}
            <div className="events">
                {/* Event Popup */}
                <div className="event-popup">
                    <div className="time-input">
                        <div className="event-popup-time">Time</div>
                        <input type="number" name="hours" min="0" max="24" className="hours" />
                        <span>:</span>
                        <input type="number" name="minutes" min="0" max="59" className="minutes" />
                    </div>
                    <textarea 
                        placeholder="Enter Event Text (Maximum 60 Characters)" 
                        maxLength="60"
                    ></textarea>
                    <div className="event-popup-buttons">
                        <button className="event-popup-btn">Add Event</button>
                        <button className="close-event-popup">
                            <i className="bx bx-x"></i>
                        </button>
                    </div>
                </div>
                
                {/* Event Display */}
                <div className="event">
                    <div className="event-date-wrapper">
                        <div className="event-date">May 15, 2024</div>
                        <div className="event-time">10:00</div>
                    </div>
                    <div className="event-text">Meeting with John</div>
                    <div className="event-buttons">
                        <i className="bx bxs-edit-alt"></i>
                        <i className="bx bxs-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Calendar