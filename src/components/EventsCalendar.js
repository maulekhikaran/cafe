// EventsCalendar.js

import React from 'react';
import './EventsCalendar.css';

const EventsCalendar = () => {
  return (
    <div className="events-calendar">
      <h2>Events Calendar</h2>
      <div className="event">
        <h3>Open Mic Night</h3>
        <p>Date: June 15, 2024</p>
        <p>Time: 7:00 PM - 10:00 PM</p>
        <p>Description: Join us for our weekly open mic night! Bring your talent and enjoy a fun evening of music, poetry, and more.</p>
      </div>
      <div className="event">
        <h3>Art Exhibition</h3>
        <p>Date: June 22, 2024</p>
        <p>Time: 6:00 PM - 9:00 PM</p>
        <p>Description: Explore the works of local artists at our art exhibition. Admission is free, and light refreshments will be served.</p>
      </div>
      {/* Add more events */}
    </div>
  );
}

export default EventsCalendar;
