import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import '../styles/Events.css';

function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [showPastEvents, setShowPastEvents] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase.from('events').select('*');
      if (error) setError(error.message);
      else setEvents(data);
    }
    fetchEvents();
  }, []);

  // Helper function to parse date strings into Date objects
  const parseEventDate = (dateString) => {
    const startDateStr = dateString.split("-")[0].trim();
    const monthYearPart = dateString.replace(/\d+-\d+\s+/, "").trim();
    const day = parseInt(startDateStr, 10);
    const monthYear = monthYearPart.split(" ");
    const month = monthYear[0];
    const year = parseInt(monthYear[1], 10);
    const months = {
      "January": 0, "February": 1, "March": 2, "April": 3,
      "May": 4, "June": 5, "July": 6, "August": 7,
      "September": 8, "October": 9, "November": 10, "December": 11
    };
    return new Date(year, months[month], day);
  };

  const parseDeadlineDate = (deadlineStr) => {
    const parts = deadlineStr.split(" ");
    const day = parseInt(parts[0], 10);
    const month = parts[1];
    const year = parseInt(parts[2], 10);
    const months = {
      "January": 0, "February": 1, "March": 2, "April": 3,
      "May": 4, "June": 5, "July": 6, "August": 7,
      "September": 8, "October": 9, "November": 10, "December": 11
    };
    return new Date(year, months[month], day);
  };
  
  const currentDate = new Date();
  
  const isEventInPast = (dateString) => {
    const eventDate = parseEventDate(dateString);
    return eventDate < currentDate;
  };
  
  const getEventStatus = (event) => {
    const closingDate = parseDeadlineDate(event.deadline);
    if (closingDate < currentDate) {
      return "Closed for Entry";
    }
    const twoWeeksFromNow = new Date();
    twoWeeksFromNow.setDate(currentDate.getDate() + 14);
    if (closingDate <= twoWeeksFromNow) {
      return "Last few days";
    }
    const twoMonthsFromNow = new Date();
    twoMonthsFromNow.setMonth(currentDate.getMonth() + 2);
    const eventDate = parseEventDate(event.date);
    if (eventDate <= twoMonthsFromNow) {
      return "Open for Entry";
    }
    return event.status;
  };

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseEventDate(a.date);
    const dateB = parseEventDate(b.date);
    return dateA - dateB;
  });
  
  const filteredEvents = sortedEvents.filter(event => {
    if (showPastEvents) {
      return true;
    }
    return !isEventInPast(event.date);
  });

  const handleToggleChange = () => {
    setShowPastEvents(prevState => !prevState);
  };

  return (
    <div className="events-container">
      <div className="content-section">
        <div className="section-header">
          <span className="section-tag">Tournaments</span>
          <h2>Masters <span className="highlight">Events</span></h2>
          <div className="accent-line"></div>
        </div>
        
        <div className="constrained-content">
          <p className="intro-text">
            Find information about upcoming Masters tournaments across England and beyond. These events are open to Scottish players.
          </p>
          
          <div className="events-controls">
            <label className="toggle-container">
              <input 
                type="checkbox" 
                checked={showPastEvents}
                onChange={handleToggleChange}
              />
              <span className="toggle-label">Show past events</span>
            </label>
          </div>
        </div>
        
        <div className="events-table-container">
          <table className="events-table">
            <thead>
              <tr>
                <th>Tournament</th>
                <th>Date</th>
                <th>Venue</th>
                <th>Closing Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => {
                  const actualStatus = getEventStatus(event);
                  return (
                    <tr key={event.id} className="event-row">
                      <td className="event-title">
                        <a 
                          href={event.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="event-link"
                        >
                          {event.title}
                        </a>
                      </td>
                      <td>{event.date}</td>
                      <td>{event.venue}</td>
                      <td>{event.deadline}</td>
                      <td className={`status ${actualStatus.replace(/\s+/g, '-').toLowerCase()}`}>
                        {actualStatus}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="no-events-message">No upcoming events to display</td>
                </tr>
              )}
            </tbody>
          </table>
          
          <div className="events-note constrained-content">
            <p>For more information or to enter the event, please click the Tournament name above.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;