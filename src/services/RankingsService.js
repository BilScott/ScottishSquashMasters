export const fetchRankingsData = async () => {
  try {
    // The CSV should be in the public folder for direct access
    const response = await fetch('/24_25_rankings.csv');
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching rankings data:', error);
    return null;
  }
};

// Add a function to parse the CSV data
export const parseRankingsData = (csvText) => {
  if (!csvText) return { menAgeGroups: [], womenAgeGroups: [], rankings: [] };
  
  const lines = csvText.split('\n');
  const headers = lines[0].split(',');
  
  const menAgeGroups = new Set();
  const womenAgeGroups = new Set();
  const rankings = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const values = line.split(',');
    if (values.length < 8) continue;
    
    const ageGroup = values[0];
    
    // Add to appropriate age group set
    if (ageGroup.startsWith('M')) {
      menAgeGroups.add(ageGroup);
    } else if (ageGroup.startsWith('L')) {
      womenAgeGroups.add(ageGroup);
    }
    
    // Create ranking object
    rankings.push({
      ageGroup: ageGroup,
      ranking: parseInt(values[1], 10),
      player: values[2],
      played: parseInt(values[3], 10),
      scores: [
        parseFloat(values[4]) || 0,
        parseFloat(values[5]) || 0,
        parseFloat(values[6]) || 0,
        parseFloat(values[7]) || 0,
      ],
      total: parseFloat(values[8]) || 0
    });
  }
  
  return {
    menAgeGroups: Array.from(menAgeGroups).sort(),
    womenAgeGroups: Array.from(womenAgeGroups).sort(),
    rankings
  };
};