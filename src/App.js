import React from 'react';
import './App.css';
import logo from './imagens/logo5.png';
import Nav from './components/Nav.js';
import Home from './components/Home'
import Felinos from './components/Felinos.js'
import Receitas from './components/Receitas.js'
import Series from './components/Series.js'
import Filmes from './components/Filmes.js'
import ResgateFred from './components/ResgateFred'
import LoiseDodo from './components/LoiseDodo'
import ReceitaPaoPizza from './components/ReceitaPaoPizza'
import DrEstranho from './components/DrEstranho'
import AdamProject from './components/AdamProject'
import SeriesDoMomento from './components/SeriesDoMomento'
import SpidermanNoWayHome from './components/SpidermanNoWayHome'
import Contato from './components/Contato'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
        <BrowserRouter>
          <div className="App">
          <img className='Logo' src={logo} alt="logo"></img>
        
          <Nav />
          <header className="App-header">
          <Routes>
              <Route exact path="/" element={<Home />} />                  
              <Route path="/Home" element={<Home />} />                            
              <Route path="/Felinos" element={<Felinos />} />
              <Route path="/Receitas" element={<Receitas />} />
              <Route path="/Series" element={<Series />} />
              <Route path="/Filmes" element={<Filmes />} />
              <Route path="/ResgateFred" element={<ResgateFred />} />
              <Route path="/ReceitaPaoPizza" element={<ReceitaPaoPizza />} />
              <Route path="/DrEstranho" element={<DrEstranho />} />
              <Route path="/AdamProject" element={<AdamProject />} />
              <Route path="/SeriesDoMomento" element={<SeriesDoMomento />} />
              <Route path="/SpidermanNoWayHome" element={<SpidermanNoWayHome />} />
              <Route path="/LoiseDodo" element={<LoiseDodo />} />      
              <Route path="/Contato" element={<Contato />} />
              <Route component={Home} /> 
          </Routes>
          </header>
          </div>
      </BrowserRouter>
      
)}



export default App;
