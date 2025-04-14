import React, { useState } from 'react';
import '../styles/MHI.css';

function MHI() {
  const [activeTab, setActiveTab] = useState('2024');
  const [expandedTeam, setExpandedTeam] = useState(null);
  
  // Toggle team accordion
  const toggleTeam = (team) => {
    if (expandedTeam === team) {
      setExpandedTeam(null);
    } else {
      setExpandedTeam(team);
    }
  };

  return (
    <div className="mhi-container">
      <div className="content-section">
        <div className="section-header">
          <span className="section-tag">National Teams</span>
          <h2>Masters <span className="highlight">Home Internationals</span></h2>
          <div className="accent-line"></div>
        </div>

        <div className="constrained-content">
          <p className="intro-text">
            The Masters Home Internationals is an annual competition where Scotland competes against England, 
            Wales and Ireland. Teams of men and women represent their countries in different age categories.
          </p>
        </div>

        <div className="mhi-info-grid">
          <div className="mhi-card">
            <div className="card-header">
              <h3>About the Competition</h3>
            </div>
            <div className="card-content">
              <p>The Home Internationals is one of the highlights of the Masters squash calendar, with players representing their countries in age groups from Over 35 to Over 75.</p>
              <p>The competition features both men's and women's teams, with each match typically consisting of 5 players (3 in some of the older age groups).</p>
              <p>The event rotates between the four home nations, with each country hosting approximately once every four years.</p>
            </div>
          </div>

          <div className="mhi-card">
            <div className="card-header">
              <h3>Selection Criteria</h3>
            </div>
            <div className="card-content">
              <p>Selection for the Scottish Masters teams is based on the following criteria:</p>
              <p className="criteria-text">Scottish Squash Masters Rankings are the primary consideration for team selection. Performance in Scottish Squash Masters tournaments throughout the season is also heavily weighted.</p>
              <p className="criteria-text">The selection committee also takes into account performance in other recognized tournaments, as well as any previous international experience.</p>
              <p className="criteria-text">Player fitness and current form are evaluated, and all selected players must be available for the entire event duration.</p>
              <p>Players interested in being considered for selection should ensure they participate in Scottish Squash Masters events throughout the season.</p>
            </div>
          </div>

          <div className="mhi-card">
            <div className="card-header">
              <h3>How to Get Involved</h3>
            </div>
            <div className="card-content">
              <p>If you're interested in representing Scotland at the Home Internationals:</p>
              <p className="criteria-text">Regular participation in Scottish Masters tournaments is essential to be considered for selection. Please register your interest directly with the Scottish Masters Committee.</p>
              <p className="criteria-text">All players must have a current Scottish Squash membership and make themselves available for the full duration of the competition.</p>
              <p>Selection for teams is typically announced 4-6 weeks before the event.</p>
            </div>
          </div>
        </div>

        <div className="home-internationals-schedule constrained-content">
          <h3>Home Internationals Schedule</h3>
          <div className="schedule-table-container">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>England</th>
                  <th>Ireland</th>
                  <th>Scotland</th>
                  <th>Wales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="year-cell">2025</td>
                  <td>
                    Nottingham<br/>
                    25/26 April<br/>
                    MO50, MO70,<br/>
                    WO50
                  </td>
                  <td>
                    Galway<br/>
                    11/12 April<br/>
                    MO35, MO55,<br/>
                    MO75, WO55
                  </td>
                  <td>
                    Edinburgh<br/>
                    2/3 May<br/>
                    MO45, MO65,<br/>
                    WO45, WO65
                  </td>
                  <td>
                    Cardiff<br/>
                    9/10 May<br/>
                    MO40, MO60,<br/>
                    WO35/40, WO60
                  </td>
                </tr>
                <tr>
                  <td className="year-cell">2024</td>
                  <td>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/2024_Master_Home_International_England.pdf" target="_blank" rel="noopener noreferrer">Nottingham</a><br/>
                    12/13 April<br/>
                    <a href="https://www.englandsquashmasters.co.uk/Site/HomeInternationalTeamStandings.aspx?@eventagegroupid=1933">MO45</a> Sessions <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=1&agegroup=MO45">1</a>, <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=2&agegroup=MO45">2</a>, <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=3&agegroup=MO45">3</a><br/>
                    <a href="https://www.englandsquashmasters.co.uk/Site/HomeInternationalTeamStandings.aspx?@eventagegroupid=1934">MO65</a> Sessions <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=1&agegroup=MO65">1</a>, <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=2&agegroup=MO65">2</a>, <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=3&agegroup=MO65">3</a><br/>
                    <a href="https://www.englandsquashmasters.co.uk/Site/HomeInternationalTeamStandings.aspx?@eventagegroupid=1935">WO45</a> Sessions <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=1&agegroup=WO45">1</a>, <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=2&agegroup=WO45">2</a>, <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=3&agegroup=WO45">3</a><br/>
                    <a href="https://www.englandsquashmasters.co.uk/Site/HomeInternationalTeamStandings.aspx?@eventagegroupid=1936">WO65</a> Sessions <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=1&agegroup=WO65">1</a>, <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=2&agegroup=WO65">2</a>, <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=139&session=3&agegroup=WO65">3</a>
                  </td>
                  <td>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/2024_Master_Home_International_Ireland.pdf" target="_blank" rel="noopener noreferrer">Dublin</a><br/>
                    26/27 April<br/>
                    MO50 MO70 WO50<br/>
                    <a href="https://www.sportyhq.com/tournament/view/Home-Internationals-Dublin-2024-M50-W-50-M70" target="_blank" rel="noopener noreferrer">Detailed Results</a><br/>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/Ireland_Standings_Session3A.pdf" target="_blank" rel="noopener noreferrer">Summary Tables</a>
                  </td>
                  <td>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/2024_Master_Home_International_Scotland.pdf" target="_blank" rel="noopener noreferrer">Edinburgh</a><br/>
                    19/20 April<br/>
                    MO40 Sessions <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/MO40_Session_1.pdf" target="_blank" rel="noopener noreferrer">1</a>, <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/MO40_Session_2.pdf" target="_blank" rel="noopener noreferrer">2</a>, <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/MO40_Session_3.pdf" target="_blank" rel="noopener noreferrer">3</a><br/>
                    MO60 Sessions <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/MO60_Session_1.pdf" target="_blank" rel="noopener noreferrer">1</a>, <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/MO60_Session_2.pdf" target="_blank" rel="noopener noreferrer">2</a>, <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/MO60_Session_3.pdf" target="_blank" rel="noopener noreferrer">3</a><br/>
                    WO35/40 Sessions <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/WO3540_Session_1.pdf" target="_blank" rel="noopener noreferrer">1</a>, <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/WO3540_Session_2.pdf" target="_blank" rel="noopener noreferrer">2</a>, <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/WO3540_Session_3.pdf" target="_blank" rel="noopener noreferrer">3</a><br/>
                    WO60 Sessions <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/WO60_Session_1.pdf" target="_blank" rel="noopener noreferrer">1</a>, <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/WO60_Session_2.pdf" target="_blank" rel="noopener noreferrer">2</a>, <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/WO60_Session_3.pdf" target="_blank" rel="noopener noreferrer">3</a>
                  </td>
                  <td>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/2024_Master_Home_International_Wales.pdf" target="_blank" rel="noopener noreferrer">Cardiff</a><br/>
                    3/4 May<br/>
                    MO35 MO55 MO75 WO55<br/>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/2024_Master_Home_International_Wales_Session_1_Results.pdf" target="_blank" rel="noopener noreferrer">Session 1 Results</a><br/>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/2024_Master_Home_International_Wales_Session_2_Results.pdf" target="_blank" rel="noopener noreferrer">Session 2 Results</a><br/>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2024/2024_Master_Home_International_Wales_Session_3_Results.pdf" target="_blank" rel="noopener noreferrer">Session 3 Results</a>
                  </td>
                </tr>
                <tr>
                  <td className="year-cell">2023</td>
                  <td>
                    <a href="/WebsiteContent/Files/Home_Internationals/2023/2023_Home_Internationals_Masters_England.pdf">Nottingham</a><br/>
                    28/29 April<br/>
                    <a href="https://www.englandsquashmasters.co.uk/Site/HomeInternationalTeamStandings.aspx?@eventagegroupid=1716">MO40</a> Sessions <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=124&session=1&agegroup=MO40">1</a>, <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=124&session=2&agegroup=MO40">2</a>, <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResultsKiosk.aspx?eventid=124&session=3&agegroup=MO40">3</a><br/>
                    <a href="https://www.englandsquashmasters.co.uk/Site/HomeInternationalTeamStandings.aspx?@eventagegroupid=1717">MO60</a>, <a href="https://www.englandsquashmasters.co.uk/Site/HomeInternationalTeamStandings.aspx?@eventagegroupid=1718">WO35/40</a>, <a href="https://www.englandsquashmasters.co.uk/Site/HomeInternationalTeamStandings.aspx?@eventagegroupid=1719">WO60</a>
                  </td>
                  <td>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2023/2023_Home_Internationals_Masters_Ireland.pdf">Dublin</a><br/>
                    21/22 April<br/>
                    MO45 MO65 WO45
                  </td>
                  <td>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2023/2023_Home_Internationals_Masters_Scotland.pdf" target="_blank" rel="noopener noreferrer">Edinburgh</a><br/>
                    5/6 May<br/>
                    MO35 MO55 MO75 WO55
                  </td>
                  <td>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2023/2023_Home_Internationals_Masters_Wales.pdf" target="_blank" rel="noopener noreferrer">Cardiff</a><br/>
                    12/13 May<br/>
                    MO50 MO70 WO50
                  </td>
                </tr>
                <tr>
                  <td className="year-cell">2022</td>
                  <td>
                    <a href="/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_England.pdf" target="_blank" rel="noopener noreferrer" title="Home International England">Nottingham</a><br/>
                    13/14 May<br/>
                    <a href="https://www.englandsquashmasters.co.uk/Site/HomeInternationalTeamStandings.aspx?@eventagegroupid=1569" title="MO35">MO35</a> Session{" "}
                    <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResults.aspx?eventid=115&session=1&agegroup=MO35" title="Session 1">1</a>,{" "}
                    <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResults.aspx?eventid=115&session=2&agegroup=MO35" title="Session 2">2</a>,{" "}
                    <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResults.aspx?eventid=115&session=3&agegroup=MO35" title="Session 3">3</a><br/>
                    <a href="https://www.englandsquashmasters.co.uk/Site/HomeInternationalTeamStandings.aspx?@eventagegroupid=1570" title="MO55">MO55</a> Session{" "}
                    <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResults.aspx?eventid=115&session=1&agegroup=MO55" title="Session 1">1</a>,{" "}
                    <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResults.aspx?eventid=115&session=2&agegroup=MO55" title="Session 2">2</a>,{" "}
                    <a href="https://www.englandsquashmasters.co.uk/site/HomeInternationalsMatchResults.aspx?eventid=115&session=3&agegroup=MO55" title="Session 3">3</a>
                  </td>
                  <td>
                    <a href="/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_Ireland.pdf" target="_blank" rel="noopener noreferrer">Galway</a><br/>
                    22-23 April<br/>
                    <a href="/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_Ireland_MO40_Detailed_Results.pdf" target="_blank" rel="noopener noreferrer">MO40</a>{" "}
                    <a href="/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_Ireland_MO60_Detailed_Results.pdf" target="_blank" rel="noopener noreferrer">MO60</a>{" "}
                    <a href="/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_Ireland_WO3540_Detailed_Results.pdf" target="_blank" rel="noopener noreferrer">WO35/40</a>{" "}
                    <a href="/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_Ireland_WO60_Detailed_Results.pdf" target="_blank" rel="noopener noreferrer">WO60</a>
                  </td>
                  <td>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_Scotland.pdf" target="_blank" rel="noopener noreferrer" title="Home International Scotland">Edinburgh</a><br/>
                    6/7 May<br/>
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_Scotland_MO50_Detailed_Results.pdf" target="_blank" rel="noopener noreferrer" title="MO50">MO50</a>{" "}
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_Scotland_MO70_Detailed_Results.pdf" target="_blank" rel="noopener noreferrer" title="MO70">MO70</a>{" "}
                    <a href="https://www.englandsquashmasters.co.uk/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_Scotland_WO50_Detailed_Results.pdf" target="_blank" rel="noopener noreferrer" title="WO50">WO50</a>
                  </td>
                  <td>
                    <a href="/WebsiteContent/Files/Home_Internationals/2022/2022_Master_Home_International_Wales.pdf" target="_blank" rel="noopener noreferrer">Cardiff</a><br/>
                    20-21 May<br/>
                    MO45 MO65 WO45
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="table-legend">
            <p>MO = Men's Over, WO = Women's Over (age categories)</p>
            <p>Click on event locations or session numbers for detailed results</p>
          </div>
        </div>

        <div className="mhi-event-details constrained-content">
          <h3>Upcoming Event</h3>
          <div className="event-card">
            <div className="event-header">
              <h4>2025 Masters Home Internationals</h4>
              <span className="event-date">April 24-25, 2025</span>
            </div>
            <div className="event-info">
              <div className="info-group">
                <strong>Host</strong>
                <span>Scotland</span>
              </div>
              <div className="info-group">
                <strong>Venue</strong>
                <span>Edinburgh Sports Club</span>
              </div>
              <div className="info-group">
                <strong>Age Groups</strong>
                <span>Men & Women O35-O75</span>
              </div>
              <div className="info-group">
                <strong>Team Selection</strong>
                <span>March 2025</span>
              </div>
            </div>
            <div className="event-description">
              <p>The 2025 Masters Home Internationals will be hosted by Scottish Squash at the Edinburgh Sports Club. The event will feature men's and women's teams from Scotland, England, Ireland, and Wales competing across various age categories.</p>
              <p>The competition will take place over two days with a format of round-robin matches between all nations. Team announcements will be made approximately 6 weeks before the event.</p>
            </div>
          </div>
        </div>

        <div className="mhi-teams constrained-content">
          <h3>2024 Scottish Teams</h3>
          <div className="accordion">
            <div className="accordion-item">
              <div 
                className={`accordion-header ${expandedTeam === 'M35' ? 'active' : ''}`}
                onClick={() => toggleTeam('M35')}
              >
                <h4>Men's O35</h4>
                <span className="accordion-icon">{expandedTeam === 'M35' ? '−' : '+'}</span>
              </div>
              {expandedTeam === 'M35' && (
                <div className="accordion-content">
                  <ul className="team-list">
                    <li>Jacques Laas (Captain)</li>
                    <li>Calum Philip</li>
                    <li>Fraser MacDonald</li>
                    <li>Joseph Ewen</li>
                    <li>Rene Van Oorschot</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Other accordion items with proper onClick handlers */}
          </div>
        </div>

        <div className="mhi-results">
          <h3>Previous Results</h3>
          
          <div className="results-tabs">
            <button 
              className={`tab-button ${activeTab === '2024' ? 'active' : ''}`} 
              onClick={() => setActiveTab('2024')}
            >
              2024
            </button>
            <button 
              className={`tab-button ${activeTab === '2023' ? 'active' : ''}`} 
              onClick={() => setActiveTab('2023')}
            >
              2023
            </button>
            <button 
              className={`tab-button ${activeTab === '2022' ? 'active' : ''}`} 
              onClick={() => setActiveTab('2022')}
            >
              2022
            </button>
          </div>

          {activeTab === '2024' && (
            <table className="results-table">
              <thead>
                <tr>
                  <th>Age Group</th>
                  <th>Gold</th>
                  <th>Silver</th>
                  <th>Bronze</th>
                  <th>Scotland Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Men O35</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O40</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>Scotland</td>
                  <td>3rd</td>
                </tr>
                <tr>
                  <td>Men O45</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O50</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>Scotland</td>
                  <td>3rd</td>
                </tr>
                <tr>
                  <td>Men O55</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O60</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Ireland</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O65</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>Scotland</td>
                  <td>3rd</td>
                </tr>
                <tr>
                  <td>Men O70</td>
                  <td>Scotland</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>1st</td>
                </tr>
                <tr>
                  <td>Men O75</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Women O35</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Women O40</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Ireland</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Women O50</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>Scotland</td>
                  <td>3rd</td>
                </tr>
                <tr>
                  <td>Women O60</td>
                  <td>Scotland</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>1st</td>
                </tr>
              </tbody>
            </table>
          )}

          {activeTab === '2023' && (
            <table className="results-table">
              <thead>
                <tr>
                  <th>Age Group</th>
                  <th>Gold</th>
                  <th>Silver</th>
                  <th>Bronze</th>
                  <th>Scotland Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Men O35</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>Scotland</td>
                  <td>3rd</td>
                </tr>
                <tr>
                  <td>Men O40</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Ireland</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O45</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O50</td>
                  <td>Scotland</td>
                  <td>England</td>
                  <td>Wales</td>
                  <td>1st</td>
                </tr>
                <tr>
                  <td>Men O55</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O60</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O65</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Ireland</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O70</td>
                  <td>Scotland</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>1st</td>
                </tr>
                <tr>
                  <td>Women O35</td>
                  <td>England</td>
                  <td>Wales</td>
                  <td>Scotland</td>
                  <td>3rd</td>
                </tr>
                <tr>
                  <td>Women O40</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Women O50</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Ireland</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Women O60</td>
                  <td>Scotland</td>
                  <td>England</td>
                  <td>Wales</td>
                  <td>1st</td>
                </tr>
              </tbody>
            </table>
          )}

          {activeTab === '2022' && (
            <table className="results-table">
              <thead>
                <tr>
                  <th>Age Group</th>
                  <th>Gold</th>
                  <th>Silver</th>
                  <th>Bronze</th>
                  <th>Scotland Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Men O35</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Ireland</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O40</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>Scotland</td>
                  <td>3rd</td>
                </tr>
                <tr>
                  <td>Men O45</td>
                  <td>Scotland</td>
                  <td>England</td>
                  <td>Wales</td>
                  <td>1st</td>
                </tr>
                <tr>
                  <td>Men O50</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O55</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>Scotland</td>
                  <td>3rd</td>
                </tr>
                <tr>
                  <td>Men O60</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Men O65</td>
                  <td>Scotland</td>
                  <td>England</td>
                  <td>Ireland</td>
                  <td>1st</td>
                </tr>
                <tr>
                  <td>Men O70</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Women O40</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Ireland</td>
                  <td>2nd</td>
                </tr>
                <tr>
                  <td>Women O50</td>
                  <td>Scotland</td>
                  <td>England</td>
                  <td>Wales</td>
                  <td>1st</td>
                </tr>
                <tr>
                  <td>Women O60</td>
                  <td>England</td>
                  <td>Scotland</td>
                  <td>Wales</td>
                  <td>2nd</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        <div className="mhi-contact constrained-content">
          <div className="mhi-card">
            <div className="card-header">
              <h3>Contact Information</h3>
            </div>
            <div className="card-content">
              <p>For more information about the Masters Home Internationals or selection for Scottish teams, please contact:</p>
              <div className="contact-info">
                <p><strong>Scottish Squash Masters Committee</strong><br />
                Email: masters@scottishsquash.org</p>
                <p><strong>Team Coordinator</strong><br />
                Name: Peter O'Neill<br />
                Email: poneill@scottishsquash.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MHI;