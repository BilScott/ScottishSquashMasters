import React, { useState, useEffect } from 'react';
import '../styles/Rankings.css';

function Rankings() {
  // State for filters and data
  const [gender, setGender] = useState('men');
  const [ageGroup, setAgeGroup] = useState('o35');
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rankingsData, setRankingsData] = useState({ men: {}, women: {} });
  
  // Age group options
  const ageGroups = [
    { id: 'o35', label: 'O35' },
    { id: 'o40', label: 'O40' },
    { id: 'o45', label: 'O45' },
    { id: 'o50', label: 'O50' },
    { id: 'o55', label: 'O55' },
    { id: 'o60', label: 'O60' },
    { id: 'o65', label: 'O65' },
    { id: 'o70', label: 'O70+' },
    { id: 'o75', label: 'O75' },
    { id: 'o80', label: 'O80' }
  ];

  // Effect to fetch CSV data
  useEffect(() => {
    const fetchRankingsData = async () => {
      setLoading(true);
      try {
        // Log the URL being fetched
        const csvUrl = '/assets/data/24_25_rankings.csv';
        console.log('Fetching CSV from:', csvUrl);
        
        // Fetch the CSV file
        const response = await fetch(csvUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch rankings data: ${response.status} ${response.statusText}`);
        }
        
        const csvText = await response.text();
        console.log('CSV data first 100 chars:', csvText.substring(0, 100)); // Log sample of CSV data
        
        const parsedData = parseCSV(csvText);
        console.log('Parsed data sample:', parsedData.slice(0, 2)); // Log sample of parsed data
        
        const organizedData = organizeRankingsData(parsedData);
        console.log('Organized data keys:', Object.keys(organizedData));
        console.log('Available men age groups:', Object.keys(organizedData.men || {}));
        console.log('Available women age groups:', Object.keys(organizedData.women || {}));
        
        setRankingsData(organizedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching rankings data:', error);
        setError(error.message);
        setLoading(false);
      }
    };
    
    fetchRankingsData();
  }, []);

  // Effect to update current rankings when filters or data change
  useEffect(() => {
    if (rankingsData && rankingsData[gender] && rankingsData[gender][ageGroup]) {
      setRankings(rankingsData[gender][ageGroup]);
    } else {
      setRankings([]);
    }
  }, [gender, ageGroup, rankingsData]);

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

  // Organize data by gender and age group
  const organizeRankingsData = (data) => {
    const organized = {
      men: {},
      women: {}
    };
    
    data.forEach(entry => {
      if (!entry['Age Group']) return;
      
      const gender = entry['Age Group'].startsWith('M') ? 'men' : 'women';
      const ageGroupCode = entry['Age Group'].replace('M', 'o').replace('L', 'o').toLowerCase();
      
      if (!organized[gender][ageGroupCode]) {
        organized[gender][ageGroupCode] = [];
      }
      
      organized[gender][ageGroupCode].push({
        pos: parseInt(entry['Ranking']),
        name: entry['Player'],
        club: '', // Club isn't in the CSV - could be blank or updated if available
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
    
    return organized;
  };

  // Handle age group change
  const handleAgeGroupChange = (e) => {
    setAgeGroup(e.target.value);
  };

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
        </div>
        
        <div className="rankings-filters-container">
          <div className="rankings-filters">
            <div className="filter-group">
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
                      <tr key={player.pos} className="ranking-row">
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