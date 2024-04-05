import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import ColorPage from './component/SelectedColorPage.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <App/> } />
        <Route path="/Material-UI-Colors" element = {<ColorPage paletteName="Material UI Colors"/>} />
        <Route path="/Flat-UI-Colors-v1" element = {<ColorPage paletteName="Flat UI Colors v1"/>} />
        <Route path="/Flat-UI-Colors-Dutch" element = {<ColorPage paletteName="Flat UI Colors Dutch"/>} />
        <Route path="/Flat-UI-Colors-American" element = {<ColorPage paletteName="Flat UI Colors American"/>} />
        <Route path="/Flat-UI-Colors-Aussie" element = {<ColorPage paletteName="Flat UI Colors Aussie"/>} />
        <Route path="/Flat-UI-Colors-British" element = {<ColorPage paletteName="Flat UI Colors British"/>} />
        <Route path="/Flat-UI-Colors-Spanish" element = {<ColorPage paletteName="Flat UI Colors Spanish"/>} />
        <Route path="/Flat-UI-Colors-Indian" element = {<ColorPage paletteName="Flat UI Colors Indian"/>} />
        <Route path="/Flat-UI-Colors-French" element = {<ColorPage paletteName="Flat UI Colors French"/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)