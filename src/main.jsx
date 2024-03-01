// Import modul react-router-dom
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Festival from './page/festival';
import Destinasi from './page/destinasi.jsx';
import './index.css';
import Homepage from './page/homepage.jsx';
import Kirab from './page/kirabbudaya';
import Penginapan from './page/penginapan';
import Aboutus from './page/aboutus';
import Footer from './components/Footer';
import Merchinary from './page/merchinary';
import Menjer from './page/menjer';
import Carica from './page/carica';

// Render komponen dengan React Router v6
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/Menjer" element={<Menjer />} />
        <Route path="/Kirab" element={<Kirab />} />
        <Route path="/Penginapan" element={<Penginapan />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Merchinary" element={<Merchinary />} />
        <Route path="/Carica" element={<Carica />} />
        {/* Tambahkan rute lain jika diperlukan */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
