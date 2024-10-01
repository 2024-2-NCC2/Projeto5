import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Tools from './components/Tools'; 
import Home from './components/Home'; 
import News from './components/News'; 
import AboutUs from './components/AboutUs'; 
import Sucess from './components/Sucess';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/ferramentas" element={<Tools />} />
            <Route path="/noticias" element={<News />} /> 
            <Route path="/sobre-nos" element={<AboutUs />} /> 
            <Route path="/sucesso" element={<Sucess />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
