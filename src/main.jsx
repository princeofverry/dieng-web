import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import './index.css'
import Homepage from './pages/homepage/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
  </React.StrictMode>,
)
