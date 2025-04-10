import React, { useState } from 'react';
import '../styles/Events.css';

function Events() {
  const [showPastEvents, setShowPastEvents] = useState(false);
  
  // England Squash Masters events based on their forecast
  const mastersEvents = [
    {
      id: 'esm-1',
      title: "British Open Masters",
      date: "21-26 May 2025",
      venue: "The Hallamshire Tennis & Squash Club, Sheffield",
      deadline: "23 April 2025",
      status: "Coming Soon",
      details: "The premier event in the Masters calendar",
      link: "https://www.englandsquashmasters.co.uk/Events/EventDetails.aspx?@EventID=149"
    },
    {
      id: 'esm-2',
      title: "North of England Masters",
      date: "13-15 September 2024",
      venue: "Pontefract Squash Club",
      deadline: "30 August 2024",
      status: "Closed for Entry",
      details: "Regional masters tournament",
      link: "https://www.englandsquashmasters.co.uk/Site/Event.aspx?EventID=1"
    },
    {
      id: 'esm-3',
      title: "East of England Masters",
      date: "11-13 October 2024",
      venue: "Ipswich Sports Club",
      deadline: "27 September 2024",
      status: "Closed for Entry",
      details: "Regional masters tournament",
      link: "https://www.englandsquashmasters.co.uk/Site/Event.aspx?EventID=2"
    },
    {
      id: 'esm-4',
      title: "England Masters Home Internationals vs Scotland",
      date: "25-27 April 2025",
      venue: "National Squash Centre, Manchester",
      deadline: "28 March 2025",
      status: "Coming Soon",
      details: "International team competition",
      link: "https://www.englandsquashmasters.co.uk/Site/Event.aspx?EventID=10"
    },
    {
      id: 'esm-5',
      title: "West of England Masters",
      date: "22-24 November 2024",
      venue: "Exeter Golf & Country Club",
      deadline: "8 November 2024",
      status: "Open for Entry",
      details: "Regional masters tournament",
      link: "https://www.englandsquashmasters.co.uk/Site/Event.aspx?EventID=3"
    },
    {
      id: 'esm-6',
      title: "South of England Masters",
      date: "17-19 January 2025",
      venue: "St. George's Hill, Weybridge",
      deadline: "3 January 2025",
      status: "Coming Soon",
      details: "Regional masters tournament",
      link: "https://www.englandsquashmasters.co.uk/Site/Event.aspx?EventID=5"
    },
    {
      id: 'esm-7',
      title: "Midlands Masters",
      date: "14-16 February 2025",
      venue: "Wolverhampton Lawn Tennis & Squash Club",
      deadline: "31 January 2025",
      status: "Coming Soon",
      details: "Regional masters tournament",
      link: "https://www.englandsquashmasters.co.uk/Site/Event.aspx?EventID=6"
    },
    {
      id: 'esm-8',
      title: "England Masters National Championships",
      date: "14-16 March 2025",
      venue: "National Squash Centre, Manchester",
      deadline: "28 February 2025",
      status: "Coming Soon",
      details: "National championships for all masters age categories",
      link: "https://www.englandsquashmasters.co.uk/Site/Event.aspx?EventID=7"
    },
    {
      id: 'esm-9',
      title: "Masters Home Internationals - Ireland",
      date: "11-13 April 2025",
      venue: "Dublin, Ireland",
      deadline: "14 March 2025",
      status: "Coming Soon",
      details: "International team competition in Ireland",
      link: "https://www.englandsquashmasters.co.uk/Site/Event.aspx?EventID=8"
    },
    {
      id: 'esm-10',
      title: "European Masters Championships",
      date: "4-7 June 2025",
      venue: "Cologne, Germany",
      deadline: "1 May 2025",
      status: "Coming Soon",
      details: "European championships for masters players from all countries",
      link: "https://www.englandsquashmasters.co.uk/Site/Event.aspx?EventID=11"
    },
    {
      id: 'esm-11',
      title: "London Masters Open",
      date: "10-12 October 2024",
      venue: "Coolhurst Tennis & Squash Club, London",
      deadline: "26 September 2024",
      status: "Closed for Entry",
      details: "Regional masters tournament",
      link: "https://www.englandsquashmasters.co.uk/Site/Event.aspx?EventID=4"
    },
    {
      id: 'esm-12',
      title: "World Masters Squash Championships",
      date: "18-25 August 2025",
      venue: "To be confirmed",
      deadline: "15 July 2025",
      status: "Coming Soon",
      details: "The premier international masters event held every two years",
      link: "https://www.worldsquash.org/world-championships/"
    }
  ];

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

  const sortedEvents = [...mastersEvents].sort((a, b) => {
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