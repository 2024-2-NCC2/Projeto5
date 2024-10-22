import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Tools from './pages/Tools'; 
import Home from './pages/Home'; 
import News from './pages/News'; 
import AboutUs from './pages/AboutUs'; 
import Sucess from './pages/Sucess';
import styled from 'styled-components';
import InvestorQuiz from './components/InvestorQuiz';
import MaxMinCalculator from './components/MaxMinCalculator';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 1rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/ferramentas" element={<Tools />} />
            <Route path="/noticias" element={<News />} /> 
            <Route path="/sobre-nos" element={<AboutUs />} /> 
            <Route path="/sucesso" element={<Sucess />} /> 
            <Route path="/quiz" element={<InvestorQuiz />}/>
            <Route path="/calculadora" element={<MaxMinCalculator />} />
          </Routes>
        </main>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;