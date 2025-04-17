import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Admin() {
  const [csvFile, setCsvFile] = useState(null);
  const [csvUploadStatus, setCsvUploadStatus] = useState('');
  const [event, setEvent] = useState({
    title: '',
    date: '',
    venue: '',
    deadline: '',
    status: '',
    details: '',
    link: ''
  });
  const [eventStatus, setEventStatus] = useState('');

  // Upload CSV to Supabase Storage
  const handleCsvUpload = async (e) => {
    e.preventDefault();
    if (!csvFile) {
      setCsvUploadStatus('Please select a CSV file.');
      return;
    }
    const { error } = await supabase.storage
      .from('rankings')
      .upload('rankings.csv', csvFile, { upsert: true });
    if (error) {
      setCsvUploadStatus('Upload failed: ' + error.message);
    } else {
      setCsvUploadStatus('CSV uploaded successfully!');
    }
  };

  // Add event to Supabase DB
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('events').insert([event]);
    if (error) {
      setEventStatus('Failed to add event: ' + error.message);
    } else {
      setEventStatus('Event added!');
      setEvent({
        title: '',
        date: '',
        venue: '',
        deadline: '',
        status: '',
        details: '',
        link: ''
      });
    }
  };

  const handleEventChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  return (
    <div className="admin-container" style={{ maxWidth: 600, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8 }}>
      <h2>Admin Panel</h2>
      <section style={{ marginBottom: 40 }}>
        <h3>Upload Rankings CSV</h3>
        <form onSubmit={handleCsvUpload}>
          <input
            type="file"
            accept=".csv"
            onChange={e => setCsvFile(e.target.files[0])}
          />
          <button type="submit" style={{ marginLeft: 12 }}>Upload</button>
        </form>
        {csvUploadStatus && <div style={{ marginTop: 10, color: '#104E8B' }}>{csvUploadStatus}</div>}
        <div style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          <strong>Required columns:</strong> Season, Age Group, Ranking, Player, Played, Best Score 1, Best Score 2, Best Score 3, Best Score 4, Total
        </div>
      </section>

      <section>
        <h3>Add New Event</h3>
        <form onSubmit={handleEventSubmit}>
          <div style={{ marginBottom: 10 }}>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={event.title}
              onChange={handleEventChange}
              required
              style={{ width: '100%', padding: 8 }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <input
              type="text"
              name="date"
              placeholder="Date (e.g. 21-26 May 2025)"
              value={event.date}
              onChange={handleEventChange}
              required
              style={{ width: '100%', padding: 8 }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={event.venue}
              onChange={handleEventChange}
              required
              style={{ width: '100%', padding: 8 }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <input
              type="text"
              name="deadline"
              placeholder="Entry Deadline (e.g. 23 April 2025)"
              value={event.deadline}
              onChange={handleEventChange}
              required
              style={{ width: '100%', padding: 8 }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <select
              name="status"
              value={event.status}
              onChange={handleEventChange}
              required
              style={{ width: '100%', padding: 8 }}
            >
              <option value="">Select Status</option>
              <option value="Open for Entry">Open for Entry</option>
              <option value="Closed for Entry">Closed for Entry</option>
              <option value="Last few days">Last few days</option>
              <option value="Coming Soon">Coming Soon</option>
            </select>
          </div>
          <div style={{ marginBottom: 10 }}>
            <input
              type="text"
              name="details"
              placeholder="Details"
              value={event.details}
              onChange={handleEventChange}
              style={{ width: '100%', padding: 8 }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <input
              type="text"
              name="link"
              placeholder="Event Link"
              value={event.link}
              onChange={handleEventChange}
              style={{ width: '100%', padding: 8 }}
            />
          </div>
          <button type="submit">Add Event</button>
        </form>
        {eventStatus && <div style={{ marginTop: 10, color: '#104E8B' }}>{eventStatus}</div>}
      </section>
    </div>
  );
}

export default Admin;