import React, { useState } from 'react';
import './eduSearch.css'; 

function EducationSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default EducationSearchBar;
