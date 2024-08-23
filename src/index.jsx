import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home/index.jsx'
import Survey from './pages/Survey/index.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
