// Import modul react-router-dom
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Festival from './page/festival';
import Destinasi from './page/destinasi.jsx';
import './index.css';
import Homepage from './page/homepage.jsx';
import Lampion from './page/lampion';
import Penginapan from './page/penginapan';
import Aboutus from './page/aboutus';

// Render komponen dengan React Router v6
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/Lampion" element={<Lampion />} />
        <Route path="/Penginapan" element={<Penginapan />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        {/* Tambahkan rute lain jika diperlukan */}
      </Routes>
    </Router>
  </React.StrictMode>,
);
