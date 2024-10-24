import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Tools from './components/Tools'; 
import Home from './components/Home'; 
import Tips from './components/Tips'; 
import AboutUs from './components/AboutUs'; 
import Sucess from './components/Sucess';
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
            <Route path="/dicas" element={<Tips />} /> 
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