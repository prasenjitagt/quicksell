import React, { useState } from 'react';
import Nav from './components/nav';
import BodyOfData from './components/bodyOfData';
import BodyOfDataUser from './components/bodyOfDataUser';
import BodyOfDataPriority from './components/bodyOfDataPriority';
import './css/App.css'
const App = () => {
  const [selectedFilter, setSelectedFilter] = useState('status');

  // Dynamically render the selected component
  const renderActiveComponent = () => {
    if (selectedFilter === 'status') {
      return <BodyOfData />;
    } else if (selectedFilter === 'user') {
      return <BodyOfDataUser />;
    } else if (selectedFilter === 'priority') {
      return <BodyOfDataPriority />;
    }
  };

  return (
    <div>
      <Nav selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      {/* Render the active component */}
      {renderActiveComponent()}
    </div>
  );
};

export default App;
