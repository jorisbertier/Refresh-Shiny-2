import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home/index.jsx'
import Survey from './pages/Survey/index.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index.jsx'
import Error from './components/Error/index.jsx'
import Freelances from './pages/Freelances/index.jsx'
import { createGlobalStyle } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey/:questionNumber" element={<Survey/>}/>
        <Route path="/freelances" element={<Freelances/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
