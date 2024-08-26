import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.jsx'
import Survey from './pages/Survey/index.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index.jsx'
import Error from './components/Error/index.jsx'
import Freelances from './pages/Freelances/index.jsx'
import Footer from './components/Footer/index.jsx'
import { SurveyProvider, ThemeProvider } from './utils/context/index.jsx'
import GlobalStyle from './utils/style/GlobalStyle.jsx'
import Results from './pages/Results/index.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
      <SurveyProvider>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/survey/:questionNumber" element={<Survey/>}/>
          <Route path="/results" element={<Results/>}/>
          <Route path="/freelances" element={<Freelances/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
