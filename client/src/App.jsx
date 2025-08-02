import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Report from './pages/Report';
import Dashboard from './pages/Dashboard';

function App() {
  return (

      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>

  );
}

export default App;