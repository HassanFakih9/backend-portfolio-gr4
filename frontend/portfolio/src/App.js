import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioDashboard from './PortfolioDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioDashboard />} />
       
      </Routes>
    </Router>
  );
}

export default App;
