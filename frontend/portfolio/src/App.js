import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioDashboard from './PortfolioDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioDashboard />} />
        <div>
          <h1>Resume Download</h1>
          <PDFDownloader pdfUrl="public/Layla_Abo_Saad_cv.pdf" fileName="Layla_Abo_Saad_cv.pdf" />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
