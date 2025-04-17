import React, { useState, useEffect } from 'react';
import '../styles/Rankings.css';
import { supabase } from '../supabaseClient';

function Rankings() {
  // State for filters and data
  const [season, setSeason] = useState('');
  const [seasons, setSeasons] = useState([]);
  const [gender, setGender] = useState('men');
  const [ageGroup, setAgeGroup] = useState('o35');
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rankingsData, setRankingsData] = useState({});
  const [csvText, setCsvText] = useState('');

  // Age group options
  const ageGroups = [
    { id: 'o35', label: 'O35' },
    { id: 'o40', label: 'O40' },
    { id: 'o45', label: 'O45' },
    { id: 'o50', label: 'O50' },
    { id: 'o55', label: 'O55' },
    { id: 'o60', label: 'O60' },
    { id: 'o65', label: 'O65' },
    { id: 'o70', label: 'O70' },
    { id: 'o75', label: 'O75' },
    { id: 'o80', label: 'O80' }
  ];

  // Effect to fetch CSV data
  useEffect(() => {
    const fetchRankingsData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.storage
          .from('rankings')
          .download('rankings.csv');
        if (error) {
          setError(error.message);
        } else {
          const text = await data.text();
          setCsvText(text);
          const parsedData = parseCSV(text);

          // Extract unique seasons
          const uniqueSeasons = Array.from(new Set(parsedData.map(row => row['Season']))).sort().reverse();
          setSeasons(uniqueSeasons);
          setSeason(season => season || uniqueSeasons[0] || '');

          // Organize data by season, gender, and age group
          const organized = {};
          parsedData.forEach(entry => {
            const s = entry['Season'];
            if (!s) return;
            const g = entry['Age Group']?.startsWith('M') ? 'men' : 'women';
            const ag = entry['Age Group']?.replace('M', 'o').replace('L', 'o').toLowerCase();
            if (!organized[s]) organized[s] = { men: {}, women: {} };
            if (!organized[s][g][ag]) organized[s][g][ag] = [];
            organized[s][g][ag].push({
              pos: parseInt(entry['Ranking']),
              name: entry['Player'],
              club: '',
              points: parseInt(entry['Total']),
              played: parseInt(entry['Played']),
              scores: [
                parseFloat(entry['Best Score 1']) || 0,
                parseFloat(entry['Best Score 2']) || 0,
                parseFloat(entry['Best Score 3']) || 0,
                parseFloat(entry['Best Score 4']) || 0
              ]
            });
          });
          setRankingsData(organized);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchRankingsData();
  }, []);

  // Effect to update current rankings when filters or data change
  useEffect(() => {
    if (
      rankingsData &&
      rankingsData[season] &&
      rankingsData[season][gender] &&
      rankingsData[season][gender][ageGroup]
    ) {
      setRankings(rankingsData[season][gender][ageGroup]);
    } else {
      setRankings([]);
    }
  }, [season, gender, ageGroup, rankingsData]);

  // Parse CSV text into array of objects
  const parseCSV = (csvText) => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1)
      .filter(line => line.trim() !== '')
      .map(line => {
        const values = line.split(',');
        const entry = {};
        headers.forEach((header, index) => {
          entry[header.trim()] = values[index]?.trim();
        });
        return entry;
      });
  };

  // Handlers
  const handleSeasonChange = (e) => setSeason(e.target.value);
  const handleAgeGroupChange = (e) => setAgeGroup(e.target.value);

  return (
    <div className="rankings-container">
      <div className="content-section">
        <div className="section-header">
          <span className="section-tag">Leaderboard</span>
          <h2>Masters <span className="highlight">Rankings</span></h2>
          <div className="accent-line"></div>
        </div>
        <div className="constrained-content">
          <p className="intro-text">
            Current Scottish Squash Masters rankings are calculated based on tournament performances throughout the season.
          </p>
          <a
            href={`${process.env.PUBLIC_URL}/assets/data/rankings.csv`}
            download
            className="download-csv-btn"
            style={{
              display: 'inline-block',
              margin: '12px 0',
              padding: '8px 16px',
              background: '#003D7E',
              color: '#fff',
              borderRadius: 4,
              textDecoration: 'none'
            }}
          >
            Download Rankings CSV
          </a>
        </div>
        <div className="rankings-filters-container">
          <div className="rankings-filters">
            <div className="filter-group">
              {/* Season Dropdown */}
              <div className="season-filter" style={{ marginRight: 20 }}>
                <select
                  className="age-group-dropdown"
                  value={season}
                  onChange={handleSeasonChange}
                  disabled={seasons.length === 0}
                >
                  {seasons.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              {/* Gender Buttons */}
              <div className="gender-filter">
                <button
                  className={`filter-btn ${gender === 'men' ? 'active' : ''}`}
                  onClick={() => setGender('men')}
                >
                  Men
                </button>
                <button
                  className={`filter-btn ${gender === 'women' ? 'active' : ''}`}
                  onClick={() => setGender('women')}
                >
                  Women
                </button>
              </div>
              {/* Age Group Dropdown */}
              <div className="age-group-filter">
                <select
                  className="age-group-dropdown"
                  value={ageGroup}
                  onChange={handleAgeGroupChange}
                >
                  {ageGroups.map(group => (
                    <option key={group.id} value={group.id}>
                      {group.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="rankings-table-container">
            {loading ? (
              <div className="loading">Loading rankings data...</div>
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : (
              <table className="rankings-table">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Player</th>
                    <th>Played</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.length > 0 ? (
                    rankings.map(player => (
                      <tr key={`${player.pos}-${player.name}`} className="ranking-row">
                        <td className="position">{player.pos}</td>
                        <td>{player.name}</td>
                        <td>{player.played}</td>
                        <td className="points">{player.points}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="no-data-message">No rankings data available for this category</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="rankings-note constrained-content">
          <p>Rankings are updated after each tournament. Points are accumulated over a rolling 12-month period.</p>
        </div>
      </div>
    </div>
  );
}

export default Rankings;