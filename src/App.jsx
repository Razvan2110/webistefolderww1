import React from 'react';
import './App.css';
import NavigationBar from './NavBar/NavigationBar'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './NavBar/FolOverview/Overview';
import Battles from './NavBar/FolBattles/Battles';
import ImportantFigures from './NavBar/FolImportantFigures/ImportantFigures';
import SearchBattles from './NavBar/FolSearchBattles/SearchBattles';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar /> {/* Use NavigationBar here */}
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/battles" element={<Battles />} />
          <Route path="/figures" element={<ImportantFigures />} />
          <Route path="/search" element={<SearchBattles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;