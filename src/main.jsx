// Import modul react-router-dom
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Festival from './page/festival';
import './index.css';
import Homepage from './page/homepage.jsx';

// Render komponen dengan React Router v6
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/Festival" element={<Festival />} />
        {/* Tambahkan rute lain jika diperlukan */}
      </Routes>
    </Router>
  </React.StrictMode>,
);
